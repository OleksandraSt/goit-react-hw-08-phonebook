"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[912],{7912:function(n,e,t){t.r(e),t.d(e,{PhonebookForm:function(){return tn},default:function(){return rn}});var r,o,a,i,u=t(9439),c=t(2791),s=t(168),l=t(7402),p=l.Z.form(r||(r=(0,s.Z)(["\n  border: 1px solid #bbb3b3;\n  border-radius: 5px;\n  width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 40px;\n  background-color: #e4eba1;\n"]))),f=l.Z.label(o||(o=(0,s.Z)(["\n  display: flex;\n  flex-flow: column wrap;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 2;\n  font-size: 20px;\n  color: #2a2a2a;\n  margin-bottom: 30px;\n"]))),d=l.Z.input(a||(a=(0,s.Z)(["\n  width: 350px;\n  height: 25px;\n  color: #2a2a2a;\n  background-color: #eaf7c1;\n  border: 1px solid #bbb3b3;\n  border-radius: 3px;\n  margin: auto;\n"]))),m=l.Z.button(i||(i=(0,s.Z)(["\n  width: 130px;\n  height: 40px;\n  text-transform: uppercase;\n  background-color: #4ec6ef;\n  color: #eaf7c1;\n  cursor: pointer;\n  border: 1px solid #4ec6ef;\n  border-radius: 3px;\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 30px;\n"]))),h=t(9434),x=t(208),b="NOT_FOUND";var g=function(n,e){return n===e};function v(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?g:r,a=t.maxSize,i=void 0===a?1:a,u=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),s=1===i?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:b},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return b}return{get:r,put:function(e,o){r(e)===b&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,c);function l(){var e=s.get(arguments);if(e===b){if(e=n.apply(null,arguments),u){var t=s.getEntries(),r=t.find((function(n){return u(n.value,e)}));r&&(e=r.value)}s.put(arguments,e)}return e}return l.clearCache=function(){return s.clear()},l}function y(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function Z(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var a,i=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=u,l=s.memoizeOptions,p=void 0===l?t:l,f=Array.isArray(p)?p:[p],d=y(r),m=n.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(f)),h=n((function(){for(var n=[],e=d.length,t=0;t<e;t++)n.push(d[t].apply(null,arguments));return a=m.apply(null,n)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:m,dependencies:d,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return o}var w,j,k,C,z,A,E,F,S,q,I,L=Z(v),N=function(n){return n.contacts.items},O=function(n){return n.contacts.isLoading},_=function(n){return n.contacts.error},P=function(n){return n.filter},D=L([N,P],(function(n,e){var t=e.trim().toLowerCase();return n.filter((function(n){return n.name.trim().toLowerCase().includes(t)}))})),R=t(184),T=function(){var n=(0,c.useState)(""),e=(0,u.Z)(n,2),t=e[0],r=e[1],o=(0,c.useState)(""),a=(0,u.Z)(o,2),i=a[0],s=a[1],l=(0,h.v9)(N),b=function(n){var e=n.target,t=e.name,o=e.value;switch(t){case"name":r(o);break;case"number":s(o);break;default:throw new Error("There is no such option")}},g=(0,h.I0)();return(0,R.jsxs)(p,{onSubmit:function(n){n.preventDefault();var e=l.some((function(n){return n.name.toLowerCase()===t.toLowerCase()})),o=l.some((function(n){return n.number===i}));if(e)alert("".concat(t," is alredy in contacts"));else if(o)alert("".concat(i," is alredy in contacts"));else{var a=(0,x.uK)({name:t,number:i});g(a),r(""),s("")}},children:[(0,R.jsxs)(f,{children:["Name",(0,R.jsx)(d,{type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:b})]}),(0,R.jsxs)(f,{children:["Number",(0,R.jsx)(d,{type:"tel",name:"number",value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:b})]}),(0,R.jsx)(m,{type:"submit",children:"Add contact"})]})},K=l.Z.label(w||(w=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  text-transform: uppercase;\n  font-weight: 700;\n  line-height: 2;\n  font-size: 20px;\n  color: #2a2a2a;\n  margin-bottom: 30px;\n"]))),B=l.Z.input(j||(j=(0,s.Z)(["\n  width: 350px;\n  height: 25px;\n  color: #2a2a2a;\n  background-color: #eaf7c1;\n  border: 1px solid #bbb3b3;\n  border-radius: 3px;\n  margin: auto;\n"]))),G=t(6895),J=function(){var n=(0,h.I0)(),e=(0,h.v9)(P);return(0,R.jsxs)(K,{children:["Find contacts by name",(0,R.jsx)(B,{type:"text",value:e,onChange:function(e){n((0,G.T)(e.target.value))}})]})},M=l.Z.div(k||(k=(0,s.Z)(["\n  justify-content: center;\n  text-align: center;\n  background-color: rgb(181, 219, 218);\n"]))),U=l.Z.h1(C||(C=(0,s.Z)(["\n  color: #2a2a2a;\n  font-size: 50px;\n  margin: 0;\n  margin-bottom: 20px;\n  text-transform: uppercase;\n"]))),$=l.Z.h2(z||(z=(0,s.Z)(["\n  color: #2a2a2a;\n  font-size: 35px;\n  margin: 0;\n  margin-bottom: 20px;\n  text-transform: uppercase;\n"]))),H=l.Z.div(A||(A=(0,s.Z)(["\n  color: rgb(94, 84, 57);\n  font-size: 35px;\n  margin: 0;\n  margin-bottom: 20px;\n  text-transform: uppercase;\n"]))),Q=l.Z.div(E||(E=(0,s.Z)(["\n  margin-top: 30px;\n  padding-bottom: 30px;\n"]))),V=l.Z.ul(F||(F=(0,s.Z)(["\n  width: 500px;\n  margin: auto auto 20px;\n  padding: 0;\n"]))),W=l.Z.li(S||(S=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  border: 1px solid #bbb3b3;\n  background-color: #e4eba1;\n  justify-content: space-between;\n  padding: 0px 15px;\n"]))),X=l.Z.p(q||(q=(0,s.Z)(["\n  margin: 0;\n  padding: 15px;\n  font-size: 20px;\n  color: #2a2a2a;\n"]))),Y=l.Z.button(I||(I=(0,s.Z)(["\n  width: 75px;\n  height: 25px;\n  text-align: center;\n  justify-content: center;\n  background-color: #4ec6ef;\n  border: 1px solid #4ec6ef;\n  border-radius: 3px;\n  cursor: pointer;\n  color: #eaf7c1;\n  font-weight: 700;\n"]))),nn=function(n){var e=n.id,t=n.name,r=n.number,o=(0,h.I0)();return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(X,{children:[t,": ",r]}),(0,R.jsx)(Y,{onClick:function(){return o((0,x.GK)(e))},children:"Delete"})]})},en=function(){var n=(0,h.v9)(D);return(0,R.jsx)(V,{children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,R.jsx)(W,{children:(0,R.jsx)(nn,{id:e,name:t,phone:r})},e)}))})},tn=function(){var n=(0,h.I0)(),e=(0,h.v9)(O),t=(0,h.v9)(_),r=(0,h.v9)(N);return(0,c.useEffect)((function(){n((0,x.yF)())}),[n]),(0,R.jsxs)(M,{children:[(0,R.jsx)(U,{children:"Phonebook"}),(0,R.jsxs)(Q,{children:[" ",(0,R.jsx)(T,{}),(0,R.jsxs)("div",{children:[" ",(0,R.jsx)($,{children:"Contacts"}),(0,R.jsx)(J,{}),r.length>0&&(0,R.jsx)(en,{}),0===r.length&&!e&&!t&&(0,R.jsx)(H,{children:"Phonebook is empty"})]})]})]})},rn=tn}}]);
//# sourceMappingURL=912.354651a8.chunk.js.map