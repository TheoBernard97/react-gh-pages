(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{40:function(e,t,n){e.exports=n(51)},45:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),l=n.n(c),o=(n(45),n(36)),i=n(15),u=n(68),m=n(33),s=n.n(m),d=n(32),f=n.n(d);var E=function(e){return r.a.createElement("header",null,r.a.createElement("h1",null,"KeeperApp"),r.a.createElement(u.a,{onClick:function(){e.changeTheme()}},e.darkMode?r.a.createElement(f.a,null):r.a.createElement(s.a,null)))};var h=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"\u24d2 ",r.a.createElement("a",{href:"https://theobernard97.github.io"},"Th\xe9o Bernard")," ",e))},v=n(25),p=n.n(v);var g=function(e){return r.a.createElement("div",{className:"note"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content),r.a.createElement("button",{onClick:function(){e.deleteNote(e.id)}},r.a.createElement(p.a,null)))},k=n(26),b=n(34),w=n(72),N=n(70),C=n(35),j=n.n(C),O=n(71);var S=function(e){var t=r.a.useState(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],l=r.a.useState({title:"",content:""}),o=Object(i.a)(l,2),u=o[0],m=o[1];function s(e){var t=e.target,n=t.name,a=t.value;m((function(e){return Object(b.a)({},e,Object(k.a)({},n,a))}))}return r.a.createElement("div",{className:"create-area"},r.a.createElement("form",{className:"create-note",autoComplete:"off"},a&&r.a.createElement("input",{name:"title",placeholder:"Title",onChange:s,value:u.title}),r.a.createElement("textarea",{name:"content",placeholder:"Take a note...",rows:a?"3":"1",onChange:s,onClick:function(){c(!0)},value:u.content}),r.a.createElement(w.a,{in:!!a},r.a.createElement(N.a,{onClick:function(t){""===u.title&&""===u.content?alert("You can't create an empty note."):function(t){t.preventDefault(),e.addNote(u),m({title:"",content:""}),c(!1)}(t)}},r.a.createElement(j.a,null)))),r.a.createElement(O.a,{className:"btn-clear",onClick:function(){return e.deleteAll()}},r.a.createElement(p.a,null)))};var T=function(){var e=r.a.useState(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],c=r.a.useState([]),l=Object(i.a)(c,2),u=l[0],m=l[1];function s(e){m((function(t){return t.filter((function(t,n){return n!==e}))}))}return r.a.createElement("div",{className:!0===n?"main-div dark-mode":"main-div"},r.a.createElement(E,{darkMode:n,changeTheme:function(){a((function(e){return!e}))}}),r.a.createElement(S,{addNote:function(e){m((function(t){return[].concat(Object(o.a)(t),[e])}))},deleteAll:function(){m([])}}),u.map((function(e,t){return r.a.createElement(g,{key:t,id:t,title:e.title,content:e.content,deleteNote:s})})),r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.10b792ce.chunk.js.map