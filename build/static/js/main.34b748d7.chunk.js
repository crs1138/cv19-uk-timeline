(this["webpackJsonpcv19-uk-timeline"]=this["webpackJsonpcv19-uk-timeline"]||[]).push([[0],{11:function(e,t,n){e.exports={time_units:"TimeUnitList_time_units__3tjrY",time_unit:"TimeUnitList_time_unit__38ttW",time_unit__label:"TimeUnitList_time_unit__label__2cmiX"}},12:function(e,t,n){e.exports={container:"App_container__eSJ6i",loading:"App_loading__3Rsj5"}},123:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(35),c=n.n(i),l=(n(48),n(7)),s=n(125),o=n(36),u=n.n(o),m=n(37),_=n.n(m)()({projectId:"he2py649",dataset:"production"}),v=n(15),d=n.n(v),p=n(16),E=n.n(p);var f=function(e){var t=e.sources;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,t.length>1?"Sources:":"Source:"),r.a.createElement("ul",{className:E.a.sources},t.map((function(e){var t=e._key,n=e.blank,a=e.title,i=e.url;return r.a.createElement("li",{key:t,className:E.a.source},r.a.createElement("a",{href:i,title:a,target:n?"_blank":"_self"},a||i))}))))},h=n(10),g=n.n(h),b=n(38),y=n.n(b),N=n(39),k=n.n(N),x=n(5),j=n.n(x);g.a.extend(y.a),g.a.extend(k.a);var L=d()(_);var w=function(e){var t=e.events,n=(e.dayZero,{types:{figure:function(e){var t,n=e.node,a=n.alt,i=n.caption,c=n.image;return r.a.createElement(r.a.Fragment,null,r.a.createElement("figure",null,r.a.createElement("img",{src:(t=c,L.image(t)).fit("clip").url(),alt:a}),r.a.createElement("figcaption",null,i)))}}});return r.a.createElement("ul",{className:j.a.events},t.map((function(e){var t=e._id,a=e.heading,i=e.details,c=e.date,l=e.authorName,s=e.source,o=g()(c);return r.a.createElement("li",{className:j.a.event,key:t},r.a.createElement("h2",{className:j.a.event__heading},a),r.a.createElement("div",{className:j.a.event__meta},o.format("MMMM Do, YYYY")),void 0!==i&&r.a.createElement(u.a,{blocks:i,serializers:n}),r.a.createElement("div",{className:j.a.event__meta},!!s&&s.length>0&&r.a.createElement(f,{sources:s}),r.a.createElement("p",null,"Added by: ",void 0!==l?l:"anonymous")))})))},J=n(11),O=n.n(J);var S=function(e){function t(e){return"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][e-1])}var n=function(e){var n=e.reduce((function(e,t){var n=t.date.split("T")[0],a=n.split("-")[0],r=n.split("-")[1],i="".concat(a,"-").concat(r);return e[i]||(e[i]=[]),e[i].push(t),e}),{}),a=[];for(var r in n){var i=r.split("-"),c={label:{month:t(i[1]),year:i[0]},events:n[r]};a.push(c)}return a}(e.events),a=n[0].events[0].date;return r.a.createElement("ul",{className:O.a.time_units},n.map((function(e){var t=e.label,n=e.events;return r.a.createElement("li",{className:O.a.time_unit,key:Object(s.a)()},r.a.createElement("div",{className:O.a.time_unit__label},t.month,r.a.createElement("span",null,t.year)),r.a.createElement(w,{events:n,dayZero:a}))})))},T=n(17),A=n.n(T);var M=function(e){var t=e.events;return r.a.createElement("div",{className:A.a.tm},r.a.createElement("div",{className:A.a.tm__line}),r.a.createElement(S,{events:t}))},W=n(18),Y=n.n(W),B=n(40),I="* [ _type == 'event' ] | order(date asc, heading) {\n  _id,\n  heading,\n  date,\n  details,\n  source,\n  \"authorName\":author->name\n}";var U=n(41),D=n(42),F=n(12),Z=n.n(F);var z=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=Object(a.useState)([]),n=Object(l.a)(t,2),r=n[0],i=n[1],c=Object(a.useState)(!0),s=Object(l.a)(c,2),o=s[0],u=s[1];return Object(a.useEffect)((function(){function t(){return(t=Object(B.a)(Y.a.mark((function t(){var n;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.fetch(e);case 2:n=t.sent,i(n),u(!1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),[r,o]}(),t=Object(l.a)(e,2),n=t[0],i=t[1];return r.a.createElement("div",{className:Z.a.App},r.a.createElement("div",{className:Z.a.container},i?r.a.createElement("div",{className:Z.a.loading},r.a.createElement("h2",null,"Loading data\u2026"),r.a.createElement(U.a,{icon:D.a,size:"4x",fixedWidth:!0,pulse:!0}),r.a.createElement("p",null,"Thank you for exercising your patience\u2026")):r.a.createElement(M,{events:n})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},16:function(e,t,n){e.exports={sources:"SourceList_sources__1c-JD",source:"SourceList_source__3usBi"}},17:function(e,t,n){e.exports={tm:"Timeline_tm__W29v7",tm__line:"Timeline_tm__line__GIT3U"}},43:function(e,t,n){e.exports=n(123)},48:function(e,t,n){},5:function(e,t,n){e.exports={events:"EventList_events__3mZcH",event:"EventList_event__dA5CI",microEvent:"EventList_microEvent__2Jugq",event__heading:"EventList_event__heading__39BsR",event__meta:"EventList_event__meta__1dxJN"}}},[[43,1,2]]]);
//# sourceMappingURL=main.34b748d7.chunk.js.map