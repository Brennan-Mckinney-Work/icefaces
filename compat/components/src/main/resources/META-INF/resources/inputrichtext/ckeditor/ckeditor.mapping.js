window.CKEDITOR_GETURL = function(r) { var mappings = [{i: "CHANGES.html", o: "#{resource['inputrichtext:ckeditor/CHANGES.html']}"},{i: "INSTALL.html", o: "#{resource['inputrichtext:ckeditor/INSTALL.html']}"},{i: "LICENSE.html", o: "#{resource['inputrichtext:ckeditor/LICENSE.html']}"},{i: "adapters/jquery.js", o: "#{resource['inputrichtext:ckeditor/adapters/jquery.js']}"},{i: "ckeditor.js", o: "#{resource['inputrichtext:ckeditor/ckeditor.js']}"},{i: "ckeditor_basic.js", o: "#{resource['inputrichtext:ckeditor/ckeditor_basic.js']}"},{i: "ckeditor_basic_source.js", o: "#{resource['inputrichtext:ckeditor/ckeditor_basic_source.js']}"},{i: "ckeditor_source.js", o: "#{resource['inputrichtext:ckeditor/ckeditor_source.js']}"},{i: "config.js", o: "#{resource['inputrichtext:ckeditor/config.js']}"},{i: "lang/_languages.js", o: "#{resource['inputrichtext:ckeditor/lang/_languages.js']}"},{i: "lang/_translationstatus.txt", o: "#{resource['inputrichtext:ckeditor/lang/_translationstatus.txt']}"},{i: "lang/af.js", o: "#{resource['inputrichtext:ckeditor/lang/af.js']}"},{i: "lang/ar.js", o: "#{resource['inputrichtext:ckeditor/lang/ar.js']}"},{i: "lang/bg.js", o: "#{resource['inputrichtext:ckeditor/lang/bg.js']}"},{i: "lang/bn.js", o: "#{resource['inputrichtext:ckeditor/lang/bn.js']}"},{i: "lang/bs.js", o: "#{resource['inputrichtext:ckeditor/lang/bs.js']}"},{i: "lang/ca.js", o: "#{resource['inputrichtext:ckeditor/lang/ca.js']}"},{i: "lang/cs.js", o: "#{resource['inputrichtext:ckeditor/lang/cs.js']}"},{i: "lang/cy.js", o: "#{resource['inputrichtext:ckeditor/lang/cy.js']}"},{i: "lang/da.js", o: "#{resource['inputrichtext:ckeditor/lang/da.js']}"},{i: "lang/de.js", o: "#{resource['inputrichtext:ckeditor/lang/de.js']}"},{i: "lang/el.js", o: "#{resource['inputrichtext:ckeditor/lang/el.js']}"},{i: "lang/en-au.js", o: "#{resource['inputrichtext:ckeditor/lang/en-au.js']}"},{i: "lang/en-ca.js", o: "#{resource['inputrichtext:ckeditor/lang/en-ca.js']}"},{i: "lang/en-gb.js", o: "#{resource['inputrichtext:ckeditor/lang/en-gb.js']}"},{i: "lang/en.js", o: "#{resource['inputrichtext:ckeditor/lang/en.js']}"},{i: "lang/eo.js", o: "#{resource['inputrichtext:ckeditor/lang/eo.js']}"},{i: "lang/es.js", o: "#{resource['inputrichtext:ckeditor/lang/es.js']}"},{i: "lang/et.js", o: "#{resource['inputrichtext:ckeditor/lang/et.js']}"},{i: "lang/eu.js", o: "#{resource['inputrichtext:ckeditor/lang/eu.js']}"},{i: "lang/fa.js", o: "#{resource['inputrichtext:ckeditor/lang/fa.js']}"},{i: "lang/fi.js", o: "#{resource['inputrichtext:ckeditor/lang/fi.js']}"},{i: "lang/fo.js", o: "#{resource['inputrichtext:ckeditor/lang/fo.js']}"},{i: "lang/fr-ca.js", o: "#{resource['inputrichtext:ckeditor/lang/fr-ca.js']}"},{i: "lang/fr.js", o: "#{resource['inputrichtext:ckeditor/lang/fr.js']}"},{i: "lang/gl.js", o: "#{resource['inputrichtext:ckeditor/lang/gl.js']}"},{i: "lang/gu.js", o: "#{resource['inputrichtext:ckeditor/lang/gu.js']}"},{i: "lang/he.js", o: "#{resource['inputrichtext:ckeditor/lang/he.js']}"},{i: "lang/hi.js", o: "#{resource['inputrichtext:ckeditor/lang/hi.js']}"},{i: "lang/hr.js", o: "#{resource['inputrichtext:ckeditor/lang/hr.js']}"},{i: "lang/hu.js", o: "#{resource['inputrichtext:ckeditor/lang/hu.js']}"},{i: "lang/id.js", o: "#{resource['inputrichtext:ckeditor/lang/id.js']}"},{i: "lang/is.js", o: "#{resource['inputrichtext:ckeditor/lang/is.js']}"},{i: "lang/it.js", o: "#{resource['inputrichtext:ckeditor/lang/it.js']}"},{i: "lang/ja.js", o: "#{resource['inputrichtext:ckeditor/lang/ja.js']}"},{i: "lang/ka.js", o: "#{resource['inputrichtext:ckeditor/lang/ka.js']}"},{i: "lang/km.js", o: "#{resource['inputrichtext:ckeditor/lang/km.js']}"},{i: "lang/ko.js", o: "#{resource['inputrichtext:ckeditor/lang/ko.js']}"},{i: "lang/ku.js", o: "#{resource['inputrichtext:ckeditor/lang/ku.js']}"},{i: "lang/lt.js", o: "#{resource['inputrichtext:ckeditor/lang/lt.js']}"},{i: "lang/lv.js", o: "#{resource['inputrichtext:ckeditor/lang/lv.js']}"},{i: "lang/mk.js", o: "#{resource['inputrichtext:ckeditor/lang/mk.js']}"},{i: "lang/mn.js", o: "#{resource['inputrichtext:ckeditor/lang/mn.js']}"},{i: "lang/ms.js", o: "#{resource['inputrichtext:ckeditor/lang/ms.js']}"},{i: "lang/nb.js", o: "#{resource['inputrichtext:ckeditor/lang/nb.js']}"},{i: "lang/nl.js", o: "#{resource['inputrichtext:ckeditor/lang/nl.js']}"},{i: "lang/no.js", o: "#{resource['inputrichtext:ckeditor/lang/no.js']}"},{i: "lang/pl.js", o: "#{resource['inputrichtext:ckeditor/lang/pl.js']}"},{i: "lang/pt-br.js", o: "#{resource['inputrichtext:ckeditor/lang/pt-br.js']}"},{i: "lang/pt.js", o: "#{resource['inputrichtext:ckeditor/lang/pt.js']}"},{i: "lang/ro.js", o: "#{resource['inputrichtext:ckeditor/lang/ro.js']}"},{i: "lang/ru.js", o: "#{resource['inputrichtext:ckeditor/lang/ru.js']}"},{i: "lang/sk.js", o: "#{resource['inputrichtext:ckeditor/lang/sk.js']}"},{i: "lang/sl.js", o: "#{resource['inputrichtext:ckeditor/lang/sl.js']}"},{i: "lang/sr-latn.js", o: "#{resource['inputrichtext:ckeditor/lang/sr-latn.js']}"},{i: "lang/sr.js", o: "#{resource['inputrichtext:ckeditor/lang/sr.js']}"},{i: "lang/sv.js", o: "#{resource['inputrichtext:ckeditor/lang/sv.js']}"},{i: "lang/th.js", o: "#{resource['inputrichtext:ckeditor/lang/th.js']}"},{i: "lang/tr.js", o: "#{resource['inputrichtext:ckeditor/lang/tr.js']}"},{i: "lang/ug.js", o: "#{resource['inputrichtext:ckeditor/lang/ug.js']}"},{i: "lang/uk.js", o: "#{resource['inputrichtext:ckeditor/lang/uk.js']}"},{i: "lang/vi.js", o: "#{resource['inputrichtext:ckeditor/lang/vi.js']}"},{i: "lang/zh-cn.js", o: "#{resource['inputrichtext:ckeditor/lang/zh-cn.js']}"},{i: "lang/zh.js", o: "#{resource['inputrichtext:ckeditor/lang/zh.js']}"},{i: "plugins/a11yhelp/dialogs/a11yhelp.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/dialogs/a11yhelp.js']}"},{i: "plugins/a11yhelp/lang/_translationstatus.txt", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/_translationstatus.txt']}"},{i: "plugins/a11yhelp/lang/cs.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/cs.js']}"},{i: "plugins/a11yhelp/lang/cy.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/cy.js']}"},{i: "plugins/a11yhelp/lang/da.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/da.js']}"},{i: "plugins/a11yhelp/lang/de.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/de.js']}"},{i: "plugins/a11yhelp/lang/el.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/el.js']}"},{i: "plugins/a11yhelp/lang/en.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/en.js']}"},{i: "plugins/a11yhelp/lang/eo.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/eo.js']}"},{i: "plugins/a11yhelp/lang/fa.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/fa.js']}"},{i: "plugins/a11yhelp/lang/fi.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/fi.js']}"},{i: "plugins/a11yhelp/lang/fr.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/fr.js']}"},{i: "plugins/a11yhelp/lang/gu.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/gu.js']}"},{i: "plugins/a11yhelp/lang/he.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/he.js']}"},{i: "plugins/a11yhelp/lang/it.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/it.js']}"},{i: "plugins/a11yhelp/lang/ku.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/ku.js']}"},{i: "plugins/a11yhelp/lang/lv.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/lv.js']}"},{i: "plugins/a11yhelp/lang/mk.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/mk.js']}"},{i: "plugins/a11yhelp/lang/nb.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/nb.js']}"},{i: "plugins/a11yhelp/lang/nl.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/nl.js']}"},{i: "plugins/a11yhelp/lang/no.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/no.js']}"},{i: "plugins/a11yhelp/lang/pt-br.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/pt-br.js']}"},{i: "plugins/a11yhelp/lang/ro.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/ro.js']}"},{i: "plugins/a11yhelp/lang/sk.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/sk.js']}"},{i: "plugins/a11yhelp/lang/tr.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/tr.js']}"},{i: "plugins/a11yhelp/lang/ug.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/ug.js']}"},{i: "plugins/a11yhelp/lang/vi.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/vi.js']}"},{i: "plugins/a11yhelp/lang/zh-cn.js", o: "#{resource['inputrichtext:ckeditor/plugins/a11yhelp/lang/zh-cn.js']}"},{i: "plugins/about/dialogs/about.js", o: "#{resource['inputrichtext:ckeditor/plugins/about/dialogs/about.js']}"},{i: "plugins/adobeair/plugin.js", o: "#{resource['inputrichtext:ckeditor/plugins/adobeair/plugin.js']}"},{i: "plugins/ajax/plugin.js", o: "#{resource['inputrichtext:ckeditor/plugins/ajax/plugin.js']}"},{i: "plugins/autogrow/plugin.js", o: "#{resource['inputrichtext:ckeditor/plugins/autogrow/plugin.js']}"},{i: "plugins/bbcode/plugin.js", o: "#{resource['inputrichtext:ckeditor/plugins/bbcode/plugin.js']}"},{i: "plugins/clipboard/dialogs/paste.js", o: "#{resource['inputrichtext:ckeditor/plugins/clipboard/dialogs/paste.js']}"},{i: "plugins/colordialog/dialogs/colordialog.js", o: "#{resource['inputrichtext:ckeditor/plugins/colordialog/dialogs/colordialog.js']}"},{i: "plugins/devtools/lang/_translationstatus.txt", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/_translationstatus.txt']}"},{i: "plugins/devtools/lang/bg.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/bg.js']}"},{i: "plugins/devtools/lang/cs.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/cs.js']}"},{i: "plugins/devtools/lang/cy.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/cy.js']}"},{i: "plugins/devtools/lang/da.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/da.js']}"},{i: "plugins/devtools/lang/de.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/de.js']}"},{i: "plugins/devtools/lang/el.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/el.js']}"},{i: "plugins/devtools/lang/en.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/en.js']}"},{i: "plugins/devtools/lang/eo.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/eo.js']}"},{i: "plugins/devtools/lang/et.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/et.js']}"},{i: "plugins/devtools/lang/fa.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/fa.js']}"},{i: "plugins/devtools/lang/fi.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/fi.js']}"},{i: "plugins/devtools/lang/fr.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/fr.js']}"},{i: "plugins/devtools/lang/gu.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/gu.js']}"},{i: "plugins/devtools/lang/he.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/he.js']}"},{i: "plugins/devtools/lang/hr.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/hr.js']}"},{i: "plugins/devtools/lang/it.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/it.js']}"},{i: "plugins/devtools/lang/ku.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/ku.js']}"},{i: "plugins/devtools/lang/lv.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/lv.js']}"},{i: "plugins/devtools/lang/nb.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/nb.js']}"},{i: "plugins/devtools/lang/nl.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/nl.js']}"},{i: "plugins/devtools/lang/no.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/no.js']}"},{i: "plugins/devtools/lang/pl.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/pl.js']}"},{i: "plugins/devtools/lang/pt-br.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/pt-br.js']}"},{i: "plugins/devtools/lang/sk.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/sk.js']}"},{i: "plugins/devtools/lang/tr.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/tr.js']}"},{i: "plugins/devtools/lang/ug.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/ug.js']}"},{i: "plugins/devtools/lang/uk.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/uk.js']}"},{i: "plugins/devtools/lang/vi.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/vi.js']}"},{i: "plugins/devtools/lang/zh-cn.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/lang/zh-cn.js']}"},{i: "plugins/devtools/plugin.js", o: "#{resource['inputrichtext:ckeditor/plugins/devtools/plugin.js']}"},{i: "plugins/dialog/dialogDefinition.js", o: "#{resource['inputrichtext:ckeditor/plugins/dialog/dialogDefinition.js']}"},{i: "plugins/div/dialogs/div.js", o: "#{resource['inputrichtext:ckeditor/plugins/div/dialogs/div.js']}"},{i: "plugins/docprops/dialogs/docprops.js", o: "#{resource['inputrichtext:ckeditor/plugins/docprops/dialogs/docprops.js']}"},{i: "plugins/docprops/plugin.js", o: "#{resource['inputrichtext:ckeditor/plugins/docprops/plugin.js']}"},{i: "plugins/find/dialogs/find.js", o: "#{resource['inputrichtext:ckeditor/plugins/find/dialogs/find.js']}"},{i: "plugins/flash/dialogs/flash.js", o: "#{resource['inputrichtext:ckeditor/plugins/flash/dialogs/flash.js']}"},{i: "plugins/forms/dialogs/button.js", o: "#{resource['inputrichtext:ckeditor/plugins/forms/dialogs/button.js']}"},{i: "plugins/forms/dialogs/checkbox.js", o: "#{resource['inputrichtext:ckeditor/plugins/forms/dialogs/checkbox.js']}"},{i: "plugins/forms/dialogs/form.js", o: "#{resource['inputrichtext:ckeditor/plugins/forms/dialogs/form.js']}"},{i: "plugins/forms/dialogs/hiddenfield.js", o: "#{resource['inputrichtext:ckeditor/plugins/forms/dialogs/hiddenfield.js']}"},{i: "plugins/forms/dialogs/radio.js", o: "#{resource['inputrichtext:ckeditor/plugins/forms/dialogs/radio.js']}"},{i: "plugins/forms/dialogs/select.js", o: "#{resource['inputrichtext:ckeditor/plugins/forms/dialogs/select.js']}"},{i: "plugins/forms/dialogs/textarea.js", o: "#{resource['inputrichtext:ckeditor/plugins/forms/dialogs/textarea.js']}"},{i: "plugins/forms/dialogs/textfield.js", o: "#{resource['inputrichtext:ckeditor/plugins/forms/dialogs/textfield.js']}"},{i: "plugins/iframe/dialogs/iframe.js", o: "#{resource['inputrichtext:ckeditor/plugins/iframe/dialogs/iframe.js']}"},{i: "plugins/iframedialog/plugin.js", o: "#{resource['inputrichtext:ckeditor/plugins/iframedialog/plugin.js']}"},{i: "plugins/image/dialogs/image.js", o: "#{resource['inputrichtext:ckeditor/plugins/image/dialogs/image.js']}"},{i: "plugins/link/dialogs/anchor.js", o: "#{resource['inputrichtext:ckeditor/plugins/link/dialogs/anchor.js']}"},{i: "plugins/link/dialogs/link.js", o: "#{resource['inputrichtext:ckeditor/plugins/link/dialogs/link.js']}"},{i: "plugins/liststyle/dialogs/liststyle.js", o: "#{resource['inputrichtext:ckeditor/plugins/liststyle/dialogs/liststyle.js']}"},{i: "plugins/pastefromword/filter/default.js", o: "#{resource['inputrichtext:ckeditor/plugins/pastefromword/filter/default.js']}"},{i: "plugins/pastetext/dialogs/pastetext.js", o: "#{resource['inputrichtext:ckeditor/plugins/pastetext/dialogs/pastetext.js']}"},{i: "plugins/placeholder/dialogs/placeholder.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/dialogs/placeholder.js']}"},{i: "plugins/placeholder/lang/_translationstatus.txt", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/_translationstatus.txt']}"},{i: "plugins/placeholder/lang/bg.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/bg.js']}"},{i: "plugins/placeholder/lang/cs.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/cs.js']}"},{i: "plugins/placeholder/lang/cy.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/cy.js']}"},{i: "plugins/placeholder/lang/da.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/da.js']}"},{i: "plugins/placeholder/lang/de.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/de.js']}"},{i: "plugins/placeholder/lang/el.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/el.js']}"},{i: "plugins/placeholder/lang/en.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/en.js']}"},{i: "plugins/placeholder/lang/eo.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/eo.js']}"},{i: "plugins/placeholder/lang/et.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/et.js']}"},{i: "plugins/placeholder/lang/fa.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/fa.js']}"},{i: "plugins/placeholder/lang/fi.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/fi.js']}"},{i: "plugins/placeholder/lang/fr.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/fr.js']}"},{i: "plugins/placeholder/lang/he.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/he.js']}"},{i: "plugins/placeholder/lang/hr.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/hr.js']}"},{i: "plugins/placeholder/lang/it.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/it.js']}"},{i: "plugins/placeholder/lang/ku.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/ku.js']}"},{i: "plugins/placeholder/lang/lv.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/lv.js']}"},{i: "plugins/placeholder/lang/nb.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/nb.js']}"},{i: "plugins/placeholder/lang/nl.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/nl.js']}"},{i: "plugins/placeholder/lang/no.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/no.js']}"},{i: "plugins/placeholder/lang/pl.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/pl.js']}"},{i: "plugins/placeholder/lang/pt-br.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/pt-br.js']}"},{i: "plugins/placeholder/lang/sk.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/sk.js']}"},{i: "plugins/placeholder/lang/tr.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/tr.js']}"},{i: "plugins/placeholder/lang/ug.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/ug.js']}"},{i: "plugins/placeholder/lang/uk.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/uk.js']}"},{i: "plugins/placeholder/lang/vi.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/vi.js']}"},{i: "plugins/placeholder/lang/zh-cn.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/lang/zh-cn.js']}"},{i: "plugins/placeholder/plugin.js", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/plugin.js']}"},{i: "plugins/preview/preview.html", o: "#{resource['inputrichtext:ckeditor/plugins/preview/preview.html']}"},{i: "plugins/scayt/dialogs/options.js", o: "#{resource['inputrichtext:ckeditor/plugins/scayt/dialogs/options.js']}"},{i: "plugins/smiley/dialogs/smiley.js", o: "#{resource['inputrichtext:ckeditor/plugins/smiley/dialogs/smiley.js']}"},{i: "plugins/specialchar/dialogs/specialchar.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/dialogs/specialchar.js']}"},{i: "plugins/specialchar/lang/_translationstatus.txt", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/_translationstatus.txt']}"},{i: "plugins/specialchar/lang/cs.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/cs.js']}"},{i: "plugins/specialchar/lang/cy.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/cy.js']}"},{i: "plugins/specialchar/lang/de.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/de.js']}"},{i: "plugins/specialchar/lang/el.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/el.js']}"},{i: "plugins/specialchar/lang/en.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/en.js']}"},{i: "plugins/specialchar/lang/eo.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/eo.js']}"},{i: "plugins/specialchar/lang/et.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/et.js']}"},{i: "plugins/specialchar/lang/fa.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/fa.js']}"},{i: "plugins/specialchar/lang/fi.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/fi.js']}"},{i: "plugins/specialchar/lang/fr.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/fr.js']}"},{i: "plugins/specialchar/lang/he.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/he.js']}"},{i: "plugins/specialchar/lang/hr.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/hr.js']}"},{i: "plugins/specialchar/lang/it.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/it.js']}"},{i: "plugins/specialchar/lang/ku.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/ku.js']}"},{i: "plugins/specialchar/lang/lv.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/lv.js']}"},{i: "plugins/specialchar/lang/nb.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/nb.js']}"},{i: "plugins/specialchar/lang/nl.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/nl.js']}"},{i: "plugins/specialchar/lang/no.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/no.js']}"},{i: "plugins/specialchar/lang/pt-br.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/pt-br.js']}"},{i: "plugins/specialchar/lang/sk.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/sk.js']}"},{i: "plugins/specialchar/lang/tr.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/tr.js']}"},{i: "plugins/specialchar/lang/ug.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/ug.js']}"},{i: "plugins/specialchar/lang/zh-cn.js", o: "#{resource['inputrichtext:ckeditor/plugins/specialchar/lang/zh-cn.js']}"},{i: "plugins/styles/styles/default.js", o: "#{resource['inputrichtext:ckeditor/plugins/styles/styles/default.js']}"},{i: "plugins/stylesheetparser/plugin.js", o: "#{resource['inputrichtext:ckeditor/plugins/stylesheetparser/plugin.js']}"},{i: "plugins/table/dialogs/table.js", o: "#{resource['inputrichtext:ckeditor/plugins/table/dialogs/table.js']}"},{i: "plugins/tableresize/plugin.js", o: "#{resource['inputrichtext:ckeditor/plugins/tableresize/plugin.js']}"},{i: "plugins/tabletools/dialogs/tableCell.js", o: "#{resource['inputrichtext:ckeditor/plugins/tabletools/dialogs/tableCell.js']}"},{i: "plugins/templates/dialogs/templates.js", o: "#{resource['inputrichtext:ckeditor/plugins/templates/dialogs/templates.js']}"},{i: "plugins/templates/templates/default.js", o: "#{resource['inputrichtext:ckeditor/plugins/templates/templates/default.js']}"},{i: "plugins/uicolor/dialogs/uicolor.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/dialogs/uicolor.js']}"},{i: "plugins/uicolor/lang/_translationstatus.txt", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/_translationstatus.txt']}"},{i: "plugins/uicolor/lang/bg.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/bg.js']}"},{i: "plugins/uicolor/lang/cs.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/cs.js']}"},{i: "plugins/uicolor/lang/cy.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/cy.js']}"},{i: "plugins/uicolor/lang/da.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/da.js']}"},{i: "plugins/uicolor/lang/de.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/de.js']}"},{i: "plugins/uicolor/lang/el.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/el.js']}"},{i: "plugins/uicolor/lang/en.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/en.js']}"},{i: "plugins/uicolor/lang/eo.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/eo.js']}"},{i: "plugins/uicolor/lang/et.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/et.js']}"},{i: "plugins/uicolor/lang/fa.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/fa.js']}"},{i: "plugins/uicolor/lang/fi.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/fi.js']}"},{i: "plugins/uicolor/lang/fr.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/fr.js']}"},{i: "plugins/uicolor/lang/he.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/he.js']}"},{i: "plugins/uicolor/lang/hr.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/hr.js']}"},{i: "plugins/uicolor/lang/it.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/it.js']}"},{i: "plugins/uicolor/lang/ku.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/ku.js']}"},{i: "plugins/uicolor/lang/lv.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/lv.js']}"},{i: "plugins/uicolor/lang/mk.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/mk.js']}"},{i: "plugins/uicolor/lang/nb.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/nb.js']}"},{i: "plugins/uicolor/lang/nl.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/nl.js']}"},{i: "plugins/uicolor/lang/no.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/no.js']}"},{i: "plugins/uicolor/lang/pl.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/pl.js']}"},{i: "plugins/uicolor/lang/pt-br.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/pt-br.js']}"},{i: "plugins/uicolor/lang/sk.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/sk.js']}"},{i: "plugins/uicolor/lang/tr.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/tr.js']}"},{i: "plugins/uicolor/lang/ug.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/ug.js']}"},{i: "plugins/uicolor/lang/uk.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/uk.js']}"},{i: "plugins/uicolor/lang/vi.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/vi.js']}"},{i: "plugins/uicolor/lang/zh-cn.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/lang/zh-cn.js']}"},{i: "plugins/uicolor/plugin.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/plugin.js']}"},{i: "plugins/uicolor/yui/yui.js", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/yui/yui.js']}"},{i: "plugins/wsc/dialogs/ciframe.html", o: "#{resource['inputrichtext:ckeditor/plugins/wsc/dialogs/ciframe.html']}"},{i: "plugins/wsc/dialogs/tmpFrameset.html", o: "#{resource['inputrichtext:ckeditor/plugins/wsc/dialogs/tmpFrameset.html']}"},{i: "plugins/wsc/dialogs/wsc.js", o: "#{resource['inputrichtext:ckeditor/plugins/wsc/dialogs/wsc.js']}"},{i: "plugins/xml/plugin.js", o: "#{resource['inputrichtext:ckeditor/plugins/xml/plugin.js']}"},{i: "skins/kama/skin.js", o: "#{resource['inputrichtext:ckeditor/skins/kama/skin.js']}"},{i: "skins/office2003/skin.js", o: "#{resource['inputrichtext:ckeditor/skins/office2003/skin.js']}"},{i: "skins/v2/skin.js", o: "#{resource['inputrichtext:ckeditor/skins/v2/skin.js']}"},{i: "themes/default/theme.js", o: "#{resource['inputrichtext:ckeditor/themes/default/theme.js']}"},{i: "contents.css", o: "#{resource['inputrichtext:ckeditor/contents.css']}"},{i: "plugins/scayt/dialogs/toolbar.css", o: "#{resource['inputrichtext:ckeditor/plugins/scayt/dialogs/toolbar.css']}"},{i: "plugins/uicolor/yui/assets/yui.css", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/yui/assets/yui.css']}"},{i: "plugins/wsc/dialogs/wsc.css", o: "#{resource['inputrichtext:ckeditor/plugins/wsc/dialogs/wsc.css']}"},{i: "skins/kama/dialog.css", o: "#{resource['inputrichtext:ckeditor/skins/kama/dialog.css']}"},{i: "skins/kama/editor.css", o: "#{resource['inputrichtext:ckeditor/skins/kama/editor.css']}"},{i: "skins/kama/templates.css", o: "#{resource['inputrichtext:ckeditor/skins/kama/templates.css']}"},{i: "skins/office2003/dialog.css", o: "#{resource['inputrichtext:ckeditor/skins/office2003/dialog.css']}"},{i: "skins/office2003/editor.css", o: "#{resource['inputrichtext:ckeditor/skins/office2003/editor.css']}"},{i: "skins/office2003/templates.css", o: "#{resource['inputrichtext:ckeditor/skins/office2003/templates.css']}"},{i: "skins/v2/dialog.css", o: "#{resource['inputrichtext:ckeditor/skins/v2/dialog.css']}"},{i: "skins/v2/editor.css", o: "#{resource['inputrichtext:ckeditor/skins/v2/editor.css']}"},{i: "skins/v2/templates.css", o: "#{resource['inputrichtext:ckeditor/skins/v2/templates.css']}"},{i: "images/spacer.gif", o: "#{resource['inputrichtext:ckeditor/images/spacer.gif']}"},{i: "plugins/about/dialogs/logo_ckeditor.png", o: "#{resource['inputrichtext:ckeditor/plugins/about/dialogs/logo_ckeditor.png']}"},{i: "plugins/flash/images/placeholder.png", o: "#{resource['inputrichtext:ckeditor/plugins/flash/images/placeholder.png']}"},{i: "plugins/forms/images/hiddenfield.gif", o: "#{resource['inputrichtext:ckeditor/plugins/forms/images/hiddenfield.gif']}"},{i: "plugins/iframe/images/placeholder.png", o: "#{resource['inputrichtext:ckeditor/plugins/iframe/images/placeholder.png']}"},{i: "plugins/link/images/anchor.gif", o: "#{resource['inputrichtext:ckeditor/plugins/link/images/anchor.gif']}"},{i: "plugins/pagebreak/images/pagebreak.gif", o: "#{resource['inputrichtext:ckeditor/plugins/pagebreak/images/pagebreak.gif']}"},{i: "plugins/placeholder/placeholder.gif", o: "#{resource['inputrichtext:ckeditor/plugins/placeholder/placeholder.gif']}"},{i: "plugins/showblocks/images/block_address.png", o: "#{resource['inputrichtext:ckeditor/plugins/showblocks/images/block_address.png']}"},{i: "plugins/showblocks/images/block_blockquote.png", o: "#{resource['inputrichtext:ckeditor/plugins/showblocks/images/block_blockquote.png']}"},{i: "plugins/showblocks/images/block_div.png", o: "#{resource['inputrichtext:ckeditor/plugins/showblocks/images/block_div.png']}"},{i: "plugins/showblocks/images/block_h1.png", o: "#{resource['inputrichtext:ckeditor/plugins/showblocks/images/block_h1.png']}"},{i: "plugins/showblocks/images/block_h2.png", o: "#{resource['inputrichtext:ckeditor/plugins/showblocks/images/block_h2.png']}"},{i: "plugins/showblocks/images/block_h3.png", o: "#{resource['inputrichtext:ckeditor/plugins/showblocks/images/block_h3.png']}"},{i: "plugins/showblocks/images/block_h4.png", o: "#{resource['inputrichtext:ckeditor/plugins/showblocks/images/block_h4.png']}"},{i: "plugins/showblocks/images/block_h5.png", o: "#{resource['inputrichtext:ckeditor/plugins/showblocks/images/block_h5.png']}"},{i: "plugins/showblocks/images/block_h6.png", o: "#{resource['inputrichtext:ckeditor/plugins/showblocks/images/block_h6.png']}"},{i: "plugins/showblocks/images/block_p.png", o: "#{resource['inputrichtext:ckeditor/plugins/showblocks/images/block_p.png']}"},{i: "plugins/showblocks/images/block_pre.png", o: "#{resource['inputrichtext:ckeditor/plugins/showblocks/images/block_pre.png']}"},{i: "plugins/smiley/images/angel_smile.gif", o: "#{resource['inputrichtext:ckeditor/plugins/smiley/images/angel_smile.gif']}"},{i: "plugins/smiley/images/angry_smile.gif", o: "#{resource['inputrichtext:ckeditor/plugins/smiley/images/angry_smile.gif']}"},{i: "plugins/smiley/images/broken_heart.gif", o: "#{resource['inputrichtext:ckeditor/plugins/smiley/images/broken_heart.gif']}"},{i: "plugins/smiley/images/confused_smile.gif", o: "#{resource['inputrichtext:ckeditor/plugins/smiley/images/confused_smile.gif']}"},{i: "plugins/smiley/images/cry_smile.gif", o: "#{resource['inputrichtext:ckeditor/plugins/smiley/images/cry_smile.gif']}"},{i: "plugins/smiley/images/devil_smile.gif", o: "#{resource['inputrichtext:ckeditor/plugins/smiley/images/devil_smile.gif']}"},{i: "plugins/smiley/images/embaressed_smile.gif", o: "#{resource['inputrichtext:ckeditor/plugins/smiley/images/embaressed_smile.gif']}"},{i: "plugins/smiley/images/envelope.gif", o: "#{resource['inputrichtext:ckeditor/plugins/smiley/images/envelope.gif']}"},{i: "plugins/smiley/images/heart.gif", o: "#{resource['inputrichtext:ckeditor/plugins/smiley/images/heart.gif']}"},{i: "plugins/smiley/images/kiss.gif", o: "#{resource['inputrichtext:ckeditor/plugins/smiley/images/kiss.gif']}"},{i: "plugins/smiley/images/lightbulb.gif", o: "#{resource['inputrichtext:ckeditor/plugins/smiley/images/lightbulb.gif']}"},{i: "plugins/smiley/images/omg_smile.gif", o: "#{resource['inputrichtext:ckeditor/plugins/smiley/images/omg_smile.gif']}"},{i: "plugins/smiley/images/regular_smile.gif", o: "#{resource['inputrichtext:ckeditor/plugins/smiley/images/regular_smile.gif']}"},{i: "plugins/smiley/images/sad_smile.gif", o: "#{resource['inputrichtext:ckeditor/plugins/smiley/images/sad_smile.gif']}"},{i: "plugins/smiley/images/shades_smile.gif", o: "#{resource['inputrichtext:ckeditor/plugins/smiley/images/shades_smile.gif']}"},{i: "plugins/smiley/images/teeth_smile.gif", o: "#{resource['inputrichtext:ckeditor/plugins/smiley/images/teeth_smile.gif']}"},{i: "plugins/smiley/images/thumbs_down.gif", o: "#{resource['inputrichtext:ckeditor/plugins/smiley/images/thumbs_down.gif']}"},{i: "plugins/smiley/images/thumbs_up.gif", o: "#{resource['inputrichtext:ckeditor/plugins/smiley/images/thumbs_up.gif']}"},{i: "plugins/smiley/images/tounge_smile.gif", o: "#{resource['inputrichtext:ckeditor/plugins/smiley/images/tounge_smile.gif']}"},{i: "plugins/smiley/images/whatchutalkingabout_smile.gif", o: "#{resource['inputrichtext:ckeditor/plugins/smiley/images/whatchutalkingabout_smile.gif']}"},{i: "plugins/smiley/images/wink_smile.gif", o: "#{resource['inputrichtext:ckeditor/plugins/smiley/images/wink_smile.gif']}"},{i: "plugins/templates/templates/images/template1.gif", o: "#{resource['inputrichtext:ckeditor/plugins/templates/templates/images/template1.gif']}"},{i: "plugins/templates/templates/images/template2.gif", o: "#{resource['inputrichtext:ckeditor/plugins/templates/templates/images/template2.gif']}"},{i: "plugins/templates/templates/images/template3.gif", o: "#{resource['inputrichtext:ckeditor/plugins/templates/templates/images/template3.gif']}"},{i: "plugins/uicolor/uicolor.gif", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/uicolor.gif']}"},{i: "plugins/uicolor/yui/assets/hue_bg.png", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/yui/assets/hue_bg.png']}"},{i: "plugins/uicolor/yui/assets/hue_thumb.png", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/yui/assets/hue_thumb.png']}"},{i: "plugins/uicolor/yui/assets/picker_mask.png", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/yui/assets/picker_mask.png']}"},{i: "plugins/uicolor/yui/assets/picker_thumb.png", o: "#{resource['inputrichtext:ckeditor/plugins/uicolor/yui/assets/picker_thumb.png']}"},{i: "skins/kama/icons.png", o: "#{resource['inputrichtext:ckeditor/skins/kama/icons.png']}"},{i: "skins/kama/icons_rtl.png", o: "#{resource['inputrichtext:ckeditor/skins/kama/icons_rtl.png']}"},{i: "skins/kama/images/dialog_sides.gif", o: "#{resource['inputrichtext:ckeditor/skins/kama/images/dialog_sides.gif']}"},{i: "skins/kama/images/dialog_sides.png", o: "#{resource['inputrichtext:ckeditor/skins/kama/images/dialog_sides.png']}"},{i: "skins/kama/images/dialog_sides_rtl.png", o: "#{resource['inputrichtext:ckeditor/skins/kama/images/dialog_sides_rtl.png']}"},{i: "skins/kama/images/mini.gif", o: "#{resource['inputrichtext:ckeditor/skins/kama/images/mini.gif']}"},{i: "skins/kama/images/noimage.png", o: "#{resource['inputrichtext:ckeditor/skins/kama/images/noimage.png']}"},{i: "skins/kama/images/sprites.png", o: "#{resource['inputrichtext:ckeditor/skins/kama/images/sprites.png']}"},{i: "skins/kama/images/sprites_ie6.png", o: "#{resource['inputrichtext:ckeditor/skins/kama/images/sprites_ie6.png']}"},{i: "skins/kama/images/toolbar_start.gif", o: "#{resource['inputrichtext:ckeditor/skins/kama/images/toolbar_start.gif']}"},{i: "skins/office2003/icons.png", o: "#{resource['inputrichtext:ckeditor/skins/office2003/icons.png']}"},{i: "skins/office2003/icons_rtl.png", o: "#{resource['inputrichtext:ckeditor/skins/office2003/icons_rtl.png']}"},{i: "skins/office2003/images/dialog_sides.gif", o: "#{resource['inputrichtext:ckeditor/skins/office2003/images/dialog_sides.gif']}"},{i: "skins/office2003/images/dialog_sides.png", o: "#{resource['inputrichtext:ckeditor/skins/office2003/images/dialog_sides.png']}"},{i: "skins/office2003/images/dialog_sides_rtl.png", o: "#{resource['inputrichtext:ckeditor/skins/office2003/images/dialog_sides_rtl.png']}"},{i: "skins/office2003/images/mini.gif", o: "#{resource['inputrichtext:ckeditor/skins/office2003/images/mini.gif']}"},{i: "skins/office2003/images/noimage.png", o: "#{resource['inputrichtext:ckeditor/skins/office2003/images/noimage.png']}"},{i: "skins/office2003/images/sprites.png", o: "#{resource['inputrichtext:ckeditor/skins/office2003/images/sprites.png']}"},{i: "skins/office2003/images/sprites_ie6.png", o: "#{resource['inputrichtext:ckeditor/skins/office2003/images/sprites_ie6.png']}"},{i: "skins/v2/icons.png", o: "#{resource['inputrichtext:ckeditor/skins/v2/icons.png']}"},{i: "skins/v2/icons_rtl.png", o: "#{resource['inputrichtext:ckeditor/skins/v2/icons_rtl.png']}"},{i: "skins/v2/images/dialog_sides.gif", o: "#{resource['inputrichtext:ckeditor/skins/v2/images/dialog_sides.gif']}"},{i: "skins/v2/images/dialog_sides.png", o: "#{resource['inputrichtext:ckeditor/skins/v2/images/dialog_sides.png']}"},{i: "skins/v2/images/dialog_sides_rtl.png", o: "#{resource['inputrichtext:ckeditor/skins/v2/images/dialog_sides_rtl.png']}"},{i: "skins/v2/images/mini.gif", o: "#{resource['inputrichtext:ckeditor/skins/v2/images/mini.gif']}"},{i: "skins/v2/images/noimage.png", o: "#{resource['inputrichtext:ckeditor/skins/v2/images/noimage.png']}"},{i: "skins/v2/images/sprites.png", o: "#{resource['inputrichtext:ckeditor/skins/v2/images/sprites.png']}"},{i: "skins/v2/images/sprites_ie6.png", o: "#{resource['inputrichtext:ckeditor/skins/v2/images/sprites_ie6.png']}"},{i: "skins/v2/images/toolbar_start.gif", o: "#{resource['inputrichtext:ckeditor/skins/v2/images/toolbar_start.gif']}"}]; if (r.indexOf('://') > -1) { var i = document.location.href.lastIndexOf('/'); r = r.replace(/\?t=B1GG4Z6$/,''); r = r.substring(i + 1); }; for (var i = 0, l = mappings.length; i < l; i++) { var m = mappings[i]; if (m.i == r) { return m.o;} } return false; };
