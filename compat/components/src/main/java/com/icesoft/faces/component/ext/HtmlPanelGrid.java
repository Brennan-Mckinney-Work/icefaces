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

package com.icesoft.faces.component.ext;

import com.icesoft.faces.component.CSS_DEFAULT;
import com.icesoft.faces.component.ext.taglib.Util;
import com.icesoft.faces.context.effects.Effect;
import com.icesoft.faces.context.effects.JavascriptContext;

import javax.faces.context.FacesContext;
import javax.faces.el.ValueBinding;


/**
 * This is an extension of javax.faces.component.html.HtmlPanelGrid, which
 * provides some additional behavior to this component such as: <ul> <li>changes
 * the component's rendered state based on the authentication</li> <li>adds
 * effects to the component</li> <ul>
 */
public class HtmlPanelGrid extends javax.faces.component.html.HtmlPanelGrid {
    public static final String COMPONENT_TYPE =
            "com.icesoft.faces.HtmlPanelGrid";
    public static final String RENDERER_TYPE = "com.icesoft.faces.Grid";
    private static final boolean DEFAULT_VISIBLE = true;
    private String renderedOnUserRole = null;
    private Effect effect;
    private Boolean visible = null;

    public HtmlPanelGrid() {
        super();
        setRendererType(RENDERER_TYPE);
    }

    public void setValueBinding(String s, ValueBinding vb) {
        if (s != null && s.indexOf("effect") != -1) {
            // If this is an effect attribute make sure Ice Extras is included
            JavascriptContext.includeLib(JavascriptContext.ICE_EXTRAS,
                                         getFacesContext());
        }
        super.setValueBinding(s, vb);
    }

    /**
     * <p>Set the value of the <code>visible</code> property.</p>
     */
    public void setVisible(boolean visible) {
        this.visible = Boolean.valueOf(visible);
    }

    /**
     * <p>Return the value of the <code>visible</code> property.</p>
     */
    public boolean getVisible() {
        if (visible != null) {
            return visible.booleanValue();
        }
        ValueBinding vb = getValueBinding("visible");
        Boolean boolVal =
                vb != null ? (Boolean) vb.getValue(getFacesContext()) : null;
        return boolVal != null ? boolVal.booleanValue() : DEFAULT_VISIBLE;
    }

    /**
     * <p>Set the value of the <code>effect</code> property.</p>
     */
    public void setEffect(Effect effect) {
        this.effect = effect;
        JavascriptContext
                .includeLib(JavascriptContext.ICE_EXTRAS, getFacesContext());
    }

    /**
     * <p>Return the value of the <code>effect</code> property.</p>
     */
    public Effect getEffect() {
        if (effect != null) {
            return effect;
        }
        ValueBinding vb = getValueBinding("effect");
        return vb != null ? (Effect) vb.getValue(getFacesContext()) : null;
    }

    /**
     * <p>Set the value of the <code>renderedOnUserRole</code> property.</p>
     */
    public void setRenderedOnUserRole(String renderedOnUserRole) {
        this.renderedOnUserRole = renderedOnUserRole;
    }

    /**
     * <p>Return the value of the <code>renderedOnUserRole</code> property.</p>
     */
    public String getRenderedOnUserRole() {
        if (renderedOnUserRole != null) {
            return renderedOnUserRole;
        }
        ValueBinding vb = getValueBinding("renderedOnUserRole");
        return vb != null ? (String) vb.getValue(getFacesContext()) : null;
    }

    /**
     * <p>Return the value of the <code>rendered</code> property.</p>
     */
    public boolean isRendered() {
        if (!Util.isRenderedOnUserRole(this)) {
            return false;
        }
        return super.isRendered();
    }

    /**
     * <p>Gets the state of the instance as a <code>Serializable</code>
     * Object.</p>
     */
    public Object saveState(FacesContext context) {
        Object values[] = new Object[5];
        values[0] = super.saveState(context);
        values[1] = renderedOnUserRole;
        values[2] = effect;
        values[3] = visible;
        return ((Object) (values));
    }

    /**
     * <p>Perform any processing required to restore the state from the entries
     * in the state Object.</p>
     */
    public void restoreState(FacesContext context, Object state) {
        Object values[] = (Object[]) state;
        super.restoreState(context, values[0]);
        renderedOnUserRole = (String) values[1];
        effect = (Effect) values[2];
        visible = (Boolean) values[3];
    }


    /**
     * <p>Return the value of the <code>styleClass</code> property.</p>
     */
    public String getStyleClass() {
        return Util.getQualifiedStyleClass(this, 
                super.getStyleClass(), 
                CSS_DEFAULT.PANEL_GRID_DEFAULT_STYLE_CLASS, 
                "styleClass");
        
    }

    /**
     * <p>Return the value of the <code>headerClass</code> property.</p>
     */
    public String getHeaderClass() {
        return Util.getQualifiedStyleClass(this, 
                super.getHeaderClass(), 
                CSS_DEFAULT.HEADER, 
                "headerClass");
    }

    /**
     * <p>Return the value of the <code>footerClass</code> property.</p>
     */
    public String getFooterClass() {
        return Util.getQualifiedStyleClass(this, 
                super.getFooterClass(), 
                CSS_DEFAULT.FOOTER, 
                "footerClass");
    }
}
