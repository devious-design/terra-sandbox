(this["webpackJsonp@creative/terra-sandbox"]=this["webpackJsonp@creative/terra-sandbox"]||[]).push([[13],{17:function(e,t){},19:function(e,t,a){e.exports={editor:"Editor_editor__2ZK6b"}},20:function(e,t,a){e.exports={"catalog-item":"CatalogItem_catalog-item__1yJ-b"}},21:function(e,t,a){e.exports={catalog:"Catalog_catalog__gB0WM",input:"Catalog_input__1Hzgz",components:"Catalog_components__xPgEm"}},22:function(e,t,a){e.exports={layers:"Layers_layers__rrXTR"}},23:function(e,t,a){e.exports={sidebar:"Sidebar_sidebar__ybD5g",content:"Sidebar_content__3RRDH","top-section":"Sidebar_top-section__1lbbA",header:"Sidebar_header__1gSWA","bottom-section":"Sidebar_bottom-section__2Htyu","horizontal-resizer":"Sidebar_horizontal-resizer__2bi31","vertical-resizer":"Sidebar_vertical-resizer__3RH35",inactive:"Sidebar_inactive__1W0Lr"}},24:function(e,t,a){e.exports={canvas:"Canvas_canvas__XH7zY",body:"Canvas_body__3F2s9"}},25:function(e,t,a){e.exports={placeholder:"Placeholder_placeholder__3FXn4",expand:"Placeholder_expand__1Py8x"}},26:function(e,t,a){e.exports={sandbox:"Sandbox_sandbox__oA_MS",header:"Sandbox_header__3YzRS",layout:"Sandbox_layout__625qo"}},28:function(e,t,a){e.exports=a(65)},3:function(e){e.exports=JSON.parse('{"terra-card:Card":{"packageName":"terra-card","name":"Card","version":"3.21.0","description":"","documentation":"http://engineering.cerner.com/terra-ui/#/components/terra-card/card/card","props":{"children":{"type":"node","required":false,"description":"Child Nodes","displayName":"Children"},"visuallyHiddenText":{"type":"string","required":false,"description":"Text that describes the badge to a screen reader. Use this\\nif more information is needed to accurately describe\\nthis card to screen reader users.","displayName":"Visually hidden text"}},"key":"terra-card:Card","exportType":"Default","importFrom":"terra-card","subcomponents":["terra-card:Card:Body"],"componentExports":[]},"terra-card:Card:Body":{"packageName":"terra-card","name":"Body","version":"3.21.0","description":"","documentation":"http://engineering.cerner.com/terra-ui/#/components/terra-card/card/card","props":{"children":{"type":"node","required":false,"description":"Child Nodes","displayName":"Children"},"hasPaddingVertical":{"type":"bool","required":false,"description":"Provides themeable padding vertical","displayName":"Has padding vertical","defaultValue":"true"},"hasPaddingHorizontal":{"type":"bool","required":false,"description":"Provides themeable padding horizontal","displayName":"Has padding horizontal","defaultValue":"true"},"isContentCentered":{"type":"bool","required":false,"description":"Sets the content of the card to be centered","displayName":"Content centered","defaultValue":"false"}},"key":"terra-card:Card:Body","parent":"terra-card:Card","exportType":"Subcomponent"},"terra-content-container:ContentContainer":{"packageName":"terra-content-container","name":"ContentContainer","version":"3.20.0","description":"","documentation":"http://engineering.cerner.com/terra-ui/#/components/terra-content-container/content-container/content-container","props":{"header":{"type":"node","required":false,"description":"The header element to be placed within the header area of the container.","displayName":"Header"},"footer":{"type":"node","required":false,"description":"The footer element to be placed within the footer area of the container.","displayName":"Footer"},"children":{"type":"node","required":false,"description":"The children to be placed within the main content area of the container.","displayName":"Children"},"fill":{"type":"bool","required":false,"description":"Whether or not the container should expanded to fill its parent element.","displayName":"Fill","defaultValue":"false"},"scrollRefCallback":{"type":"func","required":false,"description":"Ref callback for the scrollable area of the content container.","displayName":"Scroll ref callback"}},"key":"terra-content-container:ContentContainer","exportType":"Default","importFrom":"terra-content-container","subcomponents":[],"componentExports":[]},"terra-list:List":{"packageName":"terra-list","name":"List","version":"4.22.0","description":"","documentation":"http://engineering.cerner.com/terra-ui/#/components/terra-list/list/list","props":{"children":{"type":"node","required":false,"description":"The children list items passed to the component.","displayName":"Children"},"dividerStyle":{"type":"string","required":false,"description":"Whether or not the list\'s child items should have a border color applied.\\nOne of `\'none\'`, `\'standard\'`, `\'bottom-only\'`.","displayName":"Divider style","defaultValue":"none","options":[{"displayName":"None","value":"none","type":"string"},{"displayName":"Standard","value":"standard","type":"string"},{"displayName":"Bottom-only","value":"bottom-only","type":"string"}]},"paddingStyle":{"type":"string","required":false,"description":"The padding styling to apply to the child list item content.\\nOne of `\'none\'`, `\'standard\'`, `\'compact\'`.","displayName":"Padding style","defaultValue":"none","options":[{"displayName":"None","value":"none","type":"string"},{"displayName":"Standard","value":"standard","type":"string"},{"displayName":"Compact","value":"compact","type":"string"}]},"refCallback":{"type":"func","required":false,"description":"Function callback for the ref of the ul.","displayName":"Ref callback"},"role":{"type":"string","required":false,"description":"Accessibility role of the list, defaults to \'none\'. If creating a list with selectable items, pass \'listbox\'.","displayName":"Role","defaultValue":"none"}},"key":"terra-list:List","exportType":"Default","importFrom":"terra-list","subcomponents":[],"componentExports":["terra-list:List:Item","terra-list:List:Section","terra-list:List:SectionHeader","terra-list:List:Subsection","terra-list:List:SubsectionHeader"]},"terra-list:List:Item":{"packageName":"terra-list","name":"Item","version":"4.22.0","description":"","documentation":"http://engineering.cerner.com/terra-ui/#/components/terra-list/list/list","props":{"children":{"type":"node","required":false,"description":"The content element to be placed inside the list item for display.","displayName":"Children"},"hasChevron":{"type":"bool","required":false,"description":"Whether or not the list item has a disclosure indicator presented.","displayName":"Has chevron","defaultValue":"false"},"isSelected":{"type":"bool","required":false,"description":"Whether or not the list item should have selection styles applied.","displayName":"Selected","defaultValue":"false"},"isSelectable":{"type":"bool","required":false,"description":"Whether or not the list item should have styles to indicate the item is selectable.","displayName":"Selectable","defaultValue":"false"},"onSelect":{"type":"func","required":false,"description":"Function callback for when the appropriate click or key action is performed.\\nCallback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)","displayName":"On select"},"refCallback":{"type":"func","required":false,"description":"Function callback for the ref of the li.","displayName":"Ref callback"}},"key":"terra-list:List:Item","parent":"terra-list:List","exportType":"Export"},"terra-list:List:Section":{"packageName":"terra-list","name":"Section","version":"4.22.0","description":"","documentation":"http://engineering.cerner.com/terra-ui/#/components/terra-list/list/list","props":{"children":{"type":"node","required":false,"description":"The children list items passed to the component.","displayName":"Children"},"isCollapsed":{"type":"bool","required":false,"description":"Whether or not the section is collapsed.","displayName":"Collapsed","defaultValue":"false"},"isCollapsible":{"type":"bool","required":false,"description":"Whether or not the section can be collapsed.","displayName":"Collapsible","defaultValue":"false"},"level":{"type":"number","required":false,"description":"Optionally sets the heading level. One of `1`, `2`, `3`, `4`, `5`, `6`.","displayName":"Level","defaultValue":"1","options":[{"displayName":"1","value":"1","type":"number"},{"displayName":"2","value":"2","type":"number"},{"displayName":"3","value":"3","type":"number"},{"displayName":"4","value":"4","type":"number"},{"displayName":"5","value":"5","type":"number"},{"displayName":"6","value":"6","type":"number"}]},"onSelect":{"type":"func","required":false,"description":"Function callback for when the appropriate click or key action is performed.\\nCallback contains the javascript event and prop metadata, e.g. onSelect(event, metaData)","displayName":"On select"},"refCallback":{"type":"func","required":false,"description":"Function callback passthrough for the ref of the section li.","displayName":"Ref callback"},"title":{"type":"string","required":true,"description":"Title text to be placed within the section header.","displayName":"Title"}},"key":"terra-list:List:Section","parent":"terra-list:List","exportType":"Export"},"terra-list:List:SectionHeader":{"packageName":"terra-list","name":"SectionHeader","version":"4.22.0","description":"","documentation":"http://engineering.cerner.com/terra-ui/#/components/terra-list/list/list","props":{"level":{"type":"number","required":false,"description":"Optionally sets the heading level. One of `1`, `2`, `3`, `4`, `5`, `6`.","displayName":"Level","defaultValue":"1","options":[{"displayName":"1","value":"1","type":"number"},{"displayName":"2","value":"2","type":"number"},{"displayName":"3","value":"3","type":"number"},{"displayName":"4","value":"4","type":"number"},{"displayName":"5","value":"5","type":"number"},{"displayName":"6","value":"6","type":"number"}]},"refCallback":{"type":"func","required":false,"description":"Function callback passthrough for the ref of the section li.","displayName":"Ref callback"},"title":{"type":"string","required":true,"description":"Title text to be placed within the section header.","displayName":"Title"}},"key":"terra-list:List:SectionHeader","parent":"terra-list:List","exportType":"Export"},"terra-list:List:Subsection":{"packageName":"terra-list","name":"Subsection","version":"4.22.0","description":"","documentation":"http://engineering.cerner.com/terra-ui/#/components/terra-list/list/list","props":{"children":{"type":"node","required":false,"description":"The children list items passed to the component.","displayName":"Children"},"isCollapsed":{"type":"bool","required":false,"description":"Whether or not the subsection is collapsed.","displayName":"Collapsed","defaultValue":"false"},"isCollapsible":{"type":"bool","required":false,"description":"Whether or not the subsection can be collapsed.","displayName":"Collapsible","defaultValue":"false"},"level":{"type":"number","required":false,"description":"Optionally sets the heading level. One of `2`, `3`, `4`, `5`, `6`.","displayName":"Level","defaultValue":"2","options":[{"displayName":"2","value":"2","type":"number"},{"displayName":"3","value":"3","type":"number"},{"displayName":"4","value":"4","type":"number"},{"displayName":"5","value":"5","type":"number"},{"displayName":"6","value":"6","type":"number"}]},"onSelect":{"type":"func","required":false,"description":"Function callback for when the appropriate click or key action is performed.\\nCallback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)","displayName":"On select"},"refCallback":{"type":"func","required":false,"description":"Function callback passthrough for the ref of the section li.","displayName":"Ref callback"},"title":{"type":"string","required":true,"description":"Title text to be placed within the subsection header.","displayName":"Title"}},"key":"terra-list:List:Subsection","parent":"terra-list:List","exportType":"Export"},"terra-list:List:SubsectionHeader":{"packageName":"terra-list","name":"SubsectionHeader","version":"4.22.0","description":"","documentation":"http://engineering.cerner.com/terra-ui/#/components/terra-list/list/list","props":{"level":{"type":"number","required":false,"description":"Optionally sets the heading level. One of `2`, `3`, `4`, `5`, `6`.","displayName":"Level","defaultValue":"2","options":[{"displayName":"2","value":"2","type":"number"},{"displayName":"3","value":"3","type":"number"},{"displayName":"4","value":"4","type":"number"},{"displayName":"5","value":"5","type":"number"},{"displayName":"6","value":"6","type":"number"}]},"refCallback":{"type":"func","required":false,"description":"Function callback passthrough for the ref of the section li.","displayName":"Ref callback"},"title":{"type":"string","required":true,"description":"Title text to be placed within the subsection header.","displayName":"Title"}},"key":"terra-list:List:SubsectionHeader","parent":"terra-list:List","exportType":"Export"},"terra-overlay:Overlay":{"packageName":"terra-overlay","name":"Overlay","version":"3.34.0","description":"","documentation":"http://engineering.cerner.com/terra-ui/#/components/terra-overlay/overlay/overlay","props":{"children":{"type":"node","required":false,"description":"The content to be displayed within the overlay.","displayName":"Children"},"isOpen":{"type":"bool","required":false,"description":"Indicates if the overlay is open.","displayName":"Open","defaultValue":"false"},"backgroundStyle":{"type":"string","required":false,"description":"The visual theme to be applied to the overlay background. Accepts \'light\', \'dark\', and \'clear\'.","displayName":"Background style","defaultValue":"light","options":[{"displayName":"Light","value":"light","type":"string"},{"displayName":"Dark","value":"dark","type":"string"},{"displayName":"Clear","value":"clear","type":"string"}]},"isScrollable":{"type":"bool","required":false,"description":"Indicates if the overlay content is scrollable.","displayName":"Scrollable","defaultValue":"false"},"onRequestClose":{"type":"func","required":false,"description":"Callback triggered on overlay click or ESC key. Setting this enables close behavior.","displayName":"On request close"},"isRelativeToContainer":{"type":"bool","required":false,"description":"Indicates if the overlay is relative to the triggering container.","displayName":"Relative to container","defaultValue":"false"},"rootSelector":{"type":"string","required":false,"description":"Used to select the root mount DOM node. This is used to help prevent focus from shifting outside of the overlay when it is opened in a portal.","displayName":"Root selector","defaultValue":"#root"},"zIndex":{"type":"string","required":false,"description":"Z-Index layer to apply to the ModalContent and ModalOverlay. Valid values are \'100\', \'6000\', \'7000\', \'8000\', or \'9000\'.","displayName":"Z index","defaultValue":"100","options":[{"displayName":"100","value":"100","type":"string"},{"displayName":"6000","value":"6000","type":"string"},{"displayName":"7000","value":"7000","type":"string"},{"displayName":"8000","value":"8000","type":"string"},{"displayName":"9000","value":"9000","type":"string"}]}},"key":"terra-overlay:Overlay","exportType":"Default","importFrom":"terra-overlay","subcomponents":[],"componentExports":[]}}')},44:function(e,t){},50:function(e,t){},60:function(e,t){},65:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(13),o=a.n(i),l=a(9),s=a(16),c=a.n(s),d=a(1),p=a.n(d),u=a(19),m=a.n(u),y=p.a.bind(m.a),f=function(e){var t=e.selected;return n.a.createElement("div",{className:y("editor")},"Editor Selected:"," ",t)},b=a(20),h=a.n(b),v=p.a.bind(h.a),g=function(e){var t=e.identifier,a=e.name;return n.a.createElement("div",{className:v("catalog-item"),draggable:!0,onDragStart:function(e){e.dataTransfer.setData("terra-sandbox-data",JSON.stringify({identifier:t}))}},a)},N=a(21),k=a.n(N),O=a(3),x=p.a.bind(k.a),E=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),a=t[0],i=t[1],o=Object.keys(O).map((function(e){var t=O[e],r=t.name;if("Default"===t.exportType&&r.toLowerCase().indexOf(a)>-1)return n.a.createElement(g,{key:e,identifier:e,name:r})}));return n.a.createElement("div",{className:x("catalog")},n.a.createElement("input",{className:x("input"),onChange:function(e){i(e.target.value.toLowerCase())},placeholder:"Search Components",type:"Search",value:a}),n.a.createElement("div",{className:x("components")},o))},w=function(e){var t=e.workspace.root;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{"data-terra-sandbox-root":!0},"Workspace"),Object.keys(t).map((function(e){return function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=t.id,i=t.props,o=t.name,l=[n.a.createElement("div",{key:r,style:{paddingLeft:"".concat(15*a,"px")}},o.split(":").pop())];return Object.keys(i).forEach((function(t){var r=i[t],n=r.type,o=r.value;"node"===n&&l.push(Object.keys(o).map((function(t){return e(o[t],a+1)}))),"element"===n&&l.push(e(o,a+1))})),l}(t[e],1)})))},j=a(22),S=a.n(j),C=p.a.bind(S.a),_=function(e){var t=e.selected,a=e.workspace;return n.a.createElement("div",{className:C("layers")},n.a.createElement(w,{workspace:a,selected:t}))},q=a(23),L=a.n(q),P=p.a.bind(L.a),D=function(e){var t=e.selected,a=e.workspace,i=Object(r.useRef)(),o=Object(r.useRef)(),l=function(e){var t=e.clientX;i.current.style.width="".concat(t,"px")},s=function(e){o.current.style.height="".concat(window.innerHeight-e.clientY,"px")},c=function e(){document.body.classList.remove(P("inactive")),document.documentElement.style.cursor="",window.removeEventListener("mousemove",l),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",e)};return n.a.createElement("div",{className:P("sidebar"),ref:i},n.a.createElement("div",{className:P("content")},n.a.createElement("div",{className:P("top-section")},n.a.createElement("div",{className:P("header")},"Component"),n.a.createElement(E,null)),n.a.createElement("div",{className:P("bottom-section"),ref:o},n.a.createElement("div",{className:P("header")},n.a.createElement("div",{className:P("vertical-resizer"),onMouseDown:function(e){e.button>1||(document.documentElement.style.cursor="ns-resize",document.body.className+=P("inactive"),window.addEventListener("mousemove",s),window.addEventListener("mouseup",c))},role:"presentation"}),"Layers"),n.a.createElement(_,{selected:t,workspace:a}))),n.a.createElement("div",{className:P("horizontal-resizer"),onMouseDown:function(e){e.button>1||(document.documentElement.style.cursor="ew-resize",document.body.className+=P("inactive"),window.addEventListener("mousemove",l),window.addEventListener("mouseup",c))},role:"presentation"}))},T=a(5),V=a(6),R=function(){function e(){Object(T.a)(this,e)}return Object(V.a)(e,null,[{key:"findNearest",value:function(t){if(t.dataset.terraSandboxRoot)return"root";for(var a=e.fiberNode(t);a&&!e.match(a.key);)a=a.return;return a?e.match(a.key):null}},{key:"match",value:function(e){var t="".concat(e).match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/);return t?t[0]:null}},{key:"fiberNode",value:function(e){var t=Object.keys(e);return 0===t.length?null:e[t.find((function(e){return e.startsWith("__reactInternalInstance$")}))]||null}}]),e}(),F=n.a.createContext(),H=function(){function e(){Object(T.a)(this,e)}return Object(V.a)(e,null,[{key:"generate",value:function(t,a){var r=a.root,i=Object.keys(r).map((function(a){return e.component(t,r[a])}));return n.a.createElement(n.a.Fragment,null,i)}},{key:"import",value:function(e,t){var a=t.name;if("terra-sandbox:Placeholder"===a)return e[a];var r=O[a],n=r.importFrom;return"Default"===r.exportType?e[n].default:void 0}},{key:"component",value:function(t,a){var r=a.id,i=a.props,o=e.import(t,a),l=e.properties(t,i);return n.a.createElement(o,Object.assign({key:r,id:r},l))}},{key:"properties",value:function(t,a){var r={};return Object.keys(a).forEach((function(n){var i=e.property(t,a[n]);void 0!==i&&null!==i&&(r[n]=i)})),r}},{key:"property",value:function(t,a){var r=a.type,n=a.value;return"bool"===r?n:"node"===r?Object.keys(n).map((function(a){return e.component(t,n[a])})):"element"===r?e.generate(t,a):void console.log("WARNING: Unable to interpret property. ".concat(JSON.stringify(a)))}}]),e}(),z=a(24),I=a.n(z),W=p.a.bind(I.a),B=function(e){var t=e.imports,a=e.workspace,i=Object(r.useContext)(F);function o(e){var t=R.findNearest(e.target);t&&i({id:t,type:"select"})}return Object(r.useEffect)((function(){return window.addEventListener("click",o),function(){window.removeEventListener("click",o)}})),n.a.createElement("div",{className:W("canvas")},n.a.createElement("div",{className:W("body"),"data-terra-sandbox-root":!0},H.generate(t,a)))},A=a(4),J=a(8),M=a.n(J),X={"terra-card":function(){return a.e(24).then(a.t.bind(null,140,7))},"terra-content-container":function(){return a.e(25).then(a.t.bind(null,141,7))},"terra-list":function(){return a.e(22).then(a.t.bind(null,142,7))},"terra-overlay":function(){return a.e(23).then(a.t.bind(null,143,7))}},Z=a(25),U=a.n(Z),Y=p.a.bind(U.a),G=function(e){var t=e.id,a=e.expand,i=Object(r.useState)("Drop Zone"),o=Object(l.a)(i,2),s=o[0],c=o[1],d=Object(r.useContext)(F);return n.a.createElement("div",{id:t,className:Y("placeholder",{expand:a}),onDragOver:function(e){e.preventDefault()},onDragEnter:function(e){e.preventDefault()},onDrop:function(e){var a=e.dataTransfer.getData("terra-sandbox-data");if(a){var r=JSON.parse(a).identifier,n=O[r].importFrom;X[n]().then((function(e){d({id:t,dynamicImport:e,type:"replace",replacement:r})})).catch((function(e){console.log(e),c("Whoops, something went wrong")}))}}},s)},K=M()(),$={imports:{"terra-sandbox:Placeholder":G},selected:void 0,workspace:{root:Object(A.a)({},K,{id:K,parent:"root",name:"terra-sandbox:Placeholder",type:"element",props:{expand:{type:"bool",value:!0}}})}};function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var ee=function(){function e(){Object(T.a)(this,e)}return Object(V.a)(e,null,[{key:"replace",value:function(t,a,r){var n={};return Object.keys(t).forEach((function(i){n[i]=e.replaceNode(t[i],a,r)})),{root:n}}},{key:"replaceNode",value:function(t,a,r){var n=t.id,i=t.parent,o=t.props;if(n===a)return e.clone(r,i,n);var l={};return Object.keys(o).forEach((function(t){var n=o[t],i=n.type,s=n.value;if("element"===i)l[t]={type:i,value:e.replaceNode(s,a,r)};else if("node"===i){var c={};Object.keys(s).forEach((function(t){c[t]=e.replaceNode(s[t],a,r)})),l[t]={type:i,value:c}}else l[t]=o[t]})),function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(a),!0).forEach((function(t){Object(A.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t,{props:l})}},{key:"clone",value:function(t,a,r){var n=r||M()(),i=t.name,o=t.props,l={};return Object.keys(o).forEach((function(t){var a=o[t],r=a.type,i=a.value;if("element"===r)l[t]={type:r,value:e.clone(i,n)};else if("node"===r){var s={};Object.keys(i).forEach((function(t){s[t]=e.clone(i[t],n)})),l[t]={type:r,value:s}}else l[t]=o[t]})),{id:n,name:i,parent:a,type:"element",props:l}}}]),e}(),te=function(){function e(){Object(T.a)(this,e)}return Object(V.a)(e,null,[{key:"generate",value:function(t,a,r){var n=a||M()(),i=e.configuration(t).props;return{id:n,parent:r,name:t,type:"element",props:e.properties(n,i)}}},{key:"configuration",value:function(e){return"terra-sandbox:Placeholder"===e?{props:{expand:{type:"bool"}}}:O[e]}},{key:"properties",value:function(t,a){var r={};return Object.keys(a).forEach((function(n){var i=e.property(t,a[n]);void 0!==i&&null!==i&&(r[n]=i)})),r}},{key:"property",value:function(t,a){var r=a.type;if("element"===r)return e.generate("terra-sandbox:Placeholder",null,t);if("node"===r){var n=e.generate("terra-sandbox:Placeholder",null,t);return{type:"node",value:Object(A.a)({},n.id,n)}}}}]),e}();function ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var re=function(e,t){var a=e.imports,r=e.workspace.root,n=t.id,i=t.replacement,o=t.dynamicImport,l=te.generate(i,n),s=ee.replace(r,n,l);o&&(a[O[i].importFrom]=o);return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(a),!0).forEach((function(t){Object(A.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ae(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{imports:a,workspace:s})};function ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var ie=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(a),!0).forEach((function(t){Object(A.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ne(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{selected:t.id})},oe=function(e,t){switch(t.type){case"replace":return re(e,t);case"select":return ie(e,t);default:return console.log("WARNING: No reducer action was specified."),e}},le=a(26),se=a.n(le),ce=p.a.bind(se.a),de=function(){var e=Object(r.useReducer)(oe,$),t=Object(l.a)(e,2),a=t[0],i=t[1],o=a.imports,s=a.selected,d=a.workspace;return n.a.createElement(c.a,{locale:"en"},n.a.createElement("div",{className:ce("sandbox")},n.a.createElement("div",{className:ce("header")},"Header"),n.a.createElement("div",{className:ce("layout")},n.a.createElement(F.Provider,{value:i},n.a.createElement(D,{selected:s,workspace:d}),n.a.createElement(B,{imports:o,workspace:d}),n.a.createElement(f,{selected:s,workspace:d})))))};o.a.render(n.a.createElement(de,null),document.getElementById("root"))}},[[28,18,21]]]);
//# sourceMappingURL=main.c517f6f4.chunk.js.map