(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99dc6f00"],{"13d5":function(t,r,n){"use strict";var o=n("23e7"),a=n("d58f").left,e=n("b301");o({target:"Array",proto:!0,forced:e("reduce")},{reduce:function(t){return a(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"5b40":function(t,r,n){"use strict";n.r(r);var o=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"compras"},[n("div",{staticClass:"container-fluid"},[n("header",{staticStyle:{background:"#c5c5c5"}},[n("img",{staticClass:"vuelogo",attrs:{alt:"Vue logo",src:"img/logo.png"}}),n("nav",[n("i",{staticClass:"fas fa-bars",attrs:{id:"menu-icon"}}),n("ul",[n("li",{staticStyle:{"list-style":"none",display:"inline"}}),n("li",[n("router-link",{staticStyle:{color:"#000000"},attrs:{to:"/cuentaUsuario"}},[t._v("Regresar")])],1),n("li",{staticStyle:{"list-style":"none",display:"inline"}}),n("li",[n("router-link",{staticStyle:{color:"#000000"},attrs:{to:"/"},on:{click:function(r){return t.cerrarSesion()}}},[t._v("Cerrar Sesión")])],1),n("li",{staticStyle:{"list-style":"none",display:"inline"}})])])])]),n("div",{staticClass:"container main-container"},[n("table",{staticClass:"table"},[t._m(0),n("tbody",[t._l(t.compras,(function(r,o){return n("tr",{key:o},[n("td",[t._v(t._s(r.compra[0].producto.nombre))]),n("td",[t._v("L. "+t._s(r.compra[0].producto.precio))]),n("td",[t._v(t._s(r.compra[0].cantidad))]),n("td",[t._v("L. "+t._s(r.total))]),n("td")])})),n("tr",[n("td"),n("td"),n("td",[t._v("Total:")]),n("td",{attrs:{name:"totalFinal"}},[t._v("L. "+t._s(t.totalFinal))])])],2)])])])},a=[function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("Producto")]),n("th",{attrs:{scope:"col"}},[t._v("Precio")]),n("th",{attrs:{scope:"col"}},[t._v("Cantidad")]),n("th",{attrs:{scope:"col"}},[t._v("Total")])])])}],e=(n("13d5"),{data:function(){return{compras:{}}},created:function(){this.listarCompras()},methods:{listarCompras:function(){var t=this;this.axios.get("/mostrarCompras").then((function(r){console.log(r.data),t.compras=r.data})).catch((function(t){console.log(t.response)}))},cerrarSesion:function(t){var r=this;axios.get("/cerrarSesion").then((function(){r.$router.push("/")}))}},computed:{totalFinal:function(){return this.compras.reduce((function(t,r){return t+r.total}),0)}}}),i=e,s=n("2877"),c=Object(s["a"])(i,o,a,!1,null,null,null);r["default"]=c.exports},b301:function(t,r,n){"use strict";var o=n("d039");t.exports=function(t,r){var n=[][t];return!n||!o((function(){n.call(null,r||function(){throw 1},1)}))}},d58f:function(t,r,n){var o=n("1c0b"),a=n("7b0b"),e=n("44ad"),i=n("50c4"),s=function(t){return function(r,n,s,c){o(n);var l=a(r),u=e(l),d=i(l.length),f=t?d-1:0,p=t?-1:1;if(s<2)while(1){if(f in u){c=u[f],f+=p;break}if(f+=p,t?f<0:d<=f)throw TypeError("Reduce of empty array with no initial value")}for(;t?f>=0:d>f;f+=p)f in u&&(c=n(c,u[f],f,l));return c}};t.exports={left:s(!1),right:s(!0)}}}]);
//# sourceMappingURL=chunk-99dc6f00.718cfe22.js.map