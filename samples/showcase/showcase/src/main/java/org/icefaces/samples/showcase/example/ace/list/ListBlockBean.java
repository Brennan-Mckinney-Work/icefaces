package org.icefaces.samples.showcase.example.ace.list;

import org.icefaces.samples.showcase.dataGenerators.utilityClasses.DataTableData;
import org.icefaces.samples.showcase.example.compat.dataTable.Car;
import org.icefaces.samples.showcase.metadata.annotation.*;
import org.icefaces.samples.showcase.metadata.context.ComponentExampleImpl;

import javax.faces.bean.CustomScoped;
import javax.faces.bean.ManagedBean;
import javax.faces.model.SelectItem;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@ComponentExample(
    parent = ListBean.BEAN_NAME,
    title = "example.ace.list.block.title",
    description = "example.ace.list.block.description",
    example = "/resources/examples/ace/list/listBlock.xhtml"
)
@ExampleResources(
    resources ={
        // xhtml
        @ExampleResource(type = ResourceType.xhtml,
                title="ListBlock.xhtml",
                resource = "/resources/examples/ace/"+
                        "list/listBlock.xhtml"),
        // Java Source
        @ExampleResource(type = ResourceType.java,
                title="ListBlockBean.java",
                resource = "/WEB-INF/classes/org/icefaces/samples/"+
                        "showcase/example/ace/list/ListBlockBean.java")
    }
)

@ManagedBean(name= ListBlockBean.BEAN_NAME)
@CustomScoped(value = "#{window}")
public class ListBlockBean extends ComponentExampleImpl<ListBlockBean> implements Serializable {
    public static final String BEAN_NAME = "listBlockBean";

    public ListBlockBean() {
        super(ListBlockBean.class);
    }

    List<SelectItem> stringList = new ArrayList<SelectItem>() {{
        for (String s : DataTableData.CHASSIS_ALL) {
            add(new SelectItem(s));
        }
    }};

    List<Car> carList = DataTableData.getDefaultData().subList(0,10);

    public List<SelectItem> getStringList() {
        return stringList;
    }

    public void setStringList(List<SelectItem> stringList) {
        this.stringList = stringList;
    }

    public List<Car> getCarList() {
        return carList;
    }

    public void setCarList(List<Car> carList) {
        this.carList = carList;
    }
}
