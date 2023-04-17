"use strict";(self.webpackChunkwallet_team_project_client_side=self.webpackChunkwallet_team_project_client_side||[]).push([[825],{2825:function(n,e,i){i.r(e),i.d(e,{Statistics:function(){return nn},default:function(){return en}});var t,r=i(9439),a=i(5967),l=i(3623),s=i(168),d=i(7691),o=d.ZP.div(t||(t=(0,s.Z)(["\n  width: 280px;\n  height: 280px;\n"]))),c=i(9434),x=i(8860),h=i(184);a.kL.register(a.qi,a.u,a.De,a.Dx);var u,p,m,f,v,Z,j,g,y,b,w,F,D,P,C,E,S=function(n){var e=n.statistic.result.map((function(n){return n.totalSum})),i=(0,c.v9)(x.dy).balance,t={labels:[],datasets:[{label:" Sveta",data:e,backgroundColor:["#FED057","#FFD8D0","#FD9498","#C5BAFF","#6E78E8","#4A56E2","#81E1FF","#24CCA7","#00AD84"],cutout:"70%"}]},r={type:"doughnut",data:t,responsive:!0,plugins:{legend:{display:!0,position:"right",maxWidth:130,maxHeight:160,labels:{boxWidth:20,boxHeight:20,padding:20}}}};return(0,h.jsx)(o,{children:(0,h.jsx)(l.$I,{data:t,options:r,plugins:[{id:"centerText",beforeDatasetsDraw:function(n,e,t){var r,a,l,s,d=n.ctx;d.textAlign="center",d.font='18px "Circe", Helvetica, Arial, sans-serif',d.fillText("\u20b4 "+new Intl.NumberFormat("ru-RU").format(i),null===n||void 0===n||null===(r=n.getDatasetMeta(0))||void 0===r||null===(a=r.data[0])||void 0===a?void 0:a.x,null===n||void 0===n||null===(l=n.getDatasetMeta(0))||void 0===l||null===(s=l.data[0])||void 0===s?void 0:s.y)}}]})})},A=i(2791),k=i(3145),_=i(100),z=i(8096),M=d.ZP.div(u||(u=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n\n  @media screen and (min-width: 767px) {\n    flex-wrap: nowrap;\n  }\n"]))),I=(0,d.ZP)(z.Z)(p||(p=(0,s.Z)(["\n  /* border: 1px solid #000000;\n  border-radius: 30px;\n  height: 50px;\n  width: 280px; */\n"]))),H=(0,d.ZP)(_.Z)(m||(m=(0,s.Z)(["\n  border: 1px solid #000000;\n  border-radius: 30px;\n  height: 50px;\n  width: 280px;\n\n  @media screen and (min-width: 767px) {\n    width: 160px;\n  }\n"]))),J=function(n){var e=n.handleSelect,i=(0,A.useState)("2009"),t=(0,r.Z)(i,2),a=t[0],l=t[1],s=(0,A.useState)("1"),d=(0,r.Z)(s,2),o=d[0],c=d[1],x=function(n){var i=n.target,t=i.name,r=i.value;switch(t){case"year":l(r);break;case"month":c(r)}e({year:a,month:o})};return(0,h.jsxs)(M,{children:[(0,h.jsx)(I,{sx:{m:1},children:(0,h.jsxs)(H,{style:{borderRadius:"30px"},value:o,name:"month",onChange:x,displayEmpty:!0,children:[(0,h.jsx)(k.Z,{value:"",children:(0,h.jsx)("em",{children:"Month"})}),(0,h.jsx)(k.Z,{value:"1",children:"January"}),(0,h.jsx)(k.Z,{value:"2",children:"February"}),(0,h.jsx)(k.Z,{value:"3",children:"March"}),(0,h.jsx)(k.Z,{value:"4",children:"April"}),(0,h.jsx)(k.Z,{value:"5",children:"May"}),(0,h.jsx)(k.Z,{value:"6",children:"June"}),(0,h.jsx)(k.Z,{value:"7",children:"July"}),(0,h.jsx)(k.Z,{value:"8",children:"August"}),(0,h.jsx)(k.Z,{value:"9",children:"September"}),(0,h.jsx)(k.Z,{value:"10",children:"October"}),(0,h.jsx)(k.Z,{value:"11",children:"November"}),(0,h.jsx)(k.Z,{value:"12",children:"December"})]})}),(0,h.jsx)(I,{sx:{m:1},children:(0,h.jsxs)(H,{style:{borderRadius:"30px"},value:a,name:"year",onChange:x,displayEmpty:!0,children:[(0,h.jsx)(k.Z,{value:"",children:(0,h.jsx)("em",{children:"Year"})}),(0,h.jsx)(k.Z,{value:"2009",children:"2009"}),(0,h.jsx)(k.Z,{value:"2010",children:"2010"}),(0,h.jsx)(k.Z,{value:"2011",children:"2011"}),(0,h.jsx)(k.Z,{value:"2012",children:"2012"}),(0,h.jsx)(k.Z,{value:"2013",children:"2013"}),(0,h.jsx)(k.Z,{value:"2014",children:"2014"}),(0,h.jsx)(k.Z,{value:"2015",children:"2015"}),(0,h.jsx)(k.Z,{value:"2016",children:"2016"}),(0,h.jsx)(k.Z,{value:"2017",children:"2017"}),(0,h.jsx)(k.Z,{value:"2018",children:"2018"}),(0,h.jsx)(k.Z,{value:"2019",children:"2019"}),(0,h.jsx)(k.Z,{value:"2020",children:"2020"}),(0,h.jsx)(k.Z,{value:"2021",children:"2021"}),(0,h.jsx)(k.Z,{value:"2022",children:"2022"}),(0,h.jsx)(k.Z,{value:"2023",children:"2023"})]})})]})},R=i(5053),B=i(5638),N=d.ZP.ul(f||(f=(0,s.Z)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  height: 58px;\n  background: #ffffff;\n  border-radius: 30px;\n  margin-bottom: 14px;\n"]))),T=d.ZP.li(v||(v=(0,s.Z)(["\n  font-family: var(--primary-font-family);\n\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.5;\n  color: var(--primary-text-color);\n"]))),W=d.ZP.ul(Z||(Z=(0,s.Z)(["\n  margin-bottom: 14px;\n"]))),q=d.ZP.li(j||(j=(0,s.Z)(["\n  border-bottom: 1px solid #dcdcdf;\n  display: flex;\n  padding: 10px;\n"]))),L=d.ZP.ul(g||(g=(0,s.Z)(["\n  & :not(:last-child) {\n    margin-bottom: 14px;\n  }\n"]))),O=d.ZP.li(y||(y=(0,s.Z)(["\n  font-family: var(--primary-font-family);\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.5;\n  color: var(--primary-text-color);\n"]))),U=d.ZP.p(b||(b=(0,s.Z)(["\n  width: 24px;\n  height: 24px;\n  margin-right: 16px;\n"]))),Y=d.ZP.p(w||(w=(0,s.Z)(["\n  margin-left: auto;\n  font-family: var(--primary-font-family);\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.5;\n  color: var(--primary-text-color);\n"]))),$=d.ZP.p(F||(F=(0,s.Z)(["\n  font-family: var(--primary-font-family);\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.5;\n  color: var(--primary-text-color);\n"]))),G=function(n){var e=n.statistic,i=["#FED057","#FFD8D0","#FD9498","#C5BAFF","#6E78E8","#4A56E2","#81E1FF","#24CCA7","#00AD84"];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(N,{children:[(0,h.jsx)(T,{children:"Category"}),(0,h.jsx)(T,{children:"Sum"})]}),(0,h.jsx)(W,{children:e.result.map((function(n,e){var t=n.totalSum,r=n.category;return(0,h.jsxs)(q,{children:[(0,h.jsx)(U,{style:{backgroundColor:i[e]}}),(0,h.jsx)($,{children:r}),(0,h.jsx)(Y,{children:t})]},e)}))}),(0,h.jsxs)(L,{children:[(0,h.jsx)(O,{children:"Expenses:"}),(0,h.jsx)(O,{children:"Income:"})]})]})},K=d.ZP.div(D||(D=(0,s.Z)(["\n  margin: 0 20px;\n"]))),Q=d.ZP.h2(P||(P=(0,s.Z)(["\n  font-family: var(--primary-font-family);\n  font-weight: 400;\n  font-size: 30px;\n  line-height: 1.5;\n  color: var(--primary-text-color);\n  margin-bottom: 8px;\n"]))),V=d.ZP.div(C||(C=(0,s.Z)(["\n  @media screen and (min-width: 767px) {\n    display: flex;\n    justify-content: center;\n  }\n"]))),X=d.ZP.div(E||(E=(0,s.Z)(["\n  @media screen and (min-width: 767px) {\n    width: 395px;\n  }\n"]))),nn=function(){var n=(0,A.useState)({month:"4",year:"2023"}),e=(0,r.Z)(n,2),i=e[0],t=e[1],a=(0,c.I0)(),l=(0,c.v9)(R.Zr);console.log(l),(0,A.useEffect)((function(){a((0,B.Sy)(i))}),[a,i]);return(0,h.jsxs)(K,{children:[(0,h.jsx)(Q,{children:"Statistics"}),(0,h.jsxs)(V,{children:[(0,h.jsx)(S,{statistic:l}),(0,h.jsxs)(X,{children:[(0,h.jsx)(J,{handleSelect:function(n){t(n)}}),(0,h.jsx)(G,{statistic:l})]})]})]})},en=nn}}]);
//# sourceMappingURL=825.c09445fe.chunk.js.map