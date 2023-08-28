(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var s=c(24),a=c(6),n=(c(33),c(34),c(5)),r=c(0),i=c(3),l=c(8),o=c(9),j=c.n(o),d=c(1),b=["16","17","18","19","20"],h=function(){var e=Object(a.c)(),t=Object(n.a)(e,2),c=t[0],s=t[1],r=c.get("query")||"",i=c.get("sex")||"",o=Object(l.a)(c.getAll("centuries")),h=function(e){var t,s=new URLSearchParams(c),a=(t=e,o.includes(t)?o.filter((function(e){return e!==t})):[].concat(Object(l.a)(o),[t]));return s.delete("centuries"),a.forEach((function(e){return s.append("centuries",e)})),"/people?".concat(s.toString())};return Object(d.jsxs)("nav",{className:"panel",children:[Object(d.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(d.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(d.jsx)(a.b,{className:j()({"is-active":""===r.trim()&&!i}),to:"#/people",children:"All"}),Object(d.jsx)(a.b,{className:j()({"is-active":"m"===i}),to:function(e){var t=new URLSearchParams(c);return"sex"===e&&t.set("sex","m"),"/people?".concat(t.toString())}("sex"),children:"Male"}),Object(d.jsx)(a.b,{className:j()({"is-active":"f"===i}),to:function(e){var t=new URLSearchParams(c);return"sex"===e&&t.set("sex","f"),"/people?".concat(t.toString())}("sex"),children:"Female"})]}),Object(d.jsx)("div",{className:"panel-block",children:Object(d.jsxs)("p",{className:"control has-icons-left",children:[Object(d.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",onChange:function(e){var t=e.target.value,a=new URLSearchParams(c);t?a.set("query",t):a.delete("query"),s(a)}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(d.jsx)("div",{className:"panel-block",children:Object(d.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[b.map((function(e){return Object(d.jsx)(a.b,{"data-cy":"century",to:h(e),className:j()("button mr-1",{"is-info":o.includes(e)}),children:e},e)})),Object(d.jsx)("div",{className:"level-right ml-4",children:Object(d.jsx)("a",{"data-cy":"centuryALL",className:j()("button","is-success",{"is-outlined":o.length>0}),href:"#/people",children:"All"})})]})}),Object(d.jsx)("div",{className:"panel-block",children:Object(d.jsx)("a",{className:"button is-link is-outlined is-fullwidth",href:"#/people",children:"Reset all filters"})})]})},u=function(e){return e.All="",e.Sex="sex",e.Name="name",e.Born="born",e.Died="died",e}({}),x=(c(36),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})}),p=function(e){var t=e.person,c=e.isLoading,s=Object(i.q)().slug,r=Object(a.c)(),o=Object(n.a)(r,1)[0],b=o.get("sort")||"",h=o.get("order")||"",p=o.get("sex")||"",m=o.get("query")||"",O=o.getAll("centuries")||[],f=function(e){return j()("fas",{"fa-sort":b!=="".concat(e),"fa-sort-up":b==="".concat(e)&&"desc"!==h,"fa-sort-down":b==="".concat(e)&&"desc"===h})},N=function(e){var t,c,s=new URLSearchParams(o);return h||b!==e?h&&b===e?(t=null,c=null):(t=e,c=null):(t=e,c="desc"),t?s.set("sort",t):s.delete("sort"),c?s.set("order",c):s.delete("order"),{pathname:"/people",search:s.toString()}},v="";"sex"===b?v=u.Sex:"born"===b?v=u.Born:"died"===b?v=u.Died:"name"===b&&(v=u.Name);var g=function(e,t){var c=Object(l.a)(e);if(t.sex&&(c=c.filter((function(e){return e.sex===t.sex}))),t.query){var s=t.query.toLowerCase();c=c.filter((function(e){var t,c;return e.name.toLowerCase().includes(s)||(null===(t=e.fatherName)||void 0===t?void 0:t.toLowerCase().includes(s))||(null===(c=e.motherName)||void 0===c?void 0:c.toLowerCase().includes(s))}))}if(t.centuries.length>0&&(c=c.filter((function(e){var c=Math.ceil(e.born/100).toString();return t.centuries.includes(c)}))),t.sortField){var a=t.order?-1:1;c=c.sort((function(e,c){switch(t.sortField){case u.Born:case u.Died:return(e[t.sortField]-c[t.sortField])*a;case u.Name:case u.Sex:return e[t.sortField].localeCompare(c[t.sortField])*a;default:return 0}}))}return c}(t,{sortField:v,order:h,sex:p,query:m,centuries:O}),w=function(e,t){return e.find((function(e){return e.name===t}))};return c?Object(d.jsx)(x,{}):Object(d.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:Object(d.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Name",Object(d.jsx)(a.b,{to:N(u.Name),children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:f("name")})})})]})}),Object(d.jsx)("th",{children:Object(d.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Sex",Object(d.jsx)(a.b,{to:N(u.Sex),children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:f("sex")})})})]})}),Object(d.jsx)("th",{children:Object(d.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Born",Object(d.jsx)(a.b,{to:N(u.Born),children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:f("born")})})})]})}),Object(d.jsx)("th",{children:Object(d.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Died",Object(d.jsx)(a.b,{to:N(u.Died),children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:f("died")})})})]})}),Object(d.jsx)("th",{children:"Mother"}),Object(d.jsx)("th",{children:"Father"})]})}),Object(d.jsx)("tbody",{children:g.map((function(e){var c=w(t,e.fatherName),n=w(t,e.motherName);return Object(d.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":e.slug===s}),children:[Object(d.jsx)("td",{children:Object(d.jsx)(a.b,{className:j()({"has-text-danger":"f"===e.sex}),to:"/people/".concat(e.slug),children:e.name})}),Object(d.jsx)("td",{children:e.sex}),Object(d.jsx)("td",{children:e.born}),Object(d.jsx)("td",{children:e.died}),Object(d.jsx)("td",{children:n?Object(d.jsx)(a.b,{className:"has-text-danger",to:"/people/".concat(n.slug),children:e.motherName}):e.motherName||"-"}),Object(d.jsx)("td",{children:c?Object(d.jsx)(a.b,{to:"/people/".concat(c.slug),children:e.fatherName}):e.fatherName||"-"})]},e.slug)}))})]})},m=function(e){var t=e.person,c=e.isLoading;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:"People Page"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[t.length&&!c&&Object(d.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(d.jsx)(h,{})}),Object(d.jsx)("div",{className:"column",children:Object(d.jsxs)("div",{className:"box table-container",children:[!c&&!t.length&&Object(d.jsx)("p",{"data-cy":"peopleLoadingError",children:"Something went wrong"}),!t.length&&!c&&Object(d.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!t.length&&!c&&Object(d.jsx)("p",{children:"There are no people matching the current search criteria"}),Object(d.jsx)(p,{person:t,isLoading:c})]})})]})})]})},O=function(){var e=Object(i.m)();return Object(d.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(a.b,{className:j()("navbar-item",{"has-background-grey-lighter":"/"===e.pathname}),to:"/",children:"Home"}),Object(d.jsx)(a.b,{className:j()("navbar-item",{"has-background-grey-lighter":e.pathname.includes("/people")}),to:"/people",children:"People"})]})})})},f=(c(37),c(4)),N=c(7),v="https://mate-academy.github.io/react_people-table/api/people.json";function g(e){return new Promise((function(t){return setTimeout(t,e)}))}function w(){return(w=Object(N.a)(Object(f.a)().mark((function e(){return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g(500).then((function(){return fetch(v)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)(!0),l=Object(n.a)(a,2),o=l[0],j=l[1];return Object(r.useEffect)((function(){(function(){return w.apply(this,arguments)})().then(s).finally((function(){return j(!1)}))}),[s,j]),Object(d.jsxs)("div",{"data-cy":"app",children:[Object(d.jsx)(O,{}),Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{path:"/",element:Object(d.jsx)("h1",{className:"title",children:"Home Page"})}),Object(d.jsx)(i.b,{path:"/home",element:Object(d.jsx)(i.a,{to:"/"})}),Object(d.jsxs)(i.b,{path:"people",children:[Object(d.jsx)(i.b,{index:!0,element:Object(d.jsx)(m,{person:c,isLoading:o})}),Object(d.jsx)(i.b,{path:"/people/:slug",element:Object(d.jsx)(m,{person:c,isLoading:o})})]}),Object(d.jsx)(i.b,{path:"*",element:Object(d.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};Object(s.createRoot)(document.getElementById("root")).render(Object(d.jsx)(a.a,{children:Object(d.jsx)(y,{})}))}},[[38,1,2]]]);
//# sourceMappingURL=main.104e4f30.chunk.js.map