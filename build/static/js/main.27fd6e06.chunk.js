(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{64:function(t,e,c){},65:function(t,e,c){},72:function(t,e,c){"use strict";c.r(e);var o=c(6),a=c(0),n=c(9),i=c.n(n),r=(c(64),c(14)),s=c(53),d=c(30),l=(c(65),c(108)),j=c(104),b=Object(a.createContext)({bg:"light",color:"dark",settingBg:function(){},settingColor:function(){}}),u=c(22),O=c(20);var g=function(t){var e=t.addTodo,c=Object(a.useContext)(b),n=Object(a.useState)({id:"",task:"",completed:!1}),i=Object(d.a)(n,2),s=i[0],g=i[1];return Object(o.jsxs)("form",{className:"todo-form card-header",onSubmit:function(t){t.preventDefault(),s.task.trim()&&(e(Object(r.a)(Object(r.a)({},s),{},{id:Math.random()})),g(Object(r.a)(Object(r.a)({},s),{},{task:""})))},style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[Object(o.jsx)(l.a,{label:"Task",type:"text",name:"task",value:s.task,onChange:function(t){g(Object(r.a)(Object(r.a)({},s),{},{task:t.target.value}))}}),Object(o.jsx)(j.a,{type:"submit",className:"text-".concat("dark"===c.bg?"white":"dark"," p-2  "),children:Object(o.jsx)(u.a,{title:"Add",icon:O.b,variant:"primary"})})]})},x=c(103),f=c(105),h=c(109),p=c(106);var m=function(t){var e=t.todo,c=t.toggleComplete,n=t.removeTodo,i=Object(a.useContext)(b);return Object(o.jsxs)(f.a,{style:{display:"flex"},children:[Object(o.jsx)(h.a,{checked:e.completed,onClick:function(){c(e.id)},className:"text-".concat("dark"===i.bg?"light":"","  ")}),Object(o.jsx)("div",{variant:"p",style:{textDecoration:e.completed?"line-through":null,width:"75%"},children:e.task}),Object(o.jsx)(p.a,{onClick:function(){n(e.id)},children:Object(o.jsx)(u.a,{icon:O.e,className:"text-".concat("dark"===i.bg?"secondary":"dark","  ")})})]})};var k=function(t){var e=t.todos,c=t.removeTodo,a=t.toggleComplete;return Object(o.jsx)(x.a,{children:e.map((function(t){return Object(o.jsx)(m,{todo:t,removeTodo:c,toggleComplete:a},t.id)}))})},v=c(107);var C=function(t){var e=Object(a.useContext)(b);return Object(o.jsx)("div",{icon:O.c,onClick:function(){"dark"===e.bg?e.settingBg("dark"):e.settingBg("light"),"white"===e.color?e.settingColor("white"):e.settingColor("")},className:"bg-".concat("dark"===e.bg?"dark":"light"," p-2 text-").concat(e.color," "),children:"dark"===e.bg?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u.a,{icon:O.d,size:""}),"  Go Light"]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u.a,{icon:O.a,size:""}),"  Go Dark"]})})},y="react-todo-list-todos";var w=function(){var t=Object(a.useState)([]),e=Object(d.a)(t,2),c=e[0],n=e[1],i=Object(a.useContext)(b),l=Object(a.useState)(i.bg),j=Object(d.a)(l,2),u=j[0],O=j[1],x=Object(a.useState)(i.color),f=Object(d.a)(x,2),h=f[0],p=f[1];return Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem(y));t&&n(t)}),[]),Object(a.useEffect)((function(){localStorage.setItem(y,JSON.stringify(c))}),[c]),Object(o.jsx)(b.Provider,{value:{bg:u,color:h,settingBg:function(t){O("dark"===t?"light":"dark")},settingColor:function(t){p("white"===t?"dark":"white")}},children:Object(o.jsx)("div",{className:"App bg-".concat(u," text-").concat(h),children:Object(o.jsxs)("div",{className:"container col-lg-4 ",children:[Object(o.jsx)(C,{}),Object(o.jsx)("div",{className:"bg-success p-3 card text-white",children:Object(o.jsxs)(v.a,{style:{padding:0},variant:"caption",children:["This app was built as part of the ",Object(o.jsx)("br",{}),"fulfilment of conditions to be ",Object(o.jsx)("br",{}),"considered for the Soronko Mentorship position",Object(o.jsx)("br",{}),Object(o.jsx)("em",{children:"Kofi Arnold Akpadji"})]})}),Object(o.jsx)(v.a,{style:{padding:16},variant:"h1",children:"ToDo List"}),Object(o.jsx)(g,{addTodo:function(t){n([t].concat(Object(s.a)(c)))}}),Object(o.jsx)(k,{todos:c,removeTodo:function(t){n(c.filter((function(e){return e.id!==t})))},toggleComplete:function(t){n(c.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{completed:!e.completed}):e})))}})]})})})};i.a.render(Object(o.jsx)(w,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.27fd6e06.chunk.js.map