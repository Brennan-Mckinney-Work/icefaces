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
    var behavior;
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
    }

    var hasTimePicker = this.hasTimePicker();

    //Setup timepicker
    if(hasTimePicker) {
        this.configureTimePicker();
        }

    //Initialize calendar
    if(!this.cfg.disabled) {
        if(hasTimePicker) {
            if(this.cfg.timeOnly)
                this.jq.timepicker(this.cfg);
            else
                this.jq.datetimepicker(this.cfg);
        }
        else {
            this.jq.datepicker(this.cfg);
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
                ice.ace.ab(behavior);
            });
        }
    }
};

ice.ace.Calendar.prototype.configureLocale = function() {
    var localeSettings = ice.ace.locales[this.cfg.locale];
	
    if(localeSettings) {
        for(var setting in localeSettings) {
            this.cfg[setting] = localeSettings[setting];
        }
    }
}

ice.ace.Calendar.prototype.bindDateSelectListener = function() {
    var _self = this;
    var delLabel = function(inst) {
        if (!inst.inline) {
            inst.input.removeClass(inst.settings.inFieldLabelStyleClass);
            inst.input.data("labelIsInField", false);
        }
    };

    this.cfg.onSelect = function(dateText, inst) {
        delLabel(inst);
    };
    if(this.cfg.behaviors) {
        this.cfg.onSelect = function(dateText, inst) {
            var dateSelectBehavior = _self.cfg.behaviors['dateSelect'];
            delLabel(inst);

            if (dateSelectBehavior)
                ice.ace.ab.call(_self, dateSelectBehavior);
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
}

ice.ace.Calendar.prototype.getDate = function() {
    return this.jq.datetimepicker('getDate');
}

ice.ace.Calendar.prototype.enable = function() {
    this.jq.datetimepicker('enable');
}

ice.ace.Calendar.prototype.disable = function() {
    this.jq.datetimepicker('disable');
}
}(ice.ace.jq));
