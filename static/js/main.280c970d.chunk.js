(this["webpackJsonpmy-form"]=this["webpackJsonpmy-form"]||[]).push([[0],{11:function(e,n,c){},12:function(e,n,c){},14:function(e,n,c){"use strict";c.r(n);var s=c(1),t=c(6),a=c.n(t),i=(c(11),c(2)),j=c(4),r=c(5),l=(c(12),c(0));var b=function(){var e=Object(s.useState)({nickname:"",email:"",mobile:"",signUpType:"",howToKnow:"",feedback:""}),n=Object(r.a)(e,2),c=n[0],t=n[1],a=Object(s.useState)(""),b=Object(r.a)(a,2),o=b[0],d=b[1],m=function(e){t(Object(j.a)(Object(j.a)({},c),{},Object(i.a)({},e.target.name,e.target.value)))},O=c.nickname,h=c.email,p=c.mobile,x=c.signUpType,u=c.howToKnow,g=c.feedback,v=o.nicknameMsg,f=o.emailMsg,w=o.mobileMsg,N=o.signUpTypeMsg,y=o.howToKnowMsg;return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsxs)("main",{children:[Object(l.jsx)("h1",{children:"\u65b0\u62d6\u5ef6\u904b\u52d5\u5831\u540d\u8868\u55ae"}),Object(l.jsxs)("div",{className:"event-info",children:[Object(l.jsx)("p",{className:"info",children:"\u6d3b\u52d5\u65e5\u671f\uff1a2020/12/10 ~ 2020/12/11"}),Object(l.jsx)("p",{className:"info",children:"\u6d3b\u52d5\u5730\u9ede\uff1a\u53f0\u5317\u5e02\u5927\u5b89\u5340\u65b0\u751f\u5357\u8def\u4e8c\u6bb51\u865f"})]}),Object(l.jsx)("div",{id:"notice",children:"* \u5fc5\u586b"}),Object(l.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var n="\n    \u5831\u540d\u6210\u529f\uff01\u63d0\u4ea4\u7d50\u679c\uff1a\n    - \u66b1\u7a31\uff1a".concat(O,"\n    - \u96fb\u5b50\u90f5\u4ef6\uff1a").concat(h,"\n    - \u624b\u6a5f\u865f\u78bc\uff1a").concat(p,"\n    - \u5831\u540d\u985e\u578b\uff1a").concat(x,"\n    - \u5982\u4f55\u77e5\u9053\u6d3b\u52d5\uff1a").concat(u,"\n    - \u5176\u4ed6\uff1a").concat(g);(function(){var e={},n=!0;return""===O.trim()&&(n=!1,e.nicknameMsg="\u8acb\u586b\u5beb\u540d\u7a31\uff01"),/^([\w]+)(.[\w]+)*@([\w]+)(.[\w]{2,3}){1,2}$/.test(h)||(n=!1,e.emailMsg="\u8acb\u586b\u5beb\u6b63\u78ba\u4fe1\u7bb1\uff01"),/^09[0-9]{8}$/.test(p)||(n=!1,e.mobileMsg="\u8acb\u586b\u5beb\u6b63\u78ba\u624b\u6a5f\u865f\u78bc\uff01"),""===x&&(n=!1,e.signUpTypeMsg="\u8acb\u9078\u64c7\u5831\u540d\u985e\u578b\uff01"),""===u.trim()&&(n=!1,e.howToKnowMsg="\u8acb\u586b\u5beb\u5167\u5bb9\uff01"),d(e),n})()&&alert(n)},children:[Object(l.jsxs)("div",{className:"question",children:["\u66b1\u7a31",Object(l.jsx)("span",{children:" *"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",placeholder:"\u60a8\u7684\u56de\u7b54",className:"answer",name:"nickname",value:O,onChange:function(e){return m(e)}}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:v})]}),Object(l.jsxs)("div",{className:"question",children:["\u96fb\u5b50\u90f5\u4ef6",Object(l.jsx)("span",{children:" *"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"email",placeholder:"\u60a8\u7684\u96fb\u5b50\u90f5\u4ef6",className:"answer",name:"email",value:h,onChange:function(e){return m(e)}}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:f})]}),Object(l.jsxs)("div",{className:"question",children:["\u624b\u6a5f\u865f\u78bc",Object(l.jsx)("span",{children:" *"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"tel",placeholder:"\u60a8\u7684\u624b\u6a5f\u865f\u78bc",className:"answer",name:"mobile",value:p,onChange:function(e){return m(e)}}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:w})]}),Object(l.jsxs)("div",{className:"question",children:["\u5831\u540d\u985e\u578b",Object(l.jsx)("span",{children:" *"}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"radio",children:[Object(l.jsx)("input",{type:"radio",name:"signUpType",id:"bed",value:"\u8eba\u5728\u5e8a\u4e0a\u7528\u60f3\u50cf\u529b\u5be6\u4f5c",onChange:function(e){return m(e)}}),Object(l.jsx)("label",{htmlFor:"bed",children:"\u8eba\u5728\u5e8a\u4e0a\u7528\u60f3\u50cf\u529b\u5be6\u4f5c"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"radio",name:"signUpType",id:"floor",value:"\u8db4\u5728\u5730\u4e0a\u6ed1\u624b\u6a5f\u627e\u73fe\u6210\u7684",onChange:function(e){return m(e)}}),Object(l.jsx)("label",{htmlFor:"floor",children:"\u8db4\u5728\u5730\u4e0a\u6ed1\u624b\u6a5f\u627e\u73fe\u6210\u7684"}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:N})]})]}),Object(l.jsxs)("div",{className:"question",children:["\u600e\u9ebc\u77e5\u9053\u9019\u500b\u6d3b\u52d5\u7684\uff1f",Object(l.jsx)("span",{children:" *"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",placeholder:"\u60a8\u7684\u56de\u7b54",className:"answer",name:"howToKnow",value:u,onChange:function(e){return m(e)}}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:y})]}),Object(l.jsxs)("div",{className:"question",children:["\u5176\u4ed6",Object(l.jsx)("p",{children:"\u5c0d\u6d3b\u52d5\u7684\u4e00\u4e9b\u5efa\u8b70"}),Object(l.jsx)("input",{type:"text",placeholder:"\u60a8\u7684\u56de\u7b54",className:"answer",name:"feedback",value:g,onChange:function(e){return m(e)}})]}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"submit",className:"submit"})}),Object(l.jsx)("p",{children:"\u8acb\u52ff\u900f\u904e\u8868\u55ae\u9001\u51fa\u60a8\u7684\u5bc6\u78bc\u3002"})]})]})}),Object(l.jsx)("footer",{children:Object(l.jsx)("div",{className:"rights",children:"\xa9 2020 \xa9 Copyright. All rights Reserved."})})]})};a.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.280c970d.chunk.js.map