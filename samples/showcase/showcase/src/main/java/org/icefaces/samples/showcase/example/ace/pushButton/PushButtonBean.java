/*
 * Version: MPL 1.1
 *
 * The contents of this file are subject to the Mozilla Public License
 * Version 1.1 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific language governing rights and limitations under
 * the License.
 *
 * The Original Code is ICEfaces 1.5 open source software code, released
 * November 5, 2006. The Initial Developer of the Original Code is ICEsoft
 * Technologies Canada, Corp. Portions created by ICEsoft are Copyright (C)
 * 2004-2011 ICEsoft Technologies Canada, Corp. All Rights Reserved.
 *
 * Contributor(s): _____________________.
 */

package org.icefaces.samples.showcase.example.ace.pushButton;

import org.icefaces.samples.showcase.example.ace.accordionpanel.ImageSet.ImageInfo;
import org.icefaces.samples.showcase.metadata.annotation.Menu;
import org.icefaces.samples.showcase.metadata.annotation.MenuLink;                                                                       
import org.icefaces.samples.showcase.metadata.annotation.ComponentExample;
import org.icefaces.samples.showcase.metadata.annotation.ExampleResource;
import org.icefaces.samples.showcase.metadata.annotation.ExampleResources;
import org.icefaces.samples.showcase.metadata.annotation.ResourceType;
import org.icefaces.samples.showcase.metadata.context.ComponentExampleImpl;
import org.icefaces.samples.showcase.util.FacesUtils;

import javax.faces.bean.CustomScoped;
import javax.faces.bean.ManagedBean;
import javax.faces.context.FacesContext;
import javax.faces.event.ActionEvent;
import java.io.IOException;
import java.io.Serializable;
import org.icefaces.ace.component.animation.Blind;
import org.icefaces.ace.component.animation.Effect;
import org.icefaces.samples.showcase.example.ace.accordionpanel.ImageSet;


@ComponentExample(
        title = "example.ace.pushButton.title",
        description = "example.ace.pushButton.description",
        example = "/resources/examples/ace/pushButton/pushbutton.xhtml"
)
@ExampleResources(
        resources ={
            // xhtml
            @ExampleResource(type = ResourceType.xhtml,
                    title="pushbutton.xhtml",
                    resource = "/resources/examples/ace/pushButton/pushbutton.xhtml"),
            // Java Source
            @ExampleResource(type = ResourceType.java,
                    title="PushButtonBean.java",
                    resource = "/WEB-INF/classes/org/icefaces/samples/showcase/example/ace/pushButton/PushButtonBean.java")
        }
)
@Menu(
	title = "menu.ace.pushButton.subMenu.title",
	menuLinks = 
                {
                    @MenuLink(title = "menu.ace.pushButton.subMenu.main", isDefault = true,
                                     exampleBeanName = PushButtonBean.BEAN_NAME)
                }
)

@ManagedBean(name= PushButtonBean.BEAN_NAME)
@CustomScoped(value = "#{window}")
public class PushButtonBean extends ComponentExampleImpl<PushButtonBean> implements Serializable {

    public static final String BEAN_NAME = "pushButton";

    private String exampleValue;
    ImageSet.ImageInfo currentImage;
    
    public PushButtonBean() {
        super(PushButtonBean.class);
         currentImage = ImageSet.getRandomImage();
    }
    
    public String executeAction() {
        //application logic can be added here
        return null;
    }
    
    public void executeListener(ActionEvent event) 
    {
        currentImage = ImageSet.getRandomImage();
    }
    
    public void addMessage(ActionEvent event) 
    {
        FacesUtils.addInfoMessage("This button didn't submited or validated Required Field. Change current tabPane to invoke input field validation.");
    }

    public String getExampleValue() {
        return exampleValue;
    }

    public void setExampleValue(String exampleValue) {
        this.exampleValue = exampleValue;
    }

    public ImageInfo getCurrentImage() {
        return currentImage;
    }

    public void setCurrentImage(ImageInfo currentImage) {
        this.currentImage = currentImage;
    }
}
