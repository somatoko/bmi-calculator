(this["webpackJsonpbmi-calculator"]=this["webpackJsonpbmi-calculator"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(5),r=a.n(l),i=(a(11),a(12),a(13),a(1)),u=a(2),o=a(3),s=function(e){var t=e.name,a=e.type,n=e.title,l=e.value,r=e.onChange;return c.a.createElement("div",{className:"input-groups"},c.a.createElement("span",{className:"label"},n),c.a.createElement("div",{className:"range-container"},c.a.createElement("input",{type:a,name:t,className:"range-input",value:l,onChange:r,autoComplete:"false"})))},m=function(e){var t=e.updateBmi,a=Object(n.useState)(""),l=Object(i.a)(a,2),r=l[0],m=l[1],f=Object(n.useState)(""),v=Object(i.a)(f,2),b=v[0],h=v[1],p=Object(n.useState)(""),E=Object(i.a)(p,2),g=E[0],d=E[1],C=Object(n.useState)({heightCount:"0",inchesCount:"0",weightCount:"0"}),N=Object(i.a)(C,2),O=N[0],j=N[1],w=O.heightCount,y=O.inchesCount,M=O.weightCount;Object(n.useEffect)((function(){switch(g){case"":d("Metric");break;case"Metric":m("cm"),h("kg");break;case"Imperial":m("ft"),h("lbs")}}),[g]);Object(n.useEffect)((function(){!function(e,a){if(e>0&&a>0){var n=e/100,c=a/Math.pow(n,2);t(Math.round(c))}}(w,M),function(e,a,n){if(e>0&&a>0&&n>0){var c=12*e+parseInt(n),l=a/(c*c)*703;t(Math.round(l))}}(w,M,y)}),[w,M,y]);var I=function(e){var t=e.target,a=t.name,n=t.value;j((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(u.a)({},a,n))}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"bmi-inputs"},c.a.createElement("div",{className:"input-fields"},c.a.createElement("div",null,c.a.createElement("span",{className:"label-unit"},"Unit"),c.a.createElement("div",{className:"unit"},c.a.createElement("select",{className:"form-control form-control-sm",name:"unit",value:g,onChange:function(e){var t=e.target.value;d(t)}},c.a.createElement("option",{value:"Metric"},"Metric"),c.a.createElement("option",{value:"Imperial"},"Imperial")))),c.a.createElement(s,{type:"text",name:"heightCount",title:"Height (".concat(r,")"),value:w,onChange:I}),"Imperial"===g&&c.a.createElement(s,{type:"text",name:"inchesCount",title:"Height (in)",value:y,onChange:I}),c.a.createElement(s,{type:"text",name:"weightCount",title:"Weight (".concat(b,")"),value:M,onChange:I})),c.a.createElement("button",{className:"button",type:"submit",onClick:function(e){e.preventDefault(),d("Metric"),t(0),j({heightCount:"0",inchesCount:"0",weightCount:"0"})}},"Reset")))},f=function(){var e,t=Object(n.useState)(0),a=Object(i.a)(t,2),l=a[0],r=a[1],u=(e=l)>=1&&e<=18.5?"Underweight":e>18.5&&e<=24.9?"Normal Weight":e>24.9&&e<=29.9?"Overweight":e>=30?"Obese":void 0,o="";return l>0&&u&&(o=u.split(" ")[0].toLowerCase()),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"calculator",style:{backgroundColor:function(e){return e>=1&&e<=18.5?"#fed88b":e>18.5&&e<=24.9?"#80ff80":e>24.9&&e<=29.9?"#ff7f50":e>=30?"#ff5411":void 0}(l)}},c.a.createElement("h3",null,"Body Mass Index Calculator"),c.a.createElement("div",{className:"bmi-result-container"},c.a.createElement("div",{className:"bmi-result"},c.a.createElement("div",{className:"bmi-result-number"},"Body Mass Index (BMI) = ",l),c.a.createElement("div",{className:"bmi-category ".concat(o)},u))),c.a.createElement(m,{updateBmi:r})))};var v=function(){return c.a.createElement("div",{className:"App container"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-lg-6 col-lg-offset-3"},c.a.createElement(f,null))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.b3529d24.chunk.js.map