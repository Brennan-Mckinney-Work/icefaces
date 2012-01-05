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

package org.icefaces.samples.showcase.example.ace.slider;

import org.icefaces.samples.showcase.metadata.annotation.ComponentExample;
import org.icefaces.samples.showcase.metadata.annotation.ExampleResource;
import org.icefaces.samples.showcase.metadata.annotation.ExampleResources;
import org.icefaces.samples.showcase.metadata.annotation.ResourceType;
import org.icefaces.samples.showcase.metadata.context.ComponentExampleImpl;

import javax.faces.bean.CustomScoped;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import java.io.Serializable;

@ComponentExample(
        parent = SliderBean.BEAN_NAME,
        title = "example.ace.slider.basic.title",
        description = "example.ace.slider.basic.description",
        example = "/resources/examples/ace/slider/slider-basic.xhtml"
)
@ExampleResources(
        resources = {
                // xhtml
                @ExampleResource(type = ResourceType.xhtml,
                        title = "slider-async-input.xhtml",
                        resource = "/resources/examples/ace/slider/slider-basic.xhtml"),
                // Java Source
                @ExampleResource(type = ResourceType.java,
                        title = "SliderBasicBean.java",
                        resource = "/WEB-INF/classes/org/icefaces/samples/showcase/example/ace/slider/SliderBasicBean.java")
        }
)
@ManagedBean(name= SliderBasicBean.BEAN_NAME)
@CustomScoped(value = "#{window}")
public class SliderBasicBean extends ComponentExampleImpl<SliderBasicBean>
        implements Serializable {

    public static final String BEAN_NAME = "sliderBasic";

    private boolean clickableRail = true;
    private double maxValue = 150.0;
    private double minValue = -30.0;
    private boolean xAxis = true;
    private String length = "200px";
    private double sliderValue = 0.0;

    public boolean isxAxis() {
        return xAxis;
    }

    public void setxAxis(boolean xAxis) {
        this.xAxis = xAxis;
    }

    public double getSliderValue() {
        return sliderValue;
    }

    public void setSliderValue(double sliderValue) {
        this.sliderValue = sliderValue;
    }

    public boolean isClickableRail() {
        return clickableRail;
    }

    public void setClickableRail(boolean clickableRail) {
        this.clickableRail = clickableRail;
    }

    public double getMaxValue() {
        return maxValue;
    }

    public void setMaxValue(double maxValue) {
        this.maxValue = maxValue;
    }

    public double getMinValue() {
        return minValue;
    }

    public void setMinValue(double minValue) {
        this.minValue = minValue;
    }

    public String getLength() {
        return length;
    }

    public void setLength(String length) {
        this.length = length;
    }

    public SliderBasicBean() {
        super(SliderBasicBean.class);
    }
}
