"use strict";(self.webpackChunkwallet_team_project_client_side=self.webpackChunkwallet_team_project_client_side||[]).push([[138],{3138:function(t,e,n){n.r(e),n.d(e,{default:function(){return H}});var r,a,v=n(4165),f=n(5861),l=n(9439),o=n(1243),d="currencyCache",i=function(){var t=(0,f.Z)((0,v.Z)().mark((function t(){var e,n,r,a,f,l;return(0,v.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=localStorage.getItem(d))){t.next=6;break}if(n=JSON.parse(e),r=n.data,a=n.timestamp,!(Date.now()-a<864e5)){t.next=6;break}return t.abrupt("return",r);case 6:return t.prev=6,t.next=9,(0,o.Z)("https://wallet-team-project-hg8k.onrender.com/api/currenciesApi");case 9:return f=t.sent,l=f.data.ResponseBody,localStorage.setItem(d,JSON.stringify({data:l,timestamp:Date.now()})),t.abrupt("return",l);case 15:t.prev=15,t.t0=t.catch(6);case 17:case"end":return t.stop()}}),t,null,[[6,15]])})));return function(){return t.apply(this,arguments)}}(),s=i,b=JSON.parse('{"840":"USD","978":"EUR","980":"UAH"}'),p=n(2791),P=n(168),c=n(7691),R=c.ZP.div(r||(r=(0,P.Z)(["\n  position: relative;\n  background-repeat: no-repeat;\n  background-position: bottom;\n  @media screen and (min-width: 320px) {\n    width: 280px;\n    min-height: 174px;\n    border-radius: 30px;\n    margin: 0 auto;\n\n    background-image: url(",");\n\n    background-color: var(--ascent-text-color);\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 336px;\n    height: 182px;\n    border-radius: 30px;\n\n    background-image: url(",");\n\n    background-color: var(--ascent-text-color);\n  }\n  @media screen and (min-width: 1280px) {\n    width: 393px;\n    min-height: 331px;\n    border-radius: 30px;\n    margin: 0;\n\n    background-image: url(",");\n\n    background-color: var(--ascent-text-color);\n  }\n"])),"data:image/png;base64,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","data:image/png;base64,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","data:image/png;base64,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"),y=c.ZP.table(a||(a=(0,P.Z)(["\n  font-family: var(--primary-font-family);\n  color: var(--primary-white-color);\n  text-align: center;\n\n  @media screen and (min-width: 320px) {\n    width: 280px;\n  }\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 393px;\n\n    thead tr th {\n      text-align: center;\n    }\n  }\n\n  border-collapse: collapse;\n\n  thead th:first-child {\n    border-top-left-radius: 30px;\n  }\n\n  thead th:last-child {\n    border-top-right-radius: 30px;\n  }\n\n  thead tr th {\n    background-color: var(--ascent-text-color2);\n    line-height: 50px;\n    width: calc(100% / 3);\n  }\n\n  tbody tr td {\n    vertical-align: top;\n    line-height: 50px;\n  }\n\n  tbody tr:last-child td {\n    height: 20px;\n    line-height: 20px;\n    background-color: transparent;\n    border: none;\n  }\n"]))),L=n(5053),Z=n(9690),X=n(9434),u=n(184),H=function(){var t=(0,p.useState)(null),e=(0,l.Z)(t,2),n=e[0],r=e[1],a=(0,X.v9)(L.xU);return(0,p.useEffect)((function(){var t=function(){var t=(0,f.Z)((0,v.Z)().mark((function t(){var e;return(0,v.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s();case 3:return e=t.sent,r(e.data),t.abrupt("return");case 8:t.prev=8,t.t0=t.catch(0);case 10:return t.prev=10,t.finish(10);case 12:case"end":return t.stop()}}),t,null,[[0,8,10,12]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,u.jsx)(R,{children:a?(0,u.jsx)(Z.Z,{}):(0,u.jsxs)(y,{children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"Currency"}),(0,u.jsx)("th",{children:"Purchase"}),(0,u.jsx)("th",{children:"Sale"})]})}),(0,u.jsx)("tbody",{children:n&&n.map((function(t,e){var n=t.currencyCodeA.toString(),r=b[n];return!b[n]||978===t.currencyCodeA&&840===t.currencyCodeB?console.log():(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:r}),(0,u.jsx)("td",{children:t.rateBuy.toFixed(2)}),(0,u.jsx)("td",{children:t.rateSell.toFixed(2)})]},e)}))})]})})}}}]);
//# sourceMappingURL=138.478a0956.chunk.js.map