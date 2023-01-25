(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),i=c.n(l),d=(c(10),c(11),c(5)),o=c.n(d),r=c(0),j=i.a.memo((function(e){var t=e.todos,c=e.setIsClicked,s=e.selectedTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:o()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(e.id)},children:(null===s||void 0===s?void 0:s.id)===e.id?Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"far fa-eye-slash"})}):Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})})),b=i.a.memo((function(e){var t=e.filterType,c=e.onFilter,s=e.query,a=e.onChangeQuery;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){return c(e.target.value)},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){return a(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),s&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})}));function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var h=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},m=i.a.memo((function(e){var t=e.todo,c=e.onClose,s=t.userId,a=t.id,i=t.title,d=Object(l.useState)(!0),o=Object(n.a)(d,2),j=o[0],b=o[1],m=Object(l.useState)(null),O=Object(n.a)(m,2),x=O[0],f=O[1];return Object(l.useEffect)((function(){(function(e){return u("/users/".concat(e))})(s).then((function(e){f(e),b(!1)}))}),[]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),j?Object(r.jsx)(h,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(a)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:i}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===x||void 0===x?void 0:x.email),children:null===x||void 0===x?void 0:x.name})]})]})]})]})})),O=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(!0),i=Object(n.a)(a,2),d=i[0],o=i[1],O=Object(l.useState)("all"),x=Object(n.a)(O,2),f=x[0],p=x[1],v=Object(l.useState)(null),N=Object(n.a)(v,2),y=N[0],g=N[1],C=Object(l.useState)(""),k=Object(n.a)(C,2),S=k[0],w=k[1];Object(l.useEffect)((function(){u("/todos").then((function(e){s(e),o(!1)}))}),[]);var T=Object(l.useCallback)((function(e){var t=c.find((function(t){return t.id===e}))||null;g(t)}),[c]),I=Object(l.useCallback)((function(){g(null)}),[]),_=Object(l.useMemo)((function(){return S||"all"!==f?c.filter((function(e){var t=e.title.toLowerCase().includes(S.toLowerCase());switch(f){case"all":return t;case"active":return t&&!e.completed;case"completed":return t&&e.completed;default:return!0}})):c}),[c,S,f]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(b,{filterType:f,onFilter:p,query:S,onChangeQuery:w})}),Object(r.jsx)("div",{className:"block",children:d?Object(r.jsx)(h,{}):Object(r.jsx)(j,{todos:_,setIsClicked:T,selectedTodo:y})})]})})}),y&&Object(r.jsx)(m,{todo:y,onClose:I})]})};a.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b2a63836.chunk.js.map