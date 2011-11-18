/* 
* Original Code developed and contributed by Prime Technology. 
* Subsequent Code Modifications Copyright 2011 ICEsoft Technologies Canada Corp. (c) 
* 
* Licensed under the Apache License, Version 2.0 (the "License"); 
* you may not use this file except in compliance with the License. 
* You may obtain a copy of the License at 
* 
* http://www.apache.org/licenses/LICENSE-2.0 
* 
* Unless required by applicable law or agreed to in writing, software 
* distributed under the License is distributed on an "AS IS" BASIS, 
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
* See the License for the specific language governing permissions and 
* limitations under the License. 
* 
* NOTE THIS CODE HAS BEEN MODIFIED FROM ORIGINAL FORM 
* 
* Subsequent Code Modifications have been made and contributed by ICEsoft Technologies Canada Corp. (c). 
* 
* Code Modification 1: Integrated with ICEfaces Advanced Component Environment. 
* Contributors: ICEsoft Technologies Canada Corp. (c) 
* 
* Code Modification 2: [ADD BRIEF DESCRIPTION HERE] 
* Contributors: ______________________ 
* Contributors: ______________________ 
* 
*/

ice.ace.ProgressBar = function(id, cfg) {
    this.id = id;
    this.cfg = cfg;
    this.jqId = ice.ace.escapeClientId(id);

    if(this.cfg.usePolling) {
        this.cfg.formId = ice.ace.jq(this.jqId).parents('form:first').attr('id');
    }

    this.qObj = ice.ace.jq(this.jqId);
    this.qObj.progressbar(this.cfg);
    if (this.cfg.hasChangeListener) {
        this.qObj.bind('progressbarchange', this, this.changeListener);
    }
}

ice.ace.ProgressBar.prototype.setValue = function(value) {
    jQuery(this.jqId).progressbar('value', value);
}

ice.ace.ProgressBar.prototype.getValue  = function() {
    return jQuery(this.jqId).progressbar('value');
}

ice.ace.ProgressBar.prototype.start = function() {
    var _self = this;
	
    if(this.cfg.usePolling) {
		
        this.progressPoll = setInterval(function() {
            var options = {
                source: _self.id,
                execute: _self.id,
                formId: _self.cfg._formId,
                async: true,
                oncomplete: function(xhr, status, args) {
                    var value = args[_self.id + '_value'];
                    _self.setValue(value);

                    //trigger close listener
                    if(value === 100) {
                        _self.fireCompleteEvent();
                    }
                }
            };

            ice.ace.AjaxRequest(options);
            
        }, this.cfg.pollingInterval);
    }
}

ice.ace.ProgressBar.prototype.fireCompleteEvent = function() {
    clearInterval(this.progressPoll);

    var options = {
        source: this.id,
        execute: this.id,
        formId: this.cfg.formId,
        async: true
    };

    if(this.cfg.onCompleteUpdate)
        options.render = this.cfg.onCompleteUpdate;
    if(this.cfg.oncomplete)
        options.oncomplete = this.cfg.oncomplete;

    var params = {};
    params[this.id + '_complete'] = true;

    options.params = params;
	
    ice.ace.AjaxRequest(options);
}

ice.ace.ProgressBar.prototype.changeListener = function(ev, ui) {
    var data = ev.data, id = data.id;
    var options = {
        source: id,
        execute: id,
        formId: data.cfg.formId,
        async: true
    };

    var params = {};
    params[id + '_change'] = true;
    params[id + '_value'] = ui.value;
    params[id + '_percentage'] = ui.percentage;

    options.params = params;

    ice.ace.AjaxRequest(options);
};

ice.ace.ProgressBar.prototype.cancel = function() {
    clearInterval(this.progressPoll);
    var _self = this;

    var options = {
        source: this.id,
        execute: this.id,
        formId: this.cfg.formId,
        async: true,
        oncomplete:function(xhr, status, args) {
            _self.setValue(0);
        }
    };

    if(this.cfg.onCancelUpdate) {
        options.render = this.cfg.onCancelUpdate;
    }

    var params = {};
    params[this.id + '_cancel'] = true;

    options.params = params;

    ice.ace.AjaxRequest(options);
}
