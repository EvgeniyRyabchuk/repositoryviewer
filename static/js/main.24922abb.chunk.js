(this.webpackJsonprepositoryviewer=this.webpackJsonprepositoryviewer||[]).push([[0],{33:function(e,t,n){e.exports={branch__list:"ControlPanel_branch__list__CpQwW",selected:"ControlPanel_selected__1wpf7"}},41:function(e,t,n){e.exports={loader:"Loader_loader__RNCMT",load6:"Loader_load6__2VWyq",round:"Loader_round__-glHS"}},42:function(e,t,n){e.exports={button:"DefBtn_button__2YhFA"}},53:function(e,t,n){},60:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(18),s=n.n(r),i=n(25),l=n(5),o=(n(53),n(7)),u=n.n(o),j=n(10),b=n(21),d=n(22),h=function(){function e(){Object(b.a)(this,e)}return Object(d.a)(e,null,[{key:"fetchJsonData",value:function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),p=function(){function e(){Object(b.a)(this,e)}return Object(d.a)(e,null,[{key:"getRepos",value:function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.github.com/users/".concat(t,"/repos"),e.next=3,h.fetchJsonData(n);case 3:return c=e.sent,console.log(c),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getReposContent",value:function(){var e=Object(j.a)(u.a.mark((function e(t,n){var c,a,r,s=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=s.length>2&&void 0!==s[2]?s[2]:"master",a="https://api.github.com/repos/".concat(t,"/").concat(n,"/git/trees/").concat(c,"?recursive=1"),e.next=4,h.fetchJsonData(a);case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getBlob",value:function(e,t,n,c){var a="https://raw.githubusercontent.com/".concat(e,"/").concat(t,"/").concat(n,"/").concat(c);window.open(a,c)}},{key:"getBranches",value:function(){var e=Object(j.a)(u.a.mark((function e(t,n){var c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.github.com/repos/".concat(t,"/").concat(n,"/branches"),e.next=3,h.fetchJsonData(c);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.github.com/users/".concat(t),e.next=3,h.fetchJsonData(n);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var e=Object(j.a)(u.a.mark((function e(t,n,c){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.github.com/search/users?q=".concat(t,"&type=users&page=").concat(n,"&per_page=").concat(c),e.next=3,h.fetchJsonData(a);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}()}]),e}(),f=function(e){var t=Object(c.useRef)(),n=Object(c.useState)(!1),a=Object(l.a)(n,2),r=a[0],s=a[1];return[function(){for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];s(!0),t.current&&clearTimeout(t.current),t.current=setTimeout(Object(j.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.apply(void 0,c);case 2:s(!1);case 3:case"end":return t.stop()}}),t)}))),1e3)},r]},m=n(9),O=n(12),x=Object(c.createContext)({}),v=Object(c.createContext)({}),g=n(11),N=(n(60),n(0)),y=function(e){var t=e.props,n=e.foreget,a=e.isVisited,r=e.userSelected,s=Object(c.useContext)(x),i=s.user,l=s.setUser,o=Object(g.g)();return Object(N.jsx)("div",{className:"profile-card",children:Object(N.jsxs)("div",{className:i&&t.id===i.id?"profile-card-inner profile__card--active":"profile-card-inner",children:[a&&Object(N.jsx)("div",{className:"close__profile",onClick:function(){return n(t.id)},children:Object(N.jsx)(m.a,{icon:O.g})}),Object(N.jsx)("div",{className:"profile__img__wrapper",children:Object(N.jsx)("img",{src:t.avatar_url,width:"50",height:"50"})}),Object(N.jsx)("div",{className:"w-100 d-flex flex-row justify-content-end align-items-center",children:Object(N.jsxs)("div",{className:"d-flex flex-column justify-content-end",children:[Object(N.jsx)("span",{className:"profile__name",children:t.login?t.login:t.username}),Object(N.jsx)("div",{className:"d-flex justify-content-end",children:Object(N.jsx)("div",{onClick:function(){console.log("click on user");var e={username:t.login?t.login:t.username,email:t.email,id:t.id,avatar_url:t.avatar_url};l(e),o.push("home"),r&&r()},className:"view-rep-btn",children:"View repositories"})})]})})]})})},w=(n(64),n(2)),k=n(41),_=n.n(k),S=function(e){var t=Object.assign({},e);return Object(N.jsx)("div",Object(w.a)(Object(w.a)({},t),{},{className:_.a.loader,children:"Loading..."}))},C=function(e){var t=e.closed,n=Object(c.useRef)(),a=Object(c.useState)(!1),r=Object(l.a)(a,2),s=r[0],i=(r[1],Object(c.useState)(!1)),o=Object(l.a)(i,2),b=o[0],d=o[1],h=Object(c.useState)([]),m=Object(l.a)(h,2),O=m[0],x=m[1],v=f(function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==t){e.next=6;break}return e.next=3,p.getUsers(t,1,5);case 3:n=e.sent,console.log(n),n.items&&x(n.items);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),g=Object(l.a)(v,2),w=g[0],k=g[1];return Object(N.jsx)("div",{className:s?"sm-search-wrapper wrapper--hide":"sm-search-wrapper",onClick:function(){console.log(s),t()},children:Object(N.jsx)("div",{className:"sm-search",onClick:function(e){e.stopPropagation()},children:Object(N.jsxs)("div",{className:"sm-search-inner",children:[Object(N.jsx)("form",{className:"d-flex mx-2",children:Object(N.jsx)("input",{ref:n,className:"form-control",type:"search",placeholder:"Search","aria-label":"Search",onInput:function(){var e=n.current.value;d(""!==e),w(e),x([])},onFocus:function(e){return d(!0)}})}),b&&b&&""!==n.current.value?Object(N.jsx)("div",{className:"users-block",children:Object(N.jsxs)("div",{className:"user-search-card",children:[""===n.current.value&&Object(N.jsx)("h6",{style:{textAlign:"center",margin:"0"},children:"Input user name"}),k&&Object(N.jsx)(S,{}),O.map((function(e){return Object(N.jsx)(y,{props:e,isVisited:!1,userSelected:function(){t()}},e.id)}))]})}):""]})})})},B=function(e){var t=e.openHiddenSideBar,n=Object(c.useContext)(x),a=n.user,r=(n.setUser,Object(c.useRef)()),s=Object(c.useState)(!1),i=Object(l.a)(s,2),o=(i[0],i[1]),b=Object(c.useState)(!1),d=Object(l.a)(b,2),h=d[0],v=d[1],g=Object(c.useState)([]),w=Object(l.a)(g,2),k=w[0],_=w[1],B=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.current.value,e.next=3,p.getUsers(t);case 3:n=e.sent,console.log(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=f(function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==t){e.next=6;break}return e.next=3,p.getUsers(t,1,5);case 3:n=e.sent,console.log(n),n.items&&_(n.items);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),P=Object(l.a)(I,2),U=P[0],R=P[1];return Object(N.jsxs)("header",{children:[h&&Object(N.jsx)(C,{closed:function(){return v(!1)}}),Object(N.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light py-0",children:Object(N.jsxs)("div",{style:{display:"flex",width:"100%"},children:[Object(N.jsx)("div",{className:"navbar-icon-wrapper",children:Object(N.jsx)("button",{className:"navbar-toggler",id:"burger-btn",type:"button",onClick:function(){return t(!0)},children:Object(N.jsx)("span",{className:"navbar-toggler-icon"})})}),Object(N.jsx)("div",{className:"",id:"navbarTogglerDemo02",style:{width:"100%"},children:Object(N.jsxs)("div",{className:"navbar-content",children:[Object(N.jsx)("div",{className:"search",tabIndex:0,onFocus:function(){o(!0)},onBlur:function(){o(!1)},children:Object(N.jsxs)("form",{className:"d-flex",children:[Object(N.jsx)("input",{ref:r,className:"form-control me-2",type:"search",placeholder:"Search for users...","aria-label":"Search",onInput:function(){var e=r.current.value;o(""!=e),console.log(e),U(e),_([])},onFocus:function(){return o(!0)}}),Object(N.jsx)("button",{className:"btn btn-outline-success",type:"button",onClick:B,children:"Search"}),""!==r.current.value?Object(N.jsx)("div",{className:"users-block",style:{width:"310px"},onClick:function(){console.log("lskdh")},children:Object(N.jsxs)("div",{className:"user-search-card",children:[R&&Object(N.jsx)(S,{}),k.map((function(e){return Object(N.jsx)("div",{children:Object(N.jsx)(y,{props:e,isVisited:!1},e.id)})}))]})}):""]})}),Object(N.jsx)("div",{className:"side-btn",children:Object(N.jsxs)("ul",{className:"navbar-nav-list",children:[Object(N.jsx)("li",{className:"nav-item search-header-item",children:Object(N.jsx)("a",{className:"nav-link","aria-current":"page",onClick:function(){v(!0)},children:Object(N.jsx)(m.a,{icon:O.f,style:{fontSize:"20px"}})})}),Object(N.jsx)("li",{className:"nav-item",children:Object(N.jsx)("a",{className:"nav-link disabled",children:a&&a.username})})]})})]})})]})})]})},I=function(){var e=Object(g.g)(),t=Object(g.h)();return console.log(t.pathname),Object(N.jsx)("aside",{className:"disk-manage",children:Object(N.jsx)("div",{className:"nav flex-column nav-pills me-3",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical",children:["home","profile"].map((function(n){return Object(N.jsx)("button",{onClick:function(){return e.push("/".concat(n))},className:t.pathname==="/".concat(n)?"nav-link active":"nav-link",id:"v-pills-".concat(n,"-tab"),"data-bs-toggle":"pill","data-bs-target":"#v-pills-".concat(n),type:"button",role:"tab","aria-controls":"v-pills-".concat(n),"aria-selected":t.pathname==="/".concat(n),children:n},n)}))})})},P=n(19),U=n(24),R=n(32),L=function(e){var t=e.item,n=e.types,a=e.defType,r=e.open,s=Object(c.useState)(function(){var e=t.path.split("/");return e[e.length-1]}()),i=Object(l.a)(s,2),o=i[0];i[1];return Object(N.jsx)("div",{tabIndex:t.sha,className:"recently-item",onDoubleClick:function(){return r(t)},children:Object(N.jsxs)("div",{className:"recently-item-inner",children:[function(){var e,c=Object(U.a)(n);try{for(c.s();!(e=c.n()).done;){var r,s=e.value,i=s.extension.split("|"),l=Object(U.a)(i);try{for(l.s();!(r=l.n()).done;){var o=r.value;if(t.path.includes(o))return Object(N.jsx)(m.a,{icon:s.icon})}}catch(u){l.e(u)}finally{l.f()}}}catch(u){c.e(u)}finally{c.f()}return Object(N.jsx)(m.a,{icon:a.icon})}(),Object(N.jsx)("div",{className:"recently-file__header",children:Object(N.jsx)("h5",{children:o})})]})})},E=function(e){var t=e.lastItems,n=e.openLastItem,c=[{extension:".png|.jpeg|.jpg",type:"image",icon:O.d},{extension:".txt",type:"text",icon:R.a},{extension:".mp4",type:"video",icon:R.c},{extension:".mp3",type:"audio",icon:R.b},{extension:".zip|.rar",type:"audio",icon:O.c}],a={extension:"*",type:"any",icon:O.b};return Object(N.jsxs)("div",{className:"recently-items-wrapper",children:[t.map((function(e){return Object(N.jsx)(L,{item:e,types:c,defType:a,open:n},e.sha)})),0===t.length&&Object(N.jsx)("h1",{className:"h-center",children:"You not have recently items"})]})},D=function(e){var t=e.children,n=e.select,c=e.index;return Object(N.jsxs)("li",{onClick:function(){n(c)},children:[Object(N.jsx)(m.a,{icon:O.e}),Object(N.jsx)("span",{children:t})]})},J=function(e){var t=e.curPath,n=e.changePath,a=Object(c.useState)(!1),r=Object(l.a)(a,2),s=r[0],i=r[1],o=Object(c.useMemo)((function(){var e=t.split("/");return""===e[0]&&(e[0]="/"),console.log("sdfgh",e),e}),[t]),u=function(e){var c=t.split("/"),a=c.length-(e+1);console.log(a,e+a);var r=c.splice(0,e).join("/");""===r&&(r=""),n(r,!0)};return Object(N.jsxs)("div",{className:"history-wrapper",children:[Object(N.jsx)("button",{className:"path-history",onClick:function(){i(!s)},children:Object(N.jsx)(m.a,{icon:O.a})}),Object(N.jsx)("ul",{className:s?"path-list open":"path-list",children:o.map((function(e,t){return Object(N.jsx)(D,{index:t,select:u,children:e},t)}))})]})},H=n(33),z=n.n(H),M=function(e){var t=e.showModal,n=e.curPath,c=e.changePath,a=e.branches,r=e.switchBranch,s=e.curBranch;return Object(N.jsx)("div",{className:"control-wrapper",children:Object(N.jsxs)("div",{className:"control-panel",children:[Object(N.jsx)("button",{type:"button",onClick:t,className:"btn btn-primary control-btn",children:"View profile"}),Object(N.jsx)("div",{className:"cur-path",children:Object(N.jsx)("input",{type:"text",disabled:!0,value:"/"+n})}),Object(N.jsxs)("select",{className:"form-select "+z.a.branch__list,"aria-label":"Default select example",onChange:function(e){return r(e.target.value)},children:[Object(N.jsx)("option",{disabled:!0,children:"Select branch"}),a.map((function(e,t){return Object(N.jsx)("option",{className:s?e.name===s.name?z.a.selected:"simple":e.name===a[0].name?z.a.selected:"simple",value:e.name,children:e.name},e.commit.sha)}))]}),Object(N.jsx)(J,{curPath:n,changePath:c})]})})},T=n(44),V=n(4),Y=n(42),A=n.n(Y),G=["children"],F=function(e){var t=e.children,n=Object(V.a)(e,G);return Object(N.jsx)("button",Object(w.a)(Object(w.a)({},n),{},{className:A.a.button,children:t}))},q=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),o=i[0],b=i[1],d=function(){var t=Object(j.a)(u.a.mark((function t(){var n=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(!0),t.next=4,e.apply(void 0,n);case 4:t.next=12;break;case 6:t.prev=6,t.t0=t.catch(0),b(t.t0),console.log("-----------------------------------"),console.error(t.t0),console.log("-----------------------------------");case 12:return t.prev=12,r(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,6,12,15]])})));return function(){return t.apply(this,arguments)}}();return[d,a,o]},W=function(e){var t=e.self,n=e.select;return Object(N.jsx)("li",{onClick:function(){n(t.path,"tree")},children:Object(N.jsxs)("div",{className:"li-header folder",children:[Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[Object(N.jsx)("div",{className:"ff-icon",children:Object(N.jsx)(m.a,{icon:O.e})}),Object(N.jsx)("span",{className:"name",children:t.name})]}),Object(N.jsxs)("div",{className:"file-metadata",children:[Object(N.jsx)("span",{className:"type",children:t.type}),Object(N.jsx)("span",{className:"created-at",children:t.created_at}),Object(N.jsx)("span",{className:"size",children:t.size})]})]})})},Q=function(e){var t=e.self,n=e.select;return Object(N.jsx)("li",{onClick:function(){n(t.path,"blob")},children:Object(N.jsxs)("div",{className:"li-header folder",children:[Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[Object(N.jsx)("div",{className:"ff-icon",children:Object(N.jsx)(m.a,{icon:O.b})}),Object(N.jsx)("span",{className:"name",children:t.name})]}),Object(N.jsxs)("div",{className:"file-metadata",children:[Object(N.jsx)("span",{className:"type",children:t.type}),Object(N.jsx)("span",{className:"created-at",children:t.created_at}),Object(N.jsx)("span",{className:"size",children:t.size})]})]})})},K=n(31),X=function(e){var t=e.self,n=e.select;return Object(N.jsx)("li",{onClick:function(){n(t.name,"repos")},children:Object(N.jsxs)("div",{className:"li-header folder",children:[Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[Object(N.jsx)("div",{className:"ff-icon",children:Object(N.jsx)(m.a,{icon:K.b})}),Object(N.jsx)("span",{className:"name",children:t.name})]}),Object(N.jsxs)("div",{className:"file-metadata",children:[Object(N.jsx)("span",{className:"type",children:"     - "}),Object(N.jsx)("span",{className:"created-at",children:t.created_at}),Object(N.jsx)("span",{className:"size",children:t.size})]})]})})},Z=n(43),$=n.n(Z),ee=function(e){var t=e.data,n=e.select;Object(c.useMemo)((function(){return t=t.map((function(e){var t=$()(e.created_at).format("MMMM d, YYYY");return e.created_at=t,e}))}),[t]);return t.length?Object(N.jsx)("ul",{id:"files",children:t.map((function(e){switch(e.type){case"tree":return Object(N.jsx)(W,{self:e,select:n},e.name);case"blob":return Object(N.jsx)(Q,{self:e,select:n},e.name);default:return Object(N.jsx)(X,{self:e,select:n},e.name)}}))}):Object(N.jsx)("h1",{style:{textAlign:"center"},children:"No items"})},te=function(e){var t=e.curPath,n=e.changePath,a=e.isRefresh,r=e.setIsRefresh,s=e.changeBranches,i=e.branches,o=e.curBranch,b=e.changeCurBranch,d=e.addLastItem,h=Object(c.useContext)(x),f=h.user,O=(h.setUser,Object(c.useState)([])),v=Object(l.a)(O,2),g=v[0],y=v[1],w=Object(c.useState)(""),k=Object(l.a)(w,2),_=k[0],C=k[1],B=Object(c.useRef)(),I=function(e,t){var c=e.tree.filter((function(e){return e.owner===t}));return n(t),c};Object(c.useEffect)((function(){if(B.current){var e=I(B.current,t);y(e),r(!1)}}),[a]);var P=function(e){var t,n=Object(U.a)(e.tree);try{for(n.s();!(t=n.n()).done;){var c=t.value,a=c.path.split("/");c.name=a.pop(),c.owner=a.join("/")}}catch(r){n.e(r)}finally{n.f()}},R=function(e){var t,n=Object(U.a)(e);try{for(n.s();!(t=n.n()).done;){var c=t.value;0===e.indexOf(c)?c.isSelect=!0:c.isSelect=!1}}catch(a){n.e(a)}finally{n.f()}};Object(c.useEffect)((function(){o&&(console.log(o.name,"current branch"),V(_,o))}),[o]);var L=q(function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getRepos(t);case 2:n=e.sent,y(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),E=Object(l.a)(L,3),D=E[0],J=E[1],H=E[2],z=q(function(){var e=Object(j.a)(u.a.mark((function e(t,n){var c,a,r,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getBranches(f.username,t);case 2:return c=e.sent,s(c),a=n||c[0],e.next=7,p.getReposContent(f.username,t,a.name);case 7:return r=e.sent,P(r),R(c),B.current=r,i=I(r,""),y(i),s(c),e.abrupt("return",a);case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),M=Object(l.a)(z,3),V=M[0],Y=M[1],A=M[2];Object(c.useEffect)((function(){f&&D(f.username)}),[f]);var G=function(){var e=Object(j.a)(u.a.mark((function e(t,n){var c,a,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("repos"!==n){e.next=9;break}return C(t),e.next=4,V(t);case 4:c=e.sent,console.log(c),b(c),e.next=10;break;case 9:"tree"===n?(a=I(B.current,t),y(a)):"blob"===n&&(r=o?o.name:i[0].name,p.getBlob(f.username,_,r,t),(s=g.filter((function(e){return e.path===t}))[0]).branchName=r,s.reposName=_,s.username=f.username,d(s));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:"file-list-wrapper",children:[Object(N.jsx)("h1",{style:{textAlign:"center",marginBottom:"50px",marginTop:"10px"},children:_}),Object(N.jsxs)("div",{className:"file-list-container",children:[Object(N.jsx)("div",{className:"list-header-wrapper",children:Object(N.jsxs)("div",{className:"list-header-container",children:[Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[Object(N.jsx)(F,{id:"folder-back",children:Object(N.jsx)(m.a,{id:"folder-back",icon:T.faUndoAlt,onClick:function(){var e=t.split("/");if(console.log(e),1===e.length&&""===e[0])return D(f.username),C(""),void s([]);e.splice(e.length-1,1);var n=e.join("/"),c=I(B.current,n);y(c)}})}),Object(N.jsx)("span",{className:"header-name",children:"Name"})]}),Object(N.jsxs)("div",{className:"file-metadata",children:[Object(N.jsx)("span",{className:"type",children:"Type"}),Object(N.jsx)("span",{className:"created-at",children:"Date"}),Object(N.jsx)("span",{className:"size",children:"Size"})]})]})}),J||Y?Object(N.jsx)(S,{}):Object(N.jsx)(ee,{data:g,select:G}),H&&Object(N.jsx)("h1",{style:{color:"red"},children:H}),A&&Object(N.jsx)("h1",{style:{color:"red"},children:A})]})]})},ne=(n(66),n(73)),ce=n(74),ae=function(e){var t=e.isOpen,n=e.confirm,a=e.hidden,r=Object(c.useRef)();return Object(N.jsx)("div",{children:Object(N.jsxs)(ne.a,{show:t,onHide:a,children:[Object(N.jsx)(ne.a.Header,{children:Object(N.jsx)(ne.a.Title,{children:"Please enter your GitHub username"})}),Object(N.jsx)(ne.a.Body,{children:Object(N.jsx)(ce.a,{children:Object(N.jsxs)(ce.a.Group,{className:"mb-3",controlId:"formBasicUsername",children:[Object(N.jsx)(ce.a.Label,{children:"GitHub Username"}),Object(N.jsx)(ce.a.Control,{type:"text",placeholder:"Enter username",ref:r})]})})}),Object(N.jsxs)(ne.a.Footer,{children:[Object(N.jsx)("button",{className:"btn btn-secondary",onClick:a,children:"Cancel"}),Object(N.jsx)("button",{className:"btn btn-primary",onClick:function(){n({username:r.current.value})},children:"Save"})]})]})})},re=function(){var e=Object(g.h)(),t=Object(c.useContext)(x),n=(t.user,t.setUser),r=a.a.useState(!1),s=Object(l.a)(r,2),o=s[0],b=s[1],d=Object(c.useState)(""),h=Object(l.a)(d,2),f=h[0],m=h[1],O=Object(c.useState)(),v=Object(l.a)(O,2),y=v[0],w=v[1],k=Object(c.useState)([]),_=Object(l.a)(k,2),S=_[0],C=_[1],B=Object(c.useState)(!1),I=Object(l.a)(B,2),P=I[0],R=I[1],L=Object(c.useState)([]),D=Object(l.a)(L,2),J=D[0],H=D[1],z=function(){b(!1)},T=function(){var e=Object(j.a)(u.a.mark((function e(t){var c,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(c=t.username)){e.next=17;break}return e.prev=2,e.next=5,p.getUser(c);case 5:a=e.sent,console.log(a),r={username:a.login,email:a.email,id:a.id,avatar_url:a.avatar_url},n(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:return e.prev=14,z(),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})));return function(t){return e.apply(this,arguments)}}(),V=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];m(e),t&&R(!0)};return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("lastItems"));e&&e.length>0&&H(e),console.log(e)}),[]),Object(c.useEffect)((function(){J&&localStorage.setItem("lastItems",JSON.stringify(J))}),[J]),Object(N.jsx)("div",{className:"/home"===e.pathname?"tab-pane fade show active":"tab-pane fade",id:"v-pills-home",role:"tabpanel","aria-labelledby":"v-pills-home-tab",children:Object(N.jsxs)("article",{className:"content",children:[Object(N.jsx)(E,{lastItems:J,openLastItem:function(e){p.getBlob(e.username,e.reposName,e.branchName,e.path)}}),Object(N.jsxs)("div",{className:"content-inner",children:[Object(N.jsx)(M,{showModal:function(){b(!0)},curPath:f,changePath:V,branches:S,switchBranch:function(e){var t,n=null,c=Object(U.a)(S);try{for(c.s();!(t=c.n()).done;){var a=t.value;a.name===e&&(n=a)}}catch(r){c.e(r)}finally{c.f()}console.log(n),w(n)},curBranch:y}),Object(N.jsx)(te,{curPath:f,changePath:V,isRefresh:P,setIsRefresh:R,changeBranches:C,branches:S,curBranch:y,changeCurBranch:w,addLastItem:function(e){J.includes(e)||(J.length>5?(J.splice(J.length-1,1),H([e].concat(Object(i.a)(J)))):H([e].concat(Object(i.a)(J))))}}),Object(N.jsx)(ae,{isOpen:o,confirm:T,hidden:z})]})]})})},se=(n(67),function(){var e=Object(c.useContext)(v),t=e.userList,n=e.setUserList,a=Object(c.useContext)(x),r=(a.user,a.setUser),s=function(e){var c=t.filter((function(t){return t.id!=e}));c.length>0?r(t[0]):r(null),n(c)};return console.log(t),Object(N.jsx)("div",{className:"profile-list",children:t.map((function(e){return Object(N.jsx)(y,{props:e,foreget:s,isVisited:!0},e.id)}))})}),ie=(n(68),[{path:"/home",component:re,exact:!0},{path:"/profile",component:function(){var e=Object(g.h)(),t=Object(c.useContext)(v),n=t.userList,a=(t.setUserList,Object(g.g)());return Object(N.jsx)("div",{className:"/profile"===e.pathname?"tab-pane fade show active":"tab-pane fade",id:"v-pills-profile",role:"tabpanel","aria-labelledby":"v-pills-profile-tab",children:Object(N.jsxs)("article",{className:"profile-tab",children:[Object(N.jsx)("h1",{className:"h-center",children:"Profiles"}),0===n.length&&Object(N.jsxs)("div",{className:"no-profiles",children:[Object(N.jsx)("h6",{className:"h-no-profiles",children:"No profiles"}),Object(N.jsx)("div",{className:"no-profiles-icon",children:Object(N.jsx)(m.a,{icon:O.h})}),Object(N.jsx)("button",{onClick:function(){return a.push("/home")},className:"btn btn-primary",children:"Go home to add"})]}),Object(N.jsx)(se,{})]})})},exact:!0},{path:"/pagenotfound",component:function(){var e=Object(g.h)();return Object(N.jsx)("div",{children:Object(N.jsxs)("h1",{style:{color:"red"},children:["You have 404 error. Do you mean this page? (",e.pathname,")"]})})},exact:!0}]),le=function(){return Object(N.jsxs)(g.d,{children:[ie.map((function(e){return Object(N.jsx)(g.b,{path:e.path,component:e.component,exact:e.exact},e.path)})),Object(N.jsx)(g.a,{exact:!0,from:"/",to:"/home"}),Object(N.jsx)(g.a,{exact:!0,to:"/pagenotfound"})]})},oe=function(e){var t=e.isOpen,n=e.openHiddenSideBar,a=Object(c.useContext)(x),r=a.user,s=(a.serUser,Object(g.g)()),i=Object(g.h)();return console.log(r),Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{onClick:function(){return n(!1)},className:!0===t?"side_wrapper side_wrapper--show":"side_wrapper"}),Object(N.jsxs)("div",{className:!0===t?"hidden-aside hidden-aside--show":"hidden-aside",children:[Object(N.jsxs)("div",{className:"profile",children:[Object(N.jsx)("div",{className:"profile__img__wrapper",children:Object(N.jsx)("img",{src:r?r.avatar_url:"https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",alt:"",width:"50",height:"50"})}),Object(N.jsx)("span",{className:"email",children:r?r.email?r.email:r.username:"Guest"})]}),Object(N.jsx)("div",{className:"nav flex-column nav-pills mx-3",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical",children:["home","profile"].map((function(e){return Object(N.jsx)("button",{onClick:function(){return function(e){s.push("/".concat(e)),n(!1)}(e)},className:i.pathname==="/".concat(e)?"nav-link active":"nav-link",id:"v-pills-".concat(e,"-tab"),"data-bs-toggle":"pill","data-bs-target":"#v-pills-".concat(e),type:"button",role:"tab","aria-controls":"v-pills-".concat(e),"aria-selected":i.pathname==="/".concat(e),children:e},e)}))})]})]})},ue=(n(69),function(){return Object(N.jsx)("footer",{children:Object(N.jsxs)("div",{className:"footer-inner",children:[Object(N.jsxs)("span",{className:"footer__label",children:["Creator - ",Object(N.jsx)("a",{href:"https://github.com/EvgeniyRyabchuk",children:"Evgeniy Ryabchuk"})]}),Object(N.jsx)(m.a,{icon:K.a}),Object(N.jsxs)("span",{className:"footer__label",children:["GitHub Repository - ",Object(N.jsx)("a",{href:"https://github.com/EvgeniyRyabchuk/repositoryviewer",children:"GitHub Viewer"})]})]})})});var je=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(l.a)(r,2),o=s[0],u=s[1],j=Object(c.useState)(!1),b=Object(l.a)(j,2),d=b[0],h=b[1],p=function(e){h(e),document.body.style.overflowY=!0===e?"hidden":"auto"};return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userList"));e&&(u(e),e.length>0&&a(e[0]))}),[]),Object(c.useEffect)((function(){n&&(console.log(o),o&&o.length>0?o.filter((function(e){return e.id===n.id})).length>0||u([].concat(Object(i.a)(o),[n])):u([n]))}),[n]),Object(c.useEffect)((function(){o&&localStorage.setItem("userList",JSON.stringify(o))}),[o]),Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(v.Provider,{value:{userList:o,setUserList:u},children:Object(N.jsx)(x.Provider,{value:{user:n,setUser:a},children:Object(N.jsxs)(P.a,{children:[Object(N.jsx)(B,{openHiddenSideBar:p}),Object(N.jsx)(oe,{isOpen:d,openHiddenSideBar:p}),Object(N.jsx)("div",{className:"main-wrapper container-fluid d-flex pr-0",children:Object(N.jsx)("main",{children:Object(N.jsxs)("div",{className:"d-flex w-100",children:[Object(N.jsx)(I,{}),Object(N.jsx)("div",{className:"tab-content",id:"v-pills-tabContent",children:Object(N.jsx)(le,{})})]})})}),Object(N.jsx)(ue,{})]})})})})};s.a.render(Object(N.jsx)(je,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.24922abb.chunk.js.map