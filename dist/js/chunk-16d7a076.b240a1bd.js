(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16d7a076"],{"1dde":function(t,r,o){var a=o("d039"),e=o("b622"),n=o("60ae"),i=e("species");t.exports=function(t){return n>=51||!a((function(){var r=[],o=r.constructor={};return o[i]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},5899:function(t,r){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,r,o){var a=o("1d80"),e=o("5899"),n="["+e+"]",i=RegExp("^"+n+n+"*"),c=RegExp(n+n+"*$"),s=function(t){return function(r){var o=String(a(r));return 1&t&&(o=o.replace(i,"")),2&t&&(o=o.replace(c,"")),o}};t.exports={start:s(1),end:s(2),trim:s(3)}},"65f0":function(t,r,o){var a=o("861d"),e=o("e8b5"),n=o("b622"),i=n("species");t.exports=function(t,r){var o;return e(t)&&(o=t.constructor,"function"!=typeof o||o!==Array&&!e(o.prototype)?a(o)&&(o=o[i],null===o&&(o=void 0)):o=void 0),new(void 0===o?Array:o)(0===r?0:r)}},7156:function(t,r,o){var a=o("861d"),e=o("d2bb");t.exports=function(t,r,o){var n,i;return e&&"function"==typeof(n=r.constructor)&&n!==o&&a(i=n.prototype)&&i!==o.prototype&&e(t,i),t}},8418:function(t,r,o){"use strict";var a=o("c04e"),e=o("9bf2"),n=o("5c6c");t.exports=function(t,r,o){var i=a(r);i in t?e.f(t,i,n(0,o)):t[i]=o}},a092:function(t,r,o){"use strict";o.r(r);var a=function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",{staticClass:"detalleProducto"},[o("div",{staticClass:"container-fluid"},[o("header",{staticStyle:{background:"#c5c5c5"}},[o("img",{staticClass:"vuelogo",attrs:{alt:"Vue logo",src:"/img/logo.png"}}),o("nav",[o("i",{staticClass:"fas fa-bars",attrs:{id:"menu-icon"}}),o("ul",[o("li",{staticStyle:{"list-style":"none",display:"inline"}}),o("li",[o("router-link",{attrs:{to:"/compras"}},[o("i",{staticClass:"fas fa-cart-arrow-down",staticStyle:{color:"#000000"}})])],1),o("li",{staticStyle:{"list-style":"none",display:"inline"}}),o("li",[o("router-link",{staticStyle:{color:"#000000"},attrs:{to:"/cuentaUsuario"}},[t._v("Regresar")])],1),o("li",{staticStyle:{"list-style":"none",display:"inline"}}),o("li",[o("a",{staticStyle:{color:"#000000"},attrs:{href:"/"},on:{click:t.cerrarSesion}},[t._v("Cerrar Sesión")])]),o("li",{staticStyle:{"list-style":"none",display:"inline"}})])])])]),o("div",{staticClass:"container main-container"},[o("h1",[t._v("Descripción del producto")]),o("div",{staticClass:"col-md-6"},[o("form",{on:{submit:function(r){return r.preventDefault(),t.listarProducto()}}},[t._m(0),o("p",{attrs:{"v-model":t.compra.idProducto}},[t._v(t._s(t.productoMostrar._id))]),o("p",[t._v(t._s(t.productoMostrar.nombre))]),o("p",[t._v("L. "+t._s(t.productoMostrar.precio))]),o("p",[t._v(t._s(t.productoMostrar.descripcion))]),o("label",{staticStyle:{"margin-right":"20px"},attrs:{for:""}},[t._v("Cantidad:")]),o("div",{staticClass:"input-contact"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.compra.cantidad,expression:"compra.cantidad"}],attrs:{type:"number",id:"cantidad",name:"cantidad"},domProps:{value:t.compra.cantidad},on:{input:function(r){r.target.composing||t.$set(t.compra,"cantidad",r.target.value)}}})]),o("label",{attrs:{for:""}},[t._v("Total")]),o("div",{staticClass:"input-contact"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.totalValor,expression:"totalValor"}],attrs:{id:"total",type:"number",name:"total"},domProps:{value:t.totalValor},on:{input:function(r){r.target.composing||(t.totalValor=r.target.value)}}})])]),o("div"),o("div",{staticClass:"acciones"},[o("router-link",{staticClass:"btnEditar",attrs:{to:"/editarProducto/"+t.productoMostrar._id}},[t._v("Editar")]),o("button",{staticStyle:{"margin-right":"20px"},attrs:{type:"submit"},on:{click:function(r){return t.eliminarProducto(t.productoMostrar._id)}}},[t._v(" Eliminar ")]),o("button",{attrs:{type:"submit"},on:{click:function(r){return t.agregarCompra()}}},[t._v("Agregar")])],1)])])])},e=[function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",[o("img",{staticClass:"imagenProducto",attrs:{src:"https://www.maxmovil.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/c/o/comprar_samsung_galaxy_s10_negro.jpg",alt:"producto"}})])}],n=(o("c740"),o("a434"),o("a9e3"),{data:function(){return{producto:[],mostrar:!1,productoMostrar:{},compras:[],compra:{idProducto:"",cantidad:0,totalValor:0}}},created:function(){this.listarProducto()},methods:{listarProducto:function(){var t=this,r=this.$route.params.id;this.axios.get("/mostrarProducto/"+r).then((function(r){console.log(r.data),t.productoMostrar=r.data})).catch((function(t){console.log(t.response)}))},eliminarProducto:function(t){var r=this;this.axios.delete("/eliminarProducto/".concat(t)).then((function(t){var o=r.producto.findIndex((function(r){return r._id===t.data._id}));r.producto.splice(o,1)})).catch((function(t){})),this.$router.push("/cuentaUsuario")},cerrarSesion:function(t){var r=this;axios.get("/cerrarSesion").then((function(){r.$router.push("/")}))},agregarCompra:function(){var t=this;this.axios.post("/compra",this.compra).then((function(r){t.compras.push(r.data)})),this.$router.push("/cuentaUsuario")},showAlert:function(){this.$swal({type:"success",title:"Tu producto ha sido agregado"})}},computed:{totalValor:function(){return Number(this.compra.cantidad)*Number(this.productoMostrar.precio)}}}),i=n,c=o("2877"),s=Object(c["a"])(i,a,e,!1,null,null,null);r["default"]=s.exports},a434:function(t,r,o){"use strict";var a=o("23e7"),e=o("23cb"),n=o("a691"),i=o("50c4"),c=o("7b0b"),s=o("65f0"),u=o("8418"),l=o("1dde"),d=Math.max,f=Math.min,p=9007199254740991,m="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!l("splice")},{splice:function(t,r){var o,a,l,v,h,g,b=c(this),y=i(b.length),_=e(t,y),x=arguments.length;if(0===x?o=a=0:1===x?(o=0,a=y-_):(o=x-2,a=f(d(n(r),0),y-_)),y+o-a>p)throw TypeError(m);for(l=s(b,a),v=0;v<a;v++)h=_+v,h in b&&u(l,v,b[h]);if(l.length=a,o<a){for(v=_;v<y-a;v++)h=v+a,g=v+o,h in b?b[g]=b[h]:delete b[g];for(v=y;v>y-a+o;v--)delete b[v-1]}else if(o>a)for(v=y-a;v>_;v--)h=v+a-1,g=v+o-1,h in b?b[g]=b[h]:delete b[g];for(v=0;v<o;v++)b[v+_]=arguments[v+2];return b.length=y-a+o,l}})},a9e3:function(t,r,o){"use strict";var a=o("83ab"),e=o("da84"),n=o("94ca"),i=o("6eeb"),c=o("5135"),s=o("c6b6"),u=o("7156"),l=o("c04e"),d=o("d039"),f=o("7c73"),p=o("241c").f,m=o("06cf").f,v=o("9bf2").f,h=o("58a8").trim,g="Number",b=e[g],y=b.prototype,_=s(f(y))==g,x=function(t){var r,o,a,e,n,i,c,s,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=h(u),r=u.charCodeAt(0),43===r||45===r){if(o=u.charCodeAt(2),88===o||120===o)return NaN}else if(48===r){switch(u.charCodeAt(1)){case 66:case 98:a=2,e=49;break;case 79:case 111:a=8,e=55;break;default:return+u}for(n=u.slice(2),i=n.length,c=0;c<i;c++)if(s=n.charCodeAt(c),s<48||s>e)return NaN;return parseInt(n,a)}return+u};if(n(g,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var I,N=function(t){var r=arguments.length<1?0:t,o=this;return o instanceof N&&(_?d((function(){y.valueOf.call(o)})):s(o)!=g)?u(new b(x(r)),o,N):x(r)},w=a?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;w.length>A;A++)c(b,I=w[A])&&!c(N,I)&&v(N,I,m(b,I));N.prototype=y,y.constructor=N,i(e,g,N)}},b727:function(t,r,o){var a=o("f8c2"),e=o("44ad"),n=o("7b0b"),i=o("50c4"),c=o("65f0"),s=[].push,u=function(t){var r=1==t,o=2==t,u=3==t,l=4==t,d=6==t,f=5==t||d;return function(p,m,v,h){for(var g,b,y=n(p),_=e(y),x=a(m,v,3),I=i(_.length),N=0,w=h||c,A=r?w(p,I):o?w(p,0):void 0;I>N;N++)if((f||N in _)&&(g=_[N],b=x(g,N,y),t))if(r)A[N]=b;else if(b)switch(t){case 3:return!0;case 5:return g;case 6:return N;case 2:s.call(A,g)}else if(l)return!1;return d?-1:u||l?l:A}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},c740:function(t,r,o){"use strict";var a=o("23e7"),e=o("b727").findIndex,n=o("44d2"),i="findIndex",c=!0;i in[]&&Array(1)[i]((function(){c=!1})),a({target:"Array",proto:!0,forced:c},{findIndex:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),n(i)},e8b5:function(t,r,o){var a=o("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}}}]);
//# sourceMappingURL=chunk-16d7a076.b240a1bd.js.map