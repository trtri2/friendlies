(this.webpackJsonpfriendlies=this.webpackJsonpfriendlies||[]).push([[0],{32:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),r=a(20),i=a.n(r),l=a(11),d=a(2);var j=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"navbar",style:{backgroundColor:"#ef838b"},children:Object(c.jsx)("nav",{className:"nav nav-pills nav-fill",children:Object(c.jsx)(l.b,{className:"nav-link",to:"/friendlies",children:Object(c.jsx)("li",{className:"nav-item",style:{color:"white"},children:"Home"})})})})})};var o=a(7),u=a(10),h=a(8);function b(e){switch(e.length){case 4:return function(e){for(var t=[],a=Object(u.a)(e),c=0,n=2,s=1,r=3,i=1;i<=3;i++){var l={rid:i,matches:[{mid:"".concat(i,"A"),match:"A",teamA:{ids:[a[c].id,a[n].id],values:[a[c].value,a[n].value]},teamB:{ids:[a[s].id,a[r].id],values:[a[s].value,a[r].value]},selected:"none"}]};a=m(a,!0),t.push(l)}return t}(e);case 5:return function(e){for(var t=[],a=Object(u.a)(e),c=2,n=3,s=4,r=1,i=1;i<=5;i++){var l={rid:i,matches:[{mid:"".concat(i,"A"),match:"A",teamA:{ids:[a[c].id,a[n].id],values:[a[c].value,a[n].value]},teamB:{ids:[a[s].id,a[r].id],values:[a[s].value,a[r].value]},selected:"none"}]};a=m(a,!1),t.push(l)}return t}(e);case 6:return;case 8:return function(e){for(var t=[],a=Object(u.a)(e),c=2,n=3,s=4,r=6,i=5,l=1,d=7,j=0,o=1;o<=7;o++){var h={rid:o,matches:[{mid:"".concat(o,"A"),match:"A",teamA:{ids:[a[c].id,a[n].id],values:[a[c].value,a[n].value]},teamB:{ids:[a[s].id,a[r].id],values:[a[s].value,a[r].value]},selected:"none"},{mid:"".concat(o,"B"),match:"B",teamA:{ids:[a[i].id,a[l].id],values:[a[i].value,a[l].value]},teamB:{ids:[a[d].id,a[j].id],values:[a[d].value,a[j].value]},selected:"none"}]};a=m(a,!0),t.push(h)}return t}(e);case 12:return function(e){for(var t=[],a=Object(u.a)(e),c=2,n=3,s=1,r=6,i=8,l=10,d=4,j=7,o=5,h=9,b=11,v=0,O=1;O<=11;O++){var x={rid:O,matches:[{mid:"".concat(O,"A"),match:"A",teamA:{ids:[a[c].id,a[n].id],values:[a[c].value,a[n].value]},teamB:{ids:[a[s].id,a[r].id],values:[a[s].value,a[r].value]},selected:"none"},{mid:"".concat(O,"B"),match:"B",teamA:{ids:[a[i].id,a[l].id],values:[a[i].value,a[l].value]},teamB:{ids:[a[d].id,a[j].id],values:[a[d].value,a[j].value]},selected:"none"},{mid:"".concat(O,"C"),match:"C",teamA:{ids:[a[o].id,a[h].id],values:[a[o].value,a[h].value]},teamB:{ids:[a[b].id,a[v].id],values:[a[b].value,a[v].value]},selected:"none"}]};a=m(a,!0),t.push(x)}return t}(e)}}function m(e,t){for(var a=t?e.length-1:e.length,c=e[0],n=0;n<a;n++)e[n]=e[n+1];return e[a-1]=c,e}var v=function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"text-center text-white",children:Object(c.jsx)("strong",{children:"Scoreboard"})}),Object(c.jsxs)("table",{className:"table table-striped table-borderless text-white",style:{backgroundColor:"#ef838b"},children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Player"}),Object(c.jsx)("th",{scope:"col",children:"Wins"}),Object(c.jsx)("th",{scope:"col",children:"Losses"})]})}),Object(c.jsx)("tbody",{children:e.playerList.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row",children:e.value}),Object(c.jsx)("td",{children:e.wins}),Object(c.jsx)("td",{children:e.losses})]})}))})]})]})};var O=function(e){return Object(c.jsxs)("div",{children:[void 0!==e.match?Object(c.jsx)("h6",{children:"Match ".concat(e.match)}):"",Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-5",children:"".concat(e.teamA.values[0]," & ").concat(e.teamA.values[1])}),Object(c.jsx)("div",{className:"col-2",children:"VS"}),Object(c.jsx)("div",{className:"col-5",children:"".concat(e.teamB.values[0]," & ").concat(e.teamB.values[1])})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"form-check inline col-5",children:Object(c.jsx)("input",{className:"form-check-input",name:e.mid,type:"radio",value:"teamA",checked:"teamA"===e.selected,onChange:function(t){return e.handleChange(t,e.teamA.ids,e.teamB.ids,e.selected,e.rid)}})}),Object(c.jsx)("div",{className:"col-2"}),Object(c.jsx)("div",{className:"form-check inline col-5",children:Object(c.jsx)("input",{className:"form-check-input",name:e.mid,type:"radio",value:"teamB",checked:"teamB"===e.selected,onChange:function(t){return e.handleChange(t,e.teamB.ids,e.teamA.ids,e.selected,e.rid)}})})]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{})]})};var x=function(e){var t=e.matches.map((function(t){return Object(c.jsx)("div",{children:Object(c.jsx)(O,{mid:t.mid,rid:e.rid,selected:t.selected,match:t.match,teamA:t.teamA,teamB:t.teamB,handleChange:e.handleChange},t.mid)})}));return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"card text-center text-white",style:{backgroundColor:"#E8A87C"},children:[Object(c.jsx)("div",{className:"card-header",children:Object(c.jsx)("h5",{children:"Round ".concat(e.rid)})}),Object(c.jsx)("br",{}),t,Object(c.jsx)("br",{})]}),Object(c.jsx)("br",{})]})};var f=function(e){var t=Object(n.useState)(!1),a=Object(h.a)(t,2),s=a[0],r=a[1],i=Object(n.useState)([]),l=Object(h.a)(i,2),d=l[0],j=l[1],m=Object(n.useState)([]),O=Object(h.a)(m,2),f=O[0],p=O[1];function g(e,t,a,c,n){var s=e.target,r=s.name,i=s.value,l=f.map((function(e){return e.rid===n?Object(o.a)(Object(o.a)({},e),{},{matches:e.matches.map((function(e){return e.mid===r?Object(o.a)(Object(o.a)({},e),{},{selected:i}):e}))}):e})),u=d.map((function(e){return e.id===t[0]||e.id===t[1]?Object(o.a)(Object(o.a)({},e),{},{wins:e.wins+1,losses:"none"===c?e.losses:e.losses-1}):e.id===a[0]||e.id===a[1]?Object(o.a)(Object(o.a)({},e),{},{wins:"none"===c?e.wins:e.wins-1,losses:e.losses+1}):e}));p(l),j(u)}return Object(n.useEffect)((function(){"undefined"===typeof e.location.state||s||(r(!0),j(Object(u.a)(e.location.state)),p(b(e.location.state)))}),[]),Object(c.jsx)("div",{className:"",children:s?Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h3",{className:"text-center text-white",children:Object(c.jsx)("strong",{children:"Bracket"})}),f.map((function(e){return Object(c.jsx)(x,{rid:e.rid,matches:e.matches,handleChange:g},e.rid)})),Object(c.jsx)("hr",{}),Object(c.jsx)(v,{playerList:d,numRounds:f.length})]}):Object(c.jsx)("h1",{children:"You need to create a new game first!"})})};var p=function(e){return Object(c.jsx)("div",{className:"form-check form-check-inline",children:Object(c.jsx)("input",{className:"btn btn-secondary",type:"button",name:e.name,value:e.value,onClick:e.handleChange})})};var g=function(e){return Object(c.jsx)("div",{className:"form-group col",children:Object(c.jsx)("input",{className:"form-control",type:"text",id:e.id,name:e.name,value:e.value,placeholder:e.placeholder,onChange:e.handleChange})})};var N=function(){var e=Object(n.useState)(0),t=Object(h.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)([]),i=Object(h.a)(r,2),l=i[0],j=i[1],u=Object(n.useState)(!1),b=Object(h.a)(u,2),m=b[0],v=b[1],O=Object(d.f)();function x(e){var t=e.target,c=t.type,n=t.value;if("text"===c){var r=e.target.id;j((function(e){return e.map((function(e){return e.id==r?Object(o.a)(Object(o.a)({},e),{},{value:n}):e}))}))}else a!==n&&(s(n),function(e){for(var t=[],a=0;a<e;a++){var c={id:a,placeholder:"Player ".concat(a+1),name:"playerName",value:"",wins:0,losses:0};t.push(c)}j(t)}(n))}return Object(n.useEffect)((function(){for(var e=0;e<a;e++)if(""===l[e].value)return void v(!1);v(!0)}),[l,a]),Object(c.jsx)("div",{children:Object(c.jsxs)("div",{class:"jumbotron container-sm",align:"center",children:[Object(c.jsx)("h1",{className:"display-4",children:"Friendlies"}),Object(c.jsx)("p",{className:"lead",children:"A round-robin bracket generator for rotating doubles"}),Object(c.jsx)("hr",{className:"my-4"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h5",{children:"Select Number of Players"}),Object(c.jsxs)("div",{className:"btn-group",role:"group",children:[Object(c.jsx)(p,{handleChange:x,name:"playerCount",value:4}),Object(c.jsx)(p,{handleChange:x,name:"playerCount",value:5}),Object(c.jsx)(p,{handleChange:x,name:"playerCount",value:8}),Object(c.jsx)(p,{handleChange:x,name:"playerCount",value:12})]})]}),Object(c.jsx)("br",{}),a>0?Object(c.jsxs)("div",{children:[Object(c.jsx)("h5",{children:"Enter Player Names"}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O.push("/friendlies/bracket",l)},children:[l.map((function(e){return Object(c.jsx)(g,{placeholder:e.placeholder,name:e.name,value:e.value,id:e.id,handleChange:x},e.id)})),Object(c.jsx)("button",{className:"btn",style:m?{color:"white",backgroundColor:"#ef838b"}:{backgroundColor:"grey"},disabled:!m,children:"Generate Bracket!"})]})]}):null]})})};var y=function(){return Object(c.jsxs)(l.a,{children:[Object(c.jsx)(j,{}),Object(c.jsx)("div",{className:"p-3 container",children:Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{path:"/friendlies/bracket",exact:!0,component:f}),Object(c.jsx)(d.a,{path:"/*",exact:!0,component:N})]})})]})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.bd772bda.chunk.js.map