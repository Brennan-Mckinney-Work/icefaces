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
package org.icefaces.ace.component.messages;

import org.icefaces.render.MandatoryResourceComponent;

import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.context.ResponseWriter;
import javax.faces.render.Renderer;
import java.io.IOException;
import java.util.Collections;
import java.util.Iterator;

@MandatoryResourceComponent(tagName = "messages", value = "org.icefaces.ace.component.messages.Messages")
public class MessagesRenderer extends Renderer {

    public void encodeEnd(FacesContext context, UIComponent component) throws IOException {

        ResponseWriter writer = context.getResponseWriter();
        Messages messages = (Messages) component;
        String forId = messages.getFor();
        Iterator messageIter = Collections.EMPTY_LIST.iterator();

        if (forId == null) {
            if (messages.isGlobalOnly()) {
                messageIter = context.getMessages(null);
            } else {
                messageIter = context.getMessages();
            }
        } else {
            UIComponent forComponent = messages.findComponent(forId);
            if (forComponent != null) {
                messageIter = context.getMessages(forComponent.getClientId(context));
            }
        }
        writer.startElement("div", messages);
        writer.writeAttribute("id", messages.getClientId(), "id");
        writer.writeAttribute("class", "ui-faces-messages", null);
        if (messageIter.hasNext()) {
            if ("table".equals(messages.getLayout())) {
                encodeMessageTable(writer, messages, messageIter);
            } else {
                encodeMessageList(writer, messages, messageIter);
            }
        }
        writer.endElement("div");
    }

    private void encodeMessageTable(ResponseWriter writer, Messages messages, Iterator messageIter) throws IOException {

        writer.startElement("table", messages);
        while (messageIter.hasNext()) {
            FacesMessage facesMessage = (FacesMessage) messageIter.next();
            if (facesMessage.isRendered() && !messages.isRedisplay()) {
                continue;
            }
            writer.startElement("tr", messages);
            writer.startElement("td", messages);
            encodeMessage(writer, messages, facesMessage);
            writer.endElement("td");
            writer.endElement("tr");
        }
        writer.endElement("table");
    }

    private void encodeMessageList(ResponseWriter writer, Messages messages, Iterator messageIter) throws IOException {

        writer.startElement("ul", messages);
        while (messageIter.hasNext()) {
            FacesMessage facesMessage = (FacesMessage) messageIter.next();
            if (facesMessage.isRendered() && !messages.isRedisplay()) {
                continue;
            }
            writer.startElement("li", messages);
            encodeMessage(writer, messages, facesMessage);
            writer.endElement("li");
        }
        writer.endElement("ul");
    }

    private void encodeMessage(ResponseWriter writer, Messages messages, FacesMessage facesMessage) throws IOException {

        String[] states = new String[]{"default", "default", "error", "error"};
        String[] icons = new String[]{"info", "lightbulb", "alert", "flag"};
        boolean showSummary = messages.isShowSummary();
        boolean showDetail = messages.isShowDetail();
        int ordinal = facesMessage.getSeverity().getOrdinal();

        writer.startElement("span", messages);
        writer.writeAttribute("class", "ui-faces-message", null);

        writer.startElement("span", messages);
        writer.writeAttribute("class", "ui-state-" + states[ordinal], null);

        writer.startElement("span", messages);
        writer.writeAttribute("class", "ui-icon ui-icon-" + icons[ordinal], null);
        writer.endElement("span");

        String summary = (null != (summary = facesMessage.getSummary())) ? summary : "";
        String detail = (null != (detail = facesMessage.getDetail())) ? detail : "";
        String text = ((showSummary ? summary : "") + " " + (showDetail ? detail : "")).trim();
        writer.writeText(text, messages, null);
        writer.endElement("span");

        writer.endElement("span");
        facesMessage.rendered();
    }
}
