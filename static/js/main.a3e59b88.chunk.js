(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),l=(n(10),n(2)),i=n(1),u=(n(11),function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),o=n[0],c=n[1];return r.a.createElement("form",{onSubmit:function(t){return e.submit(t,o)}},r.a.createElement("input",{placeholder:"Please enter your todo",onChange:function(e){return c(e.target.value)}}))}),m=(n(12),function(e){return e.currentTodoList?e.currentTodoList.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement("div",null,r.a.createElement("span",{className:"text"},t.text),r.a.createElement("span",{className:"time"},t.time)),r.a.createElement("i",{className:"far fa-trash-alt delete",onClick:function(){return e.clicked(t.id)}}))})):null});n(13);var s=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){if(localStorage)for(var e=0;e<localStorage.length;e++)localStorage.getItem(localStorage.key(e)).includes("id")&&function(){var t=JSON.parse(localStorage.getItem(localStorage.key(e)));o((function(e){return[].concat(Object(l.a)(e),[t])}))}()}),[]),r.a.createElement("div",{className:"Card"},r.a.createElement("h1",null,"Todo list"),r.a.createElement(u,{submit:function(e,t){e.preventDefault();var n=(new Date).toLocaleTimeString("en-us",{weekday:"long",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}),a={id:Math.trunc(100*Math.random()).toString(),time:n,text:t};o((function(e){return[].concat(Object(l.a)(e),[a])})),localStorage.setItem(a.id,JSON.stringify(a)),e.target.reset()}}),r.a.createElement("ul",null,r.a.createElement(m,{currentTodoList:n,clicked:function(e){var t=n.filter((function(t){return t.id!==e}));o(t),localStorage.removeItem(e)}})))};c.a.render(r.a.createElement(s,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.a3e59b88.chunk.js.map