/*
 * Copyright 2004-2013 ICEsoft Technologies Canada Corp.
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

package com.icesoft.faces.component.paneltooltip;

import java.io.Serializable;


public class TooltipInfo implements Serializable {
    private String src = new String();
    private String state = "hide";
    private String x = "0px";
    private String y = "0px";
    private boolean eventFired;
    public TooltipInfo() {
    }
    
    public TooltipInfo(String info[]) {
        populateValues(info);
    }
    
    public void populateValues(String info[]) {
        String _src = info[1].split("=")[1];
        String _state = info[2].split("=")[1];
        if (!getState().equals(_state) || !getSrc().equals(_src)) {
    
            //change the x and y only on valueChangeEvent
            x = info[3].split("=")[1]+"px";
            y = info[4].split("=")[1]+"px";
            src = _src;
            state = _state;
            eventFired = true;
    
        }
    }
    public String getSrc() {
        return src;
    }
    
    public void setSrc(String src) {
        this.src = src;
    }
    
    public String getState() {
        return state;
    }
    
    public void setState(String state) {
        this.state = state;
    }
    
    public String getX() {
        return x;
    }
    
    public void setX(String x) {
        this.x = x;
    }
    
    public String getY() {
        return y;
    }
    
    public void setY(String y) {
        this.y = y;
    }
    
    public boolean isEventFired() {
        return eventFired;
    }
    
    public void setEventFired(boolean eventFired) {
        this.eventFired = eventFired;
    }
}    
