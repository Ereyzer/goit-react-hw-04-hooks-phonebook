(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={Form:"ContactForm_Form__2HicR",AddBtn:"ContactForm_AddBtn__2xKH-",Item:"ContactForm_Item__3OaPX",Label:"ContactForm_Label__2AU9F",Input:"ContactForm_Input__2rnoM"}},20:function(t,e,n){t.exports={Button:"ContactList_Button__KTNUk",Item:"ContactList_Item__gX1q6",Text:"ContactList_Text__179V0"}},21:function(t,e,n){t.exports={Label:"Filter_Label__386LO",Input:"Filter_Input__3EdFu",Item:"Filter_Item__2hsYa"}},34:function(t,e,n){},35:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(9),o=n.n(a),s=(n(34),n(35),n(18)),i=n(15),u=n.n(i),l=n(61),b=n(8),j=(n(24),n(60)),m=n(12),d=Object(m.b)("contacts/addContact",(function(t){var e=t.name,n=t.number;return{payload:{id:Object(l.a)(),name:e,number:n}}})),O=Object(m.b)("contacts/filter"),f=Object(m.b)("contacts/deleteContact"),h=n(14),p=n(2);var x=Object(h.b)((function(t){return{items:t.contacts.items}}),(function(t){return{onSubmit:function(e){return t(d(e))},clearFilter:function(){return t(O(""))}}}))((function(t){var e=t.items,n=t.onSubmit,r=t.clearFilter,a=Object(c.useRef)(Object(l.a)()),o=Object(c.useRef)(Object(l.a)()),i=Object(c.useState)(""),m=Object(s.a)(i,2),d=m[0],O=m[1],f=Object(c.useState)(""),h=Object(s.a)(f,2),x=h[0],_=h[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("form",{className:u.a.Form,onSubmit:function(t){t.preventDefault(),""!==d.trim()&&""!==x.trim()?e.some((function(t){return t.name===d}))?b.b.error(d+" is already exist"):(r(),n({name:d,number:x}),b.b.success("you have new contact"),O(""),_("")):b.b.info("fill in all fields")},children:[Object(p.jsx)("label",{htmlFor:a.current,className:u.a.Label,children:"Name"}),Object(p.jsx)("input",{id:a.current,className:u.a.Input,type:"text",name:"name",value:d,onChange:function(t){return O(t.target.value)}}),Object(p.jsx)("label",{htmlFor:o.current,className:u.a.Label,children:"Number"}),Object(p.jsx)("input",{id:o.current,className:u.a.Input,type:"tel",name:"number",value:x,onChange:function(t){return _(t.target.value)}}),Object(p.jsx)("div",{className:u.a.AddBtn,children:Object(p.jsx)(j.a,{type:"submit",variant:"contained",color:"primary",children:"Add contact"})})]}),Object(p.jsx)(b.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(p.jsx)(b.a,{})]})})),_=n(20),v=n.n(_);function g(t){var e=t.items,n=t.filter;return""===n?e:e.filter((function(t){var e=t.name;return function(t,e){var n=e.slice(0,t.length);return t.toLowerCase()===n.toLowerCase()}(n,e)}))}var C=Object(h.b)((function(t){return{contacts:g(t.contacts)}}),(function(t){return{onDeleteElement:function(e){var n=e.id,c=e.name;return b.b.info(c+" is deleted"),t(f(n))}}}))((function(t){var e=t.contacts,n=t.onDeleteElement;return Object(p.jsx)("ul",{children:e.map((function(t){var e=t.name,c=t.number,r=t.id;return Object(p.jsx)("li",{children:Object(p.jsxs)("div",{className:v.a.Item,children:[Object(p.jsxs)("p",{className:v.a.Text,children:[e,": ",Object(p.jsx)("span",{children:c})]}),Object(p.jsx)("button",{type:"button",className:v.a.Button,onClick:function(){return n({id:r,name:e})},children:"Delete"})]})},r)}))})})),F=n(21),L=n.n(F);var I=Object(h.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(O("".concat(e.target.value.trim())))}}}))((function(t){var e=t.filter,n=t.onChange,c=r.a.useRef(Object(l.a)());return Object(p.jsxs)("div",{className:L.a.Item,children:[Object(p.jsx)("label",{className:L.a.Label,htmlFor:c.current,children:"Find contacts by name"}),Object(p.jsx)("input",{className:L.a.Input,id:c.current,value:e,onChange:n})]})}));function N(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(x,{}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(I,{}),Object(p.jsx)(C,{}),Object(p.jsx)(b.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(p.jsx)(b.a,{})]})}var k,y=n(26),w=n(10),B=n(7),T=n(4),A={items:[],filter:""},S=Object(m.c)(A.items,(k={},Object(B.a)(k,d,(function(t,e){var n=e.payload;return[].concat(Object(w.a)(t),[n])})),Object(B.a)(k,f,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),k)),D=Object(m.c)(A.filter,Object(B.a)({},O,(function(t,e){return e.payload}))),E=Object(T.b)({items:S,filter:D}),H=n(27),P=n.n(H),R=n(28),J=n.n(R),K=n(13),M={key:"List",storage:J.a,blackList:["filter"]},U=Object(m.a)({reducer:{contacts:Object(K.g)(M,E)},middleware:function(t){return[].concat(Object(w.a)(t({serializableCheck:{ignoredActions:[K.a,K.f,K.b,K.c,K.d,K.e]}})),[P.a])},devTools:!1}),X={store:U,persistor:Object(K.h)(U)};o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(h.a,{store:X.store,children:Object(p.jsx)(y.a,{loading:null,persistor:X.persistor,children:Object(p.jsx)(N,{})})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.773138da.chunk.js.map