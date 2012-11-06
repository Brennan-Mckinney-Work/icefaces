/*
 * Copyright 2004-2012 ICEsoft Technologies Canada Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS
 * IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
/**
 *  Calendar Widget
 */
(function($) {
ice.ace.Calendar = function(id, cfg) {
    var behavior, altFieldVal;
    this.id = id;
    this.cfg = cfg;
    this.jqId = ice.ace.escapeClientId(id);
    this.jqElId = this.cfg.popup ? this.jqId + '_input' : this.jqId + '_inline';
    this.jq = $(this.jqElId);
    this.cfg.formId = this.jq.parents('form:first').attr('id');

    //i18n and l7n
    this.configureLocale();

    //Override locale pattern with user pattern
    if(this.cfg.pattern) {
        this.cfg.dateFormat = this.cfg.pattern;
    }

    //Select listener
    this.bindDateSelectListener();

    //Form field to use in inline mode
    if(!this.cfg.popup) {
        this.cfg.altField = $(this.jqId + '_input');
        altFieldVal = this.cfg.altField.val();
    }

    var hasTimePicker = this.hasTimePicker();

    //Setup timepicker
    if(hasTimePicker) {
        this.configureTimePicker();
    }

    if (this.cfg.withinSingleSubmit) {
        ice.cancelSingleSubmit(this.cfg.clientId);
    }

    //Initialize calendar
    if(!this.cfg.disabled) {
        if(hasTimePicker) {
            if (this.cfg.timeOnly) {
                this.jq.timepicker(this.cfg);
                this.jq.timepicker("setTime", $.trim(altFieldVal));
                this.pickerFn = "timepicker";
            }
            else {
                this.cfg.altFieldTimeOnly = false;
                this.jq.datetimepicker(this.cfg);
                this.pickerFn = "datetimepicker";
                if (!this.cfg.popup && $.type(altFieldVal) === "string") {
//                    this.cfg.altField.val(altFieldVal);
                    this.jq.datetimepicker("setDate", $.trim(altFieldVal));
                }
            }
        }
        else {
            this.jq.datepicker(this.cfg);
            this.pickerFn = "datepicker";
            if (!this.cfg.popup && $.type(altFieldVal) === "string") {
                this.jq.datepicker("setDate", $.trim(altFieldVal));
            }
        }
    }

    //Client behaviors and input skinning
    if(this.cfg.popup) {
        if(this.cfg.behaviors) {
            ice.ace.attachBehaviors(this.jq, this.cfg.behaviors);
        }

        //Visuals
        if(this.cfg.popup && this.cfg.theme != false) {
            ice.ace.skinInput(this.jq);
        }
        behavior = this.cfg && this.cfg.behaviors && this.cfg.behaviors.dateTextChange;
        if (behavior) {
            this.jq.change(function() {
                setFocus();
                ice.ace.ab(behavior);
            });
        } else if (this.cfg.singleSubmit) {
            this.jq.change(function(event) {
                setFocus();
                ice.se(event, cfg.clientId);
            });
        }
    }

    var widget = this;
    ice.onElementUpdate(id, function() {
        widget.destroy();
    });
};

ice.ace.Calendar.prototype.configureLocale = function() {
    var localeSettings = ice.ace.locales[this.cfg.locale];

    if(localeSettings) {
        for(var setting in localeSettings) {
            this.cfg[setting] = localeSettings[setting];
        }
    }
};

ice.ace.Calendar.prototype.bindDateSelectListener = function() {
    var _self = this;
    var behavior = this.cfg && this.cfg.behaviors && this.cfg.behaviors.dateSelect;

    if(this.cfg.behaviors) {
        this.cfg.onSelect = function(dateText, input) {
            var dateSelectBehavior = _self.cfg.behaviors['dateSelect'];

            if (dateSelectBehavior)
                ice.ace.ab.call(_self, dateSelectBehavior);
        };
    }
    if (!behavior && this.cfg.singleSubmit) {
        this.cfg.onSelect = function(dateText, inst) {
            ice.se(null, _self.cfg.clientId);
        };
    }

};

ice.ace.Calendar.prototype.configureTimePicker = function() {
    var pattern = this.cfg.dateFormat,
    timeSeparatorIndex = pattern.indexOf('h');
    
    this.cfg.dateFormat = pattern.substring(0, timeSeparatorIndex - 1);
    this.cfg.timeFormat = pattern.substring(timeSeparatorIndex, pattern.length);

    //second
    if(this.cfg.timeFormat.indexOf('ss') != -1) {
        this.cfg.showSecond = true;
    }

    //ampm
    if(this.cfg.timeFormat.indexOf('TT') != -1) {
        this.cfg.ampm = true;
    }
}

ice.ace.Calendar.prototype.hasTimePicker = function() {
    return this.cfg.dateFormat.indexOf('h') != -1;
}

ice.ace.Calendar.prototype.setDate = function(date) {
    this.jq.datetimepicker('setDate', date);
};

ice.ace.Calendar.prototype.getDate = function() {
    return this.jq.datetimepicker('getDate');
};

ice.ace.Calendar.prototype.enable = function() {
    this.jq.datetimepicker('enable');
};

ice.ace.Calendar.prototype.disable = function() {
    this.jq.datetimepicker('disable');
};

ice.ace.Calendar.prototype.destroy = function() {
    if (this.pickerFn) this.jq[this.pickerFn]("destroy");
    window[this.cfg.widgetVar] = this.jq = this.cfg.altField = null;
};

ice.ace.Calendar.init = function(options) {
    $(function() {
        var widgetVar = options.widgetVar, id = options.id;
        var input = $(ice.ace.escapeClientId(id) + "_input");
        var trigger = null, triggerClass = $.datepicker._triggerClass;
        var defaults = $.datepicker._defaults;
        var showOn = options.showOn || defaults.showOn;
        var buttonText = options.buttonText || defaults.buttonText;
        var buttonImage = options.buttonImage || defaults.buttonImage;
        var buttonImageOnly = options.buttonImageOnly || defaults.buttonImageOnly;
        var isRTL = options.isRTL || defaults.isRTL;
        var initAndShow = function() {
            if (window[widgetVar]) return;
            if (trigger) trigger.remove();
            window[widgetVar] = new ice.ace.Calendar(id, options);
            if (!window[widgetVar].pickerFn) return;
            window[widgetVar].jq[window[widgetVar].pickerFn]("show");
        };
        var initEltSet = $();

        if (!options.popup) {
            window[widgetVar] = new ice.ace.Calendar(id, options);
            return;
        }

        window[widgetVar] = null;
        if ($.inArray(showOn, ["button","both"]) >= 0) {
            trigger = buttonImageOnly ?
                $('<img/>').addClass(triggerClass).
                    attr({ src: buttonImage, alt: buttonText, title: buttonText }) :
                $('<button type="button"></button>').addClass(triggerClass).
                    html(buttonImage == '' ? buttonText : $('<img/>').attr(
                    { src:buttonImage, alt:buttonText, title:buttonText }));
            input[isRTL ? 'before' : 'after'](trigger);
            trigger.one("click.init", initAndShow);
            initEltSet = initEltSet.add(trigger);
        }
        if ($.inArray(showOn, ["focus","both"]) >= 0) {
            input.one("focus.init", initAndShow);
            initEltSet = initEltSet.add(input);
        }

        ice.onElementUpdate(id, function() {
            initEltSet.unbind(".init");
        });
    });
};
}(ice.ace.jq));
