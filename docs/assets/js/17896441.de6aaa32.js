(self.webpackChunkodra_website=self.webpackChunkodra_website||[]).push([[27918],{1310:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(87462),s=n(67294),l=n(86010),r=n(35281),o=n(53438),c=n(48596),i=n(39960),d=n(95999),m=n(44996);function u(e){return s.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),s.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const v="breadcrumbHomeIcon_YNFT";function h(){const e=(0,m.Z)("/");return s.createElement("li",{className:"breadcrumbs__item"},s.createElement(i.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},s.createElement(u,{className:v})))}const b="breadcrumbsContainer_Z_bl";function f(e){let{children:t,href:n,isLast:a}=e;const l="breadcrumbs__link";return a?s.createElement("span",{className:l,itemProp:"name"},t):n?s.createElement(i.Z,{className:l,href:n,itemProp:"item"},s.createElement("span",{itemProp:"name"},t)):s.createElement("span",{className:l},t)}function j(e){let{children:t,active:n,index:r,addMicrodata:o}=e;return s.createElement("li",(0,a.Z)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,s.createElement("meta",{itemProp:"position",content:String(r+1)}))}function p(){const e=(0,o.s1)(),t=(0,c.Ns)();return e?s.createElement("nav",{className:(0,l.Z)(r.k.docs.docBreadcrumbs,b),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},s.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&s.createElement(h,null),e.map(((t,n)=>{const a=n===e.length-1;return s.createElement(j,{key:n,active:a,index:n,addMicrodata:!!t.href},s.createElement(f,{href:t.href,isLast:a},t.label))})))):null}},15154:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>J});var a=n(67294),s=n(1944),l=n(902);const r=a.createContext(null);function o(e){let{children:t,content:n}=e;const s=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(r.Provider,{value:s},t)}function c(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:n}=c();return a.createElement(s.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(86010),m=n(87524),u=n(80049);function v(){const{metadata:e}=c();return a.createElement(u.Z,{previous:e.previous,next:e.next})}var h=n(23120),b=n(44364),f=n(35281),j=n(95999);function p(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(j.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function g(e){let{lastUpdatedBy:t}=e;return a.createElement(j.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function E(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:s}=e;return a.createElement("span",{className:f.k.common.lastUpdated},a.createElement(j.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(p,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:s?a.createElement(g,{lastUpdatedBy:s}):""}},"Last updated{atDate}{byUser}"),!1)}var k=n(84881),L=n(86233);const N="lastUpdated_vwxv";function Z(e){return a.createElement("div",{className:(0,d.Z)(f.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(L.Z,e)))}function y(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:l}=e;return a.createElement("div",{className:(0,d.Z)(f.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(k.Z,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",N)},(n||s)&&a.createElement(E,{lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:s})))}function _(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:l,tags:r}=e,o=r.length>0,i=!!(t||n||l);return o||i?a.createElement("footer",{className:(0,d.Z)(f.k.docs.docFooter,"docusaurus-mt-lg")},o&&a.createElement(Z,{tags:r}),i&&a.createElement(y,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:s})):null}var C=n(86043),x=n(93743),T=n(87462);const w="tocCollapsibleButton_TO0P",U="tocCollapsibleButtonExpanded_MG3E";function H(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,T.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",w,!t&&U,n.className)}),a.createElement(j.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const A="tocCollapsible_ETCw",z="tocCollapsibleContent_vkbj",M="tocCollapsibleExpanded_sAul";function B(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:l}=e;const{collapsed:r,toggleCollapsed:o}=(0,C.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(A,!r&&M,n)},a.createElement(H,{collapsed:r,onClick:o}),a.createElement(C.z,{lazy:!0,className:z,collapsed:r},a.createElement(x.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:l})))}const I="tocMobile_ITEo";function O(){const{toc:e,frontMatter:t}=c();return a.createElement(B,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(f.k.docs.docTocMobile,I)})}var S=n(39407);function V(){const{toc:e,frontMatter:t}=c();return a.createElement(S.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.k.docs.docTocDesktop})}var D=n(92503),P=n(88905);function R(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(f.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(D.Z,{as:"h1"},n)),a.createElement(P.Z,null,t))}var F=n(1310);const q="docItemContainer_Djhp",$="docItemCol_VOVn";function G(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.i)(),s=e.hide_table_of_contents,l=!s&&t.length>0;return{hidden:s,mobile:l?a.createElement(O,null):void 0,desktop:!l||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(V,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!n.hidden&&$)},a.createElement(h.Z,null),a.createElement("div",{className:q},a.createElement("article",null,a.createElement(F.Z,null),a.createElement(b.Z,null),n.mobile,a.createElement(R,null,t),a.createElement(_,null)),a.createElement(v,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function J(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(o,{content:e.content},a.createElement(s.FG,{className:t},a.createElement(i,null),a.createElement(G,null,a.createElement(n,null))))}},80049:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(87462),s=n(67294),l=n(95999),r=n(32244);function o(e){const{previous:t,next:n}=e;return s.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&s.createElement(r.Z,(0,a.Z)({},t,{subLabel:s.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&s.createElement(r.Z,(0,a.Z)({},n,{subLabel:s.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},44364:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(67294),s=n(86010),l=n(95999),r=n(35281),o=n(74477);function c(e){let{className:t}=e;const n=(0,o.E)();return n.badge?a.createElement("span",{className:(0,s.Z)(t,r.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},23120:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(67294),s=n(86010),l=n(52263),r=n(39960),o=n(95999),c=n(94104),i=n(35281),d=n(60373),m=n(74477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){const t=u[e.versionMetadata.banner];return a.createElement(t,e)}function h(e){let{versionLabel:t,to:n,onClick:s}=e;return a.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(r.Z,{to:n,onClick:s},a.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function b(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:r}}=(0,l.Z)(),{pluginId:o}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,d.J)(o),{latestDocSuggestion:u,latestVersionSuggestion:b}=(0,c.Jo)(o),f=u??(j=b).docs.find((e=>e.id===j.mainDocId));var j;return a.createElement("div",{className:(0,s.Z)(t,i.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:r,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(h,{versionLabel:b.label,to:f.path,onClick:()=>m(b.name)})))}function f(e){let{className:t}=e;const n=(0,m.E)();return n.banner?a.createElement(b,{className:t,versionMetadata:n}):null}},39407:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(87462),s=n(67294),l=n(86010),r=n(93743);const o="tableOfContents_bqdL";function c(e){let{className:t,...n}=e;return s.createElement("div",{className:(0,l.Z)(o,"thin-scrollbar",t)},s.createElement(r.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},93743:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var a=n(87462),s=n(67294),l=n(86668);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):a.push(s)})),a}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,s.useRef)(void 0),n=d();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:l,maxHeadingLevel:r}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let s=t;s<=n;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:r}),c=i(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:l}=e;return t.length?s.createElement("ul",{className:l?void 0:n},t.map((e=>s.createElement("li",{key:e.id},s.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),s.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const v=s.memo(u);function h(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:u,...h}=e;const b=(0,l.L)(),f=d??b.tableOfContents.minHeadingLevel,j=u??b.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>o({toc:r(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:f,maxHeadingLevel:j});return m((0,s.useMemo)((()=>{if(c&&i)return{linkClassName:c,linkActiveClassName:i,minHeadingLevel:f,maxHeadingLevel:j}}),[c,i,f,j])),s.createElement(v,(0,a.Z)({toc:p,className:n,linkClassName:c},h))}},46700:(e,t,n)=>{var a={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function s(e){var t=l(e);return n(t)}function l(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=l,e.exports=s,s.id=46700}}]);