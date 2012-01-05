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
 * IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either * express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

package com.icesoft.faces.component.paneltooltip;

import java.io.IOException;

import com.icesoft.faces.component.panelpopup.PanelPopupRenderer;
import com.icesoft.faces.component.ExtendedAttributeConstants;
import com.icesoft.faces.context.effects.LocalEffectEncoder;
import com.icesoft.faces.renderkit.dom_html_basic.HTML;
import com.icesoft.faces.renderkit.dom_html_basic.PassThruAttributeRenderer;

import javax.faces.context.FacesContext;
import javax.faces.component.UIComponent;

import org.w3c.dom.Element;

public class PanelTooltipRenderer extends PanelPopupRenderer{
    // Basically, everything is excluded
    private static final String[] PASSTHRU_EXCLUDE =
        new String[] { HTML.STYLE_ATTR };
    
    private static final String[] PASSTHRU_JS_EVENTS = LocalEffectEncoder.maskEvents(
            ExtendedAttributeConstants.getAttributes(
                ExtendedAttributeConstants.ICE_PANELPOPUP));
    private static final String[] PASSTHRU =
            ExtendedAttributeConstants.getAttributes(
                ExtendedAttributeConstants.ICE_PANELPOPUP,
                new String[][] {PASSTHRU_EXCLUDE, PASSTHRU_JS_EVENTS}); 

    protected void doPassThru(FacesContext facesContext, UIComponent uiComponent,
            Element root) {
        PassThruAttributeRenderer.renderHtmlAttributes(
            facesContext, uiComponent, PASSTHRU);
        LocalEffectEncoder.encode(
                facesContext, uiComponent, PASSTHRU_JS_EVENTS, null, root, null);        
    }
    
    public void encodeBegin(FacesContext facesContext, UIComponent uiComponent)
    throws IOException {
        PanelTooltip panelTooltip = (PanelTooltip) uiComponent;
        if ("none".equals(panelTooltip.getHideOn())) {
            panelTooltip.removeTooltipFromVisibleList(facesContext);
        }
        super.encodeBegin(facesContext, uiComponent);
    }
    

}
