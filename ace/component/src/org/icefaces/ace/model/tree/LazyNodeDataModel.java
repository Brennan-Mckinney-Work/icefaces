package org.icefaces.ace.model.tree;

import javax.swing.tree.TreeNode;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

/**
 * Copyright 2010-2011 ICEsoft Technologies Canada Corp.
 * <p/>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p/>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p/>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * <p/>
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * <p/>
 * User: Nils
 * Date: 2012-09-13
 * Time: 11:40 AM
 */
public abstract class LazyNodeDataModel<K> extends NodeDataModel<K> {
    private final KeySegmentConverter DEFAULT_CONVERTER = new NodeModelLazyListKeyConverter(this);
    private KeySegmentConverter converter;
    Map<K, List<K>> childMap = new HashMap<K, List<K>>();
    Map<K, K> parentMap = new HashMap<K, K>();

    public abstract List<K> loadChildrenForNode(K node);

    @Override
    public K navToKey(NodeKey key) {
        if (key == null)
            throw new IllegalArgumentException("null");

        Object[] keys = key.getKeys();

        // If we are navigating to a key with null segments
        // this indicates the first root, and we will
        // navigate to and change state to indicate such
        if ((keys == null || keys.length == 0)) {
            this.key = key;
            this.data = null;
            return null;
        }

        int i;
        K c = null;
        for (i = 0; i < keys.length; i++)
            c = navToChild(keys[i]);

        return c;
    }

    @Override
    public K navToParent() {
        if (atNullRoot()) return null;
        else {
            data = parentMap.get(getData());
            key = getKey().getParent();
            return data;
        }
    }

    @Override
    public K navToChild(Object keySegment) {
        // Navigate straight to index if default integer index
        // based key is used
        if (getConverter() == DEFAULT_CONVERTER) {
            Integer index = (Integer) keySegment;

            // Index from root
            if (getKey() == NodeKey.ROOT_KEY) {
                key = new NodeKey(index);
                data = getChildList(null).get(index);
                return data;
            } else {
                data = getChildList(getData()).get(index);
                key = getKey().append(index);
                return data;
            }
        }
        // Otherwise search for matching key in children
        else {
            for (Iterator<Map.Entry<NodeKey, K>> children = children();
                 children.hasNext();) {
                Map.Entry<NodeKey, K> childEntry = children.next();
                Object[] keys = childEntry.getKey().getKeys();

                if (keys[keys.length-1].equals(keySegment)) {
                    key = childEntry.getKey();
                    data = childEntry.getValue();
                    return data;
                }
            }
        }

        return null;
    }

    public List<K> getChildList(K node) {
        List<K> children = childMap.get(node);

        if (children == null) {
            children = loadChildrenForNode(getData());
            childMap.put(node, children);
            for (K child : children)
                parentMap.put(child, node);
        }

        return children;
    }

    @Override
    public Iterator<Map.Entry<NodeKey, K>> children() {
        List<K> children = getChildList(getData());

        return new NodeListToNodeEntryIterator<K>(
                getConverter(),
                getKey(),
                children);
    }

    @Override
    public KeySegmentConverter getConverter() {
        if (converter == null) return DEFAULT_CONVERTER;
        return converter;
    }

    @Override
    public void setConverter(KeySegmentConverter converter) {
        this.converter = converter;
    }

    @Override
    public boolean isNodeAvailable() {
        return getData() != null;
    }

    @Override
    public boolean isLeaf() {
        return getChildList(getData()).size() == 0;
    }

    @Override
    public boolean isMutable() {
        return false;
    }

    @Override
    public Object getWrappedData() {
        return null;
    }

    @Override
    public void setWrappedData(Object o) {}
}
