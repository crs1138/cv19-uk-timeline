(this["webpackJsonpcv19-uk-timeline"]=this["webpackJsonpcv19-uk-timeline"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(27),c=n.n(i),s=(n(37),n(4)),o=n(102),l=n(8),m=n.n(l),u=n(28),_=n.n(u),v=n(29),d=n.n(v),h=n(5),p=n.n(h);m.a.extend(_.a),m.a.extend(d.a);var f=function(e){var t=e.events,n=e.dayZero;return r.a.createElement("ul",{className:p.a.events},t.map((function(e){var t=e.heading,a=e.details,i=e.date,c=e._id,s=m()(i);return r.a.createElement("li",{className:p.a.event,key:c},r.a.createElement("h2",{className:p.a.event__heading},t),r.a.createElement("div",{className:p.a.event__meta},s.format("MMMM Do, YYYY")," ",r.a.createElement("p",null,i===n?"Day 0":"~".concat(s.from(n,!0)," since day\xa00"))),!!a&&a)})))},E=n(9),b=n.n(E);var y=function(e){function t(e){return"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][e-1])}var n=function(e){var n=e.reduce((function(e,t){var n=t.date.split("T")[0],a=n.split("-")[0],r=n.split("-")[1],i="".concat(a,"-").concat(r);return e[i]||(e[i]=[]),e[i].push(t),e}),{}),a=[];for(var r in n){var i=r.split("-"),c={label:{month:t(i[1]),year:i[0]},events:n[r]};a.push(c)}return a}(e.events),a=n[0].events[0].date;return r.a.createElement("ul",{className:b.a.time_units},n.map((function(e){var t=e.label,n=e.events;return r.a.createElement("li",{className:b.a.time_unit,key:Object(o.a)()},r.a.createElement("div",{className:b.a.time_unit__label},t.month,r.a.createElement("span",null,t.year)),r.a.createElement(f,{events:n,dayZero:a}))})))},g=n(12),N=n.n(g);var j=function(e){var t=e.events;return r.a.createElement("div",{className:N.a.tm},r.a.createElement("div",{className:N.a.tm__line}),r.a.createElement(y,{events:t}))},w=n(13),k=n.n(w),x=n(30),L=n(31),O=n.n(L),J="* [ _type == 'event' ] | order(date asc, heading) {\n  _id,\n  heading,\n  date,\n  source,\n  \"authorName\":author->name\n}";n(99);var M=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=Object(a.useState)([]),n=Object(s.a)(t,2),r=n[0],i=n[1],c=Object(a.useState)(!0),o=Object(s.a)(c,2),l=o[0],m=o[1];return Object(a.useEffect)((function(){var t=O()({projectId:"he2py649",dataset:"production"});function n(){return(n=Object(x.a)(k.a.mark((function n(){var a;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.fetch(e);case 2:a=n.sent,console.dir(a),i(a),m(!1);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),[r,l]}(),t=Object(s.a)(e,2),n=t[0],i=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Hello!!!"),"Is this the real life, is this the fantasy?",i?"Loading":r.a.createElement(j,{events:n})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},12:function(e,t,n){e.exports={tm:"Timeline_tm__W29v7",tm__line:"Timeline_tm__line__GIT3U"}},32:function(e,t,n){e.exports=n(100)},37:function(e,t,n){},5:function(e,t,n){e.exports={events:"EventList_events__3mZcH",event:"EventList_event__dA5CI",microEvent:"EventList_microEvent__2Jugq",event__heading:"EventList_event__heading__39BsR",event__meta:"EventList_event__meta__1dxJN"}},9:function(e,t,n){e.exports={time_units:"TimeUnitList_time_units__3tjrY",time_unit:"TimeUnitList_time_unit__38ttW",time_unit__label:"TimeUnitList_time_unit__label__2cmiX"}},99:function(e,t,n){}},[[32,1,2]]]);
//# sourceMappingURL=main.d442107e.chunk.js.map