"use strict";(self.webpackChunkwallet_team_project_client_side=self.webpackChunkwallet_team_project_client_side||[]).push([[89],{7089:function(e,r,n){n.r(r),n.d(r,{default:function(){return b}});var s=n(9439),a=n(2791),t=n(7689),i=n(5048),l=n(8007),o=n(5705),c=n(6555),d=n(761),u=n.n(d),m=n(184),h=function(e){var r=e.password,n=u()(r),s=100*n.score/4,a=function(){switch(n.score){case 0:return"#828282";case 1:return"#EA1111";case 2:return"#FFAD00";case 3:return"#9bc158";case 4:return"var(--greenblue)";default:return"none"}};return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:"progress",style:{height:"5px"},children:(0,m.jsx)("div",{className:"progress-bar",style:{width:"".concat(s,"%"),background:a(),height:"5px"}})})})},x=n(4878),p=n(7335),j=n(5985),w=n(4545),f=function(){var e=(0,i.I0)(),r=(0,t.s0)(),n=(0,a.useState)(""),d=(0,s.Z)(n,2),u=d[0],f=d[1],g=(0,a.useState)(!1),v=(0,s.Z)(g,2),b=v[0],y=v[1],Z=(0,a.useState)(!1),P=(0,s.Z)(Z,2),_=P[0],C=P[1],S=l.Ry().shape({email:l.Z_().email().required(),password:l.Z_().min(6,"must be at least 6 characters").matches(/^(?=.*[A-Za-z])(?=.*\d).{6,}$/,"must contain 1  letter, and 1 number").required(),confirmPassword:l.Z_().oneOf([l.iH("password"),null],"passwords need to be the same").required(),name:l.Z_().min(3,"must min length 3").max(30,"must max length 30").required()});return(0,m.jsx)(o.J9,{initialValues:{email:"",password:"",confirmPassword:"",name:""},validationSchema:S,onSubmit:function(r,n){var s=n.resetForm,a=r.email,t=r.password,i=r.name,l=e(w.ZP.register({email:a,password:t,name:i}));l.error&&409===l.payload?j.Am.error("was registered before"):l.error?j.Am.error("Something went wrong! Please, try again"):s()},children:function(e){var n=e.handleSubmit,s=e.handleChange,a=e.values;return(0,m.jsx)(p.Yb,{children:(0,m.jsxs)(p.l0,{onSubmit:n,children:[(0,m.jsx)(p.xg,{children:(0,m.jsx)(c.Z,{})}),(0,m.jsxs)(p.lX,{children:[(0,m.jsx)(p.Wi,{type:"email",name:"email",value:a.email,onChange:s,placeholder:"E-mail"}),(0,m.jsx)(p.h,{}),(0,m.jsx)(o.Bc,{name:"email",render:function(e){return(0,m.jsx)(p.y,{children:e})}})]}),(0,m.jsxs)(p.lX,{children:[(0,m.jsx)(p.Wi,{type:b?"text":"password",name:"password",value:a.password,onChange:s,placeholder:"Password",onInput:function(e){return f(e.target.value)}}),(0,m.jsx)(p.wm,{}),(0,m.jsx)(x.Z,{type:"button",setIsRevealPwd:y,isRevealPwd:b}),(0,m.jsx)(o.Bc,{name:"password",render:function(e){return(0,m.jsx)(p.y,{children:e})}})]}),(0,m.jsxs)(p.lX,{children:[(0,m.jsx)(p.Wi,{type:_?"text":"password",name:"confirmPassword",value:a.confirmPassword,onChange:s,placeholder:"Confirm password"}),(0,m.jsx)(p.wm,{}),(0,m.jsx)(x.Z,{type:"button",setIsRevealPwd:C,isRevealPwd:_}),(0,m.jsx)(h,{password:u}),(0,m.jsx)(o.Bc,{name:"confirmPassword",render:function(e){return(0,m.jsx)(p.Ki,{children:e})}})]}),(0,m.jsxs)(p.lX,{children:[(0,m.jsx)(p.Wi,{type:"text",name:"name",value:a.username,onChange:s,placeholder:"First name"}),(0,m.jsx)(p.uH,{}),(0,m.jsx)(o.Bc,{name:"name",render:function(e){return(0,m.jsx)(p.y,{children:e})}})]}),(0,m.jsx)(p.u7,{type:"submit",children:"Register"}),(0,m.jsx)(p.Y8,{type:"button",onClick:function(){r("/login")},children:"Log In"})]})})}})},g=n(4231),v=n(7842),b=function(){return(0,m.jsx)(v.Z,{ImgWrapper:g.gE,children:(0,m.jsx)(f,{})})}}}]);
//# sourceMappingURL=89.51d1987e.chunk.js.map