(this["webpackJsonpgh-resume"]=this["webpackJsonpgh-resume"]||[]).push([[0],{51:function(e,t,a){e.exports=a(68)},56:function(e,t,a){},57:function(e){e.exports=JSON.parse('{"contact":{"email":"don\'t include to avoid web scrapers","linkedIn":"linkedin.com/in/edwardidlin","phone":"don\'t include to avoid web scrapers"},"summary":"TODO add summary","skills":[{"isExample":true,"techLabel":"language|framework|database|testing|misc","name":"tech-name","level":"novice|familiar|competent|proficient|expert"},{"techLabel":"language","name":"Java","level":"expert"},{"techLabel":"language","name":"Python","level":"proficient"},{"techLabel":"language","name":"Javascript","level":"competent"},{"techLabel":"language","name":"SQL","level":"competent"},{"techLabel":"language","name":"C++","level":"familiar"},{"techLabel":"language","name":"HTML","level":"familiar"},{"techLabel":"language","name":"CSS","level":"familiar"},{"techLabel":"language","name":"Bash","level":"novice"},{"techLabel":"language","name":"C","level":"novice"},{"techLabel":"framework","name":"Spring Boot","level":"proficient"},{"techLabel":"framework","name":"Express","level":"competent"},{"techLabel":"framework","name":"Angular","level":"familiar"},{"techLabel":"framework","name":"React","level":"competent"},{"techLabel":"testing","name":"JUnit","level":"proficient"},{"techLabel":"testing","name":"Mockito","level":"proficient"},{"techLabel":"testing","name":"Jest","level":"familiar"},{"techLabel":"testing","name":"Mocha","level":"familiar"},{"techLabel":"database","name":"Oracle","level":"competent"},{"techLabel":"database","name":"PostgreSQL","level":"familiar"},{"techLabel":"database","name":"MongoDB","level":"competent"},{"techLabel":"misc","name":"Git","level":"proficient"},{"techLabel":"misc","name":"Linux","level":"competent"},{"techLabel":"misc","name":"AWS","level":"familiar"},{"techLabel":"misc","name":"Node.js","level":"competent"},{"techLabel":"misc","name":"Docker","level":"familiar"},{"techLabel":"misc","name":"NGINX","level":"novice"},{"techLabel":"misc","name":"Kafka","level":"novice"},{"techLabel":"misc","name":"Typescript","level":"familiar"},{"techLabel":"misc","name":"0x.js","level":"novice"}],"experience":[{"isExample":true,"startMonth":1,"startYear":2015,"isCurrentJob":false,"endMonth":12,"endYear":2020,"company":"company name","position":"job position","city":"Davis","state":"CA","description":"High level overview.","achievements":["Did cool thing.","Fixed important thing."]}]}')},58:function(e){e.exports=JSON.parse('{"techLabel":{"language":"Programming Languages","framework":"Frameworks","testing":"Testing","database":"Database Systems","misc":"Miscellaneous"},"level":{"expert":"Expert","proficient":"Proficient","competent":"Competent","familiar":"Familiar","novice":"Novice"}}')},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),i=a.n(l);a(56),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(6),c=a(10),s=a(9),m=a(7),u=a(8),p=a(24),d=a(17);var v=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Personal Summary"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at venenatis felis. Etiam porta malesuada enim ultricies commodo. Mauris vulputate turpis in justo pulvinar, in feugiat orci iaculis. Vivamus posuere velit sit amet nisi varius, sit amet maximus mi cursus. Donec semper tellus et est maximus condimentum. Etiam a lacinia dui. Fusce vehicula, nulla in posuere convallis, ex augue egestas ante, sed ullamcorper lacus risus id nulla. Mauris vulputate tortor diam, non lacinia massa vestibulum non. Etiam commodo nibh id nibh placerat consequat ac in neque. Curabitur sodales leo luctus elit commodo, vel auctor tellus tincidunt. Suspendisse blandit elementum lorem, eget lobortis leo rutrum sed. Etiam eget ultricies eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit commodo nisi sed sodales. Etiam fringilla odio nec turpis mollis sodales. "))},b=a(49),h=a(70),f=a(71),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={label:e.label,groupBy:e.groupBy,groupKey:e.groupKey,skills:e.skills},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.skills.filter((function(t){return t[e.state.groupBy]===e.state.groupKey}));t.sort((function(e,t){return e.name<t.name?-1:1}));var a=t.map((function(e){return r.a.createElement("li",{key:"key-"+e.name},e.name)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,this.state.label),r.a.createElement("ul",null,a))}}]),t}(n.Component),E=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={groupBy:"techLabel",resumeData:a(57),labelMap:a(58)},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"switchGroup",value:function(e){this.setState({groupBy:e})}},{key:"buttonVariant",value:function(e){return this.state.groupBy===e?"primary":"outline-secondary"}},{key:"render",value:function(){for(var e=this,t=this.state.labelMap[this.state.groupBy],a=this.state.resumeData.skills,n=[],l=0,i=Object.entries(t);l<i.length;l++){var o=Object(b.a)(i[l],2),c=o[0],s=o[1];n.push(r.a.createElement(g,{key:c,skills:a,groupBy:this.state.groupBy,groupKey:c,label:s}))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{"aria-label":"Basic example"},r.a.createElement(f.a,{variant:this.buttonVariant("techLabel"),onClick:function(){return e.switchGroup("techLabel")}},"Technology"),r.a.createElement(f.a,{variant:this.buttonVariant("level"),onClick:function(){return e.switchGroup("level")}},"Proficiency")),n)}}]),t}(n.Component);var y=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Experience"),r.a.createElement("p",null,"Fusce aliquam ultrices enim, sit amet ultricies enim eleifend quis. Sed eget scelerisque eros. Pellentesque et nibh blandit, sagittis risus sed, condimentum ante. "))};var k=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Contact Me"),r.a.createElement("p",null,"Donec suscipit, nulla quis luctus eleifend, est mi tincidunt libero, sed posuere metus odio eget odio. Vivamus rhoncus pellentesque eleifend."))},x=a(13),L=a(73),O=a(72),j=a(14);function w(){var e=Object(x.a)(["\n  position: relative;\n  padding-top: .7rem;\n  cursor: pointer;\n\tdisplay: block;\n  & span {\n    background: #fdcb6e;\n    display: block;\n    position: relative;\n    width: 3.5rem;\n    height: .4rem;\n    margin-bottom: .7rem;\n    transition: all ease-in-out 0.2s;\n\t}\n\t.open span:nth-child(1) {\n\t\ttransform: rotate(-45deg);\n\t\ttop: 18px;\n\t}\n\t.open span:nth-child(2) {\n\t\t\topacity: 0;\n  }\n\t.open span:nth-child(3) {\n\t\ttransform: rotate(45deg);\n\t\ttop: -18px\n\t}\n"]);return w=function(){return e},e}var S=function(e){return r.a.createElement(C,{onClick:e.handleNavbar},r.a.createElement("div",{className:e.navbarState?"open":""},r.a.createElement("span",null,"\xa0"),r.a.createElement("span",null,"\xa0"),r.a.createElement("span",null,"\xa0")))},C=j.a.div(w()),N=a(34),B=a(43);var M=function(e){return r.a.createElement(B.LinkContainer,{exact:!0,to:e.to},r.a.createElement(L.a.Link,{onClick:e.onClick?e.onClick:function(){}},e.text))};function D(){var e=Object(x.a)(["\n  list-style-type: none;\n  padding: 2rem 1rem 2rem 2rem;\n  \n  & li {\n    transition: all 300ms linear 0s;\n  }\n  & a {\n    font-size: 1.4rem;\n    line-height: 2;\n    color: #dfe6e9;\n    text-transform: uppercase;\n    text-decoration: none;\n    cursor: pointer;\n    &:hover {\n      color: #fdcb6e;\n      border-bottom: 1px solid #fdcb6e;\n    }\n  }\n"]);return D=function(){return e},e}function J(){var e=Object(x.a)(["\n  background: #2d3436;\n\ttop: 4.5rem;\n\tfloat: right;\n"]);return J=function(){return e},e}var q=function(e){var t=Object(N.b)({open:e.navbarState?0:1}).open;return!0===e.navbarState?r.a.createElement(F,{style:{transform:t.interpolate({range:[0,.2,.3,1],output:[0,-20,0,-200]}).interpolate((function(e){return"translate3d(0, ".concat(e,"px, 0")}))}},r.a.createElement(P,null,r.a.createElement(M,{to:"/",onClick:e.handleNavbar,text:"Summary"}),r.a.createElement(M,{to:"/skills",onClick:e.handleNavbar,text:"Skills"}),r.a.createElement(M,{to:"/experience",onClick:e.handleNavbar,text:"Experience"}),r.a.createElement(M,{to:"/contact",onClick:e.handleNavbar,text:"Contact"}))):null},F=Object(j.a)(N.a.div)(J()),P=j.a.ul(D());function G(){var e=Object(x.a)(["\n  margin: auto 0;\n  @media (min-width: 769px) {\n    display: none;\n\t}\n\tmargin-left: auto;\n"]);return G=function(){return e},e}function K(){var e=Object(x.a)(["\n  justify-self: end;\n  list-style-type: none;\n\tmargin: auto 0;\n  \n  & a {\n    color: #dfe6e9;\n    text-transform: uppercase;\n    font-weight: 600;\n    border-bottom: 1px solid transparent;\n    margin: 0 1.5rem;\n    transition: all 300ms linear 0s;\n    text-decoration: none;\n    cursor: pointer;\n    &:hover {\n      color: #fdcb6e;\n      border-bottom: 1px solid #fdcb6e;\n    }\n    @media (max-width: 768px) {\n      display: none;\n    }\n  }\n"]);return K=function(){return e},e}function T(){var e=Object(x.a)(["\n  display: flex;\n  justify-content: space-between;\n\theight: 5rem;\n\tmargin: 0 auto;\n"]);return T=function(){return e},e}var V=j.a.div(T()),A=Object(j.a)(L.a)(K()),I=j.a.div(G());var R=function(e){return r.a.createElement("div",null,r.a.createElement(O.a,{bg:"dark",variant:"dark"},r.a.createElement(O.a.Brand,{href:"/resume"},r.a.createElement("div",null,r.a.createElement("span",null,"Edward Lin"),r.a.createElement("span",{className:"cursive-nav-brand"},"R\xe9sum\xe9"))),r.a.createElement(V,null,r.a.createElement(A,null,r.a.createElement(M,{to:"/",text:"Summary"}),r.a.createElement(M,{to:"/skills",text:"Skills"}),r.a.createElement(M,{to:"/experience",text:"Experience"}),r.a.createElement(M,{to:"/contact",text:"Contact"}))),r.a.createElement("div",{className:"dummy-align"}),r.a.createElement(I,null,r.a.createElement(S,{navbarState:e.navbarState,handleNavbar:e.handleNavbar}))),r.a.createElement(q,{navbarState:e.navbarState,handleNavbar:e.handleNavbar}))},W=function(){return r.a.createElement("h1",null,"Not found")},H=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={navbarOpen:!1},a.handleNavbar=function(){a.setState({navbarOpen:!a.state.navbarOpen})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.BrowserRouter,{basename:"/resume"},r.a.createElement(R,{navbarState:this.state.navbarOpen,handleNavbar:this.handleNavbar}),r.a.createElement(d.g,null,r.a.createElement(d.d,{exact:!0,path:"/",component:v}),r.a.createElement(d.d,{path:"/skills",component:E}),r.a.createElement(d.d,{path:"/experience",component:y}),r.a.createElement(d.d,{path:"/contact",component:k}),r.a.createElement(d.d,{component:W}))))}}]),t}(n.Component);i.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.59a8c9f5.chunk.js.map