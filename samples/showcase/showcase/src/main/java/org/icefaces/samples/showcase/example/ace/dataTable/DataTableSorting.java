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

package org.icefaces.samples.showcase.example.ace.dataTable;

import org.icefaces.samples.showcase.metadata.annotation.*;
import org.icefaces.samples.showcase.metadata.context.ComponentExampleImpl;

import javax.faces.bean.CustomScoped;
import javax.faces.bean.ManagedBean;
import javax.faces.event.ActionEvent;
import javax.faces.event.FacesEvent;
import javax.faces.event.ValueChangeEvent;
import java.io.Serializable;
import javax.faces.model.SelectItem;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@ComponentExample(
        parent = DataTableBean.BEAN_NAME,
        title = "example.ace.dataTable.sorting.title",
        description = "example.ace.dataTable.sorting.description",
        example = "/resources/examples/ace/dataTable/dataTableSorting.xhtml"
)
@ExampleResources(
        resources ={
            // xhtml
            @ExampleResource(type = ResourceType.xhtml,
                    title="dataTableSorting.xhtml",
                    resource = "/resources/examples/ace/dataTable/dataTableSorting.xhtml"),
            // Java Source
            @ExampleResource(type = ResourceType.java,
                    title="DataTableSorting.java",
                    resource = "/WEB-INF/classes/org/icefaces/samples/showcase"+
                    "/example/ace/dataTable/DataTableSorting.java")
        }
)
@ManagedBean(name= DataTableSorting.BEAN_NAME)
@CustomScoped(value = "#{window}")
public class DataTableSorting extends ComponentExampleImpl<DataTableSorting> implements Serializable {
    public static final String BEAN_NAME = "dataTableSorting";
    
    public DataTableSorting() {
        super(DataTableSorting.class);
    }
}
