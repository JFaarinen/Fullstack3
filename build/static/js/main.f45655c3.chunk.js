(window.webpackJsonppuhelinluettelo=window.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),a=n(13),u=n.n(a),l=n(2),c=function(e){var t=e.henkilo,n=e.poisto,i=t.id;return o.a.createElement("li",null,t.nimi,", ",t.puh," ",o.a.createElement("button",{onClick:function(){return n({id:i})}},"Poista"))},r=function(e){var t=e.henkilot,n=e.hakuEhto,i=e.poisto;return n.length>0?t.filter((function(e){return e.nimi.toLowerCase().includes(n.toLowerCase())})).map((function(e){return o.a.createElement(c,{key:e.id,henkilo:e,poisto:i})})):t.map((function(e){return o.a.createElement(c,{key:e.id,henkilo:e,poisto:i})}))},s=n(3),m=n.n(s),f="/api/Henkilot",d=function(){return m.a.get(f)},h=function(e){return m.a.post(f,e)},p=function(e){var t=e.id;return m.a.delete(f+"/"+t)},v=function(e){return m.a.put(f+"/"+e.id,e)},E=function(e){var t=e.viesti;return null===t?null:o.a.createElement("div",{className:"ilmoitus"},t)},k=(n(36),function(e){var t=Object(i.useState)([]),n=Object(l.a)(t,2),a=n[0],u=n[1],c=Object(i.useState)(""),s=Object(l.a)(c,2),m=s[0],f=s[1],k=Object(i.useState)(""),g=Object(l.a)(k,2),b=g[0],j=g[1],w=Object(i.useState)(""),O=Object(l.a)(w,2),y=O[0],C=O[1],S=Object(i.useState)(null),T=Object(l.a)(S,2),L=T[0],N=T[1];Object(i.useEffect)((function(){d().then((function(e){console.log("Henkil\xf6tiedot noudettu"),u(e.data)}))}),[]);var H=function(){d().then((function(e){u(e.data)}))};return o.a.createElement("div",null,o.a.createElement("h2",null,"Puhelinmuistio"),o.a.createElement("div",null,"Hae yhteystiedoista: ",o.a.createElement("input",{value:y,onChange:function(e){console.log(e.target.value),C(e.target.value)}})),o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=a.filter((function(e){return e.nimi===m}));if(t.length>0){if(window.confirm("Nimi ".concat(m," on jo luettelossa, p\xe4ivitet\xe4\xe4nk\xf6 tiedot?"))){var n={nimi:t[0].nimi,numero:b,id:t[0].id};v(n).then((function(e){H(),N("Henkil\xf6n ".concat(m," tiedot p\xe4ivitetty")),setTimeout((function(){N(null)}),5e3)})).catch((function(e){N("Virhe: henkil\xf6 poistettu"),setTimeout((function(){N(null)}),5e3)}))}}else h({nimi:m,puh:b}).then((function(e){H(),N("Lis\xe4tty ".concat(m," ").concat(b)),setTimeout((function(){N(null)}),5e3)})).catch((function(e){console.log(e.response.data),N("Virhe: ".concat(e.response.data.error)),setTimeout((function(){N(null)}),5e3)}));f(""),j("")}},o.a.createElement("h3",null,"Lis\xe4\xe4 yhteystieto"),o.a.createElement("div",null,"Nimi:   ",o.a.createElement("input",{value:m,onChange:function(e){console.log(e.target.value),f(e.target.value)}})),o.a.createElement("div",null,"Numero: ",o.a.createElement("input",{value:b,onChange:function(e){console.log(e.target.value),j(e.target.value)}})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"Lis\xe4\xe4"))),o.a.createElement(E,{viesti:L}),o.a.createElement("h3",null,"Numerot"),o.a.createElement("ul",null,o.a.createElement(r,{henkilot:a,hakuEhto:y,poisto:function(e){var t=e.id;window.confirm("Poistetaanko henkil\xf6n tiedot?")&&(p({id:t}).then((function(e){H()})),N("Tiedot poistettu"),setTimeout((function(){N(null)}),5e3))}})))});u.a.render(o.a.createElement(k,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f45655c3.chunk.js.map