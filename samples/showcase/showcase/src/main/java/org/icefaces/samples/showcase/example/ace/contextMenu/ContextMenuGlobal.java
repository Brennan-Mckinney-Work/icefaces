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

package org.icefaces.samples.showcase.example.ace.contextMenu;

import org.icefaces.samples.showcase.metadata.annotation.*;
import org.icefaces.samples.showcase.metadata.context.ComponentExampleImpl;

import javax.faces.bean.CustomScoped;
import javax.faces.bean.ManagedBean;
import javax.faces.event.ActionEvent;
import javax.faces.event.FacesEvent;
import javax.faces.event.ValueChangeEvent;
import javax.faces.component.UIComponent;
import javax.annotation.PostConstruct;
import java.io.Serializable;
import javax.faces.model.SelectItem;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Date;

@ComponentExample(
        parent = ContextMenuBean.BEAN_NAME,
        title = "example.ace.contextMenu.global.title",
        description = "example.ace.contextMenu.global.description",
        example = "/resources/examples/ace/contextMenu/contextMenuGlobal.xhtml"
)
@ExampleResources(
        resources ={
            // xhtml
            @ExampleResource(type = ResourceType.xhtml,
                    title="contextMenuGlobal.xhtml",
                    resource = "/resources/examples/ace/contextMenu/contextMenuGlobal.xhtml"),
            // Java Source
            @ExampleResource(type = ResourceType.java,
                    title="ContextMenuGlobal.java",
                    resource = "/WEB-INF/classes/org/icefaces/samples/showcase"+
                    "/example/ace/contextMenu/ContextMenuGlobal.java")
        }
)
@ManagedBean(name= ContextMenuGlobal.BEAN_NAME)
@CustomScoped(value = "#{window}")
public class ContextMenuGlobal extends ComponentExampleImpl<ContextMenuGlobal> implements Serializable {
    public static final String BEAN_NAME = "contextMenuGlobal";
    
    public ContextMenuGlobal() {
        super(ContextMenuGlobal.class);
    }
}
