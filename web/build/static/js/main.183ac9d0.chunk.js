(this["webpackJsonpcv19-uk-web"]=this["webpackJsonpcv19-uk-web"]||[]).push([[0],{128:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(38),i=a.n(c),l=(a(53),a(3)),s=a(18),o=a.n(s),u=a(13);var m=function(e){var t=e.title;return e.description,r.a.createElement("header",{className:o.a.cv19__header},r.a.createElement(u.a,null,r.a.createElement("title",null,t)),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:o.a.cv19__title},t)))},_=a(14),v=a.n(_),d=a(41),f=a.n(d);var p=function(e){var t=e.content;return r.a.createElement("footer",{className:f.a.tm__footer},r.a.createElement("div",{className:"container"},r.a.createElement(v.a,{blocks:t})))},E=a(131),h=a(42),b=a.n(h)()({projectId:"he2py649",dataset:"production",useCdn:!0}),g=a(17),N=a.n(g),y=a(19),k=a.n(y);var x=function(e){var t=e.sources;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,t.length>1?"Sources:":"Source:"),r.a.createElement("ul",{className:k.a.sources},t.map((function(e){var t=e._key,a=e.blank,n=e.title,c=e.url;return r.a.createElement("li",{key:t,className:k.a.source},r.a.createElement("a",{href:c,title:n,target:a?"_blank":"_self"},n||c))}))))},w=a(8),j=a.n(w),O=a(43),L=a.n(O),T=a(44),S=a.n(T),J=a(45),M=a.n(J),U=a(5),F=a.n(U);j.a.extend(L.a),j.a.extend(S.a),j.a.extend(M.a);var A=N()(b);var C=function(e){var t=e.events,a={types:{figure:function(e){var t,a=e.node,n=a.alt,c=a.caption,i=a.image;return r.a.createElement(r.a.Fragment,null,r.a.createElement("figure",null,r.a.createElement("img",{src:(t=i,A.image(t)).fit("clip").url(),alt:n}),r.a.createElement("figcaption",null,c)))}},marks:{link:function(e){var t=e.mark,a=e.children,n=t.blank,c=void 0===n||n,i=t.href;return c?r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},a):r.a.createElement("a",{href:i},a)}}};return r.a.createElement("ul",{className:F.a.events},t.map((function(e){var t=e._id,n=e.heading,c=e.details,i=e.date,l=e.authorName,s=e.source,o=j.a.utc(i);return r.a.createElement("li",{className:F.a.event,key:t},r.a.createElement("h2",{className:F.a.event__heading},n),r.a.createElement("div",{className:F.a.event__meta},o.format("MMMM Do, YYYY")),void 0!==c&&r.a.createElement("div",{className:F.a.event__details},r.a.createElement(v.a,{blocks:c,serializers:a})),r.a.createElement("div",{className:F.a.event__meta},!!s&&s.length>0&&r.a.createElement(x,{sources:s}),r.a.createElement("p",null,"Added by: ",void 0!==l?l:"anonymous")))})))},B={getMonthName:function(e){return"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][e-1])},regroupEvents:function(e){var t=e.reduce((function(e,t){var a=t.date,n=a.split("-")[0],r=a.split("-")[1],c="".concat(n,"-").concat(r);return e[c]||(e[c]=[]),e[c].push(t),e}),{}),a=[];for(var n in t){var r=n.split("-"),c={label:{month:B.getMonthName(r[1]),year:r[0]},events:t[n]};a.push(c)}return a}},I=B,W=a(9),Y=a.n(W);var D=function(e){var t=e.events,a=(0,I.regroupEvents)(t);return r.a.createElement("ul",{className:Y.a.time_units},a.map((function(e){var t=e.label,a=e.events;return r.a.createElement("li",{className:Y.a.time_unit,key:Object(E.a)()},r.a.createElement("div",{className:Y.a.time_unit__label_wrap},r.a.createElement("div",{className:Y.a.time_unit__label},t.month,r.a.createElement("span",null,t.year))),r.a.createElement(C,{events:a}))})))},H=a(20),K=a.n(H);var q=function(e){var t=e.events;return r.a.createElement("div",{className:K.a.tm},r.a.createElement("div",{className:K.a.tm__line}),r.a.createElement(D,{events:t}))},z=a(10),R=a.n(z),V=a(21),G="* [ _type == 'event' ] | order(date asc, heading) {\n  _id,\n  heading,\n  date,\n  details,\n  source,\n  \"authorName\":author->name\n}",X="* [ _type == 'siteSettings' ] {\n\ttitle,\n\tfooter,\n  description\n}";var Z=a(46),$=a(47);a(128);var P=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=Object(n.useState)([]),a=Object(l.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(!0),s=Object(l.a)(i,2),o=s[0],u=s[1];return Object(n.useEffect)((function(){function t(){return(t=Object(V.a)(R.a.mark((function t(){var a;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.fetch(e);case 2:a=t.sent,c(a),u(!1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),[r,o]}(),t=Object(l.a)(e,2),a=t[0],c=t[1],i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=Object(n.useState)([]),a=Object(l.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(!0),s=Object(l.a)(i,2),o=s[0],u=s[1];return Object(n.useEffect)((function(){function t(){return(t=Object(V.a)(R.a.mark((function t(){var a;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.fetch(e);case 2:a=t.sent,c(a),u(!1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),[r,o]}(),s=Object(l.a)(i,2),o=s[0],u=s[1];return r.a.createElement("div",{className:"App"},c||u?r.a.createElement("div",{className:"loading"},r.a.createElement("h2",null,"Loading data\u2026"),r.a.createElement(Z.a,{icon:$.a,size:"4x",fixedWidth:!0,pulse:!0}),r.a.createElement("p",null,"Thank you for exercising your patience\u2026")):r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{title:a[0].title,description:a[0].description}),r.a.createElement("main",{className:"container"},r.a.createElement(q,{events:o})),r.a.createElement(p,{content:a[0].footer})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{defaultTitle:"CV19-UK-Timeline",titleTemplate:"%s | CV19-UK-Timeline"},r.a.createElement("meta",{"http-equiv":"Content-Type",content:"text/html;charset=UTF-8"}),r.a.createElement("link",{rel:"canonical",href:"https://crs1138.github.io/cv19-uk-timeline"})),r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},18:function(e,t,a){e.exports={cv19__header:"Header_cv19__header__3lRKd",cv19__title:"Header_cv19__title__3cC_L"}},19:function(e,t,a){e.exports={sources:"SourceList_sources__1c-JD",source:"SourceList_source__3usBi"}},20:function(e,t,a){e.exports={tm:"Timeline_tm__W29v7",tm__line:"Timeline_tm__line__GIT3U"}},41:function(e,t,a){e.exports={tm__footer:"Footer_tm__footer__3UES3",container:"Footer_container__1I16_"}},48:function(e,t,a){e.exports=a(129)},5:function(e,t,a){e.exports={events:"EventList_events__3mZcH",event:"EventList_event__dA5CI",microEvent:"EventList_microEvent__2Jugq",event__heading:"EventList_event__heading__39BsR",event__details:"EventList_event__details__22JOs",event__meta:"EventList_event__meta__1dxJN"}},53:function(e,t,a){},9:function(e,t,a){e.exports={time_units:"TimeUnitList_time_units__3tjrY",time_unit:"TimeUnitList_time_unit__38ttW",time_unit__label_wrap:"TimeUnitList_time_unit__label_wrap__2A1Bw",time_unit__label:"TimeUnitList_time_unit__label__2cmiX"}}},[[48,1,2]]]);
//# sourceMappingURL=main.183ac9d0.chunk.js.map