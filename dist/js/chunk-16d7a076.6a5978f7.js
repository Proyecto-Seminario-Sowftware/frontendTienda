(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16d7a076"],{"1dde":function(t,r,e){var o=e("d039"),a=e("b622"),n=e("60ae"),i=a("species");t.exports=function(t){return n>=51||!o((function(){var r=[],e=r.constructor={};return e[i]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},5899:function(t,r){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,r,e){var o=e("1d80"),a=e("5899"),n="["+a+"]",i=RegExp("^"+n+n+"*"),c=RegExp(n+n+"*$"),s=function(t){return function(r){var e=String(o(r));return 1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(c,"")),e}};t.exports={start:s(1),end:s(2),trim:s(3)}},"65f0":function(t,r,e){var o=e("861d"),a=e("e8b5"),n=e("b622"),i=n("species");t.exports=function(t,r){var e;return a(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)?o(e)&&(e=e[i],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===r?0:r)}},7156:function(t,r,e){var o=e("861d"),a=e("d2bb");t.exports=function(t,r,e){var n,i;return a&&"function"==typeof(n=r.constructor)&&n!==e&&o(i=n.prototype)&&i!==e.prototype&&a(t,i),t}},8418:function(t,r,e){"use strict";var o=e("c04e"),a=e("9bf2"),n=e("5c6c");t.exports=function(t,r,e){var i=o(r);i in t?a.f(t,i,n(0,e)):t[i]=e}},a092:function(t,r,e){"use strict";e.r(r);var o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"detalleProducto"},[e("div",{staticClass:"container-fluid"},[e("header",{staticStyle:{background:"#c5c5c5"}},[e("img",{staticClass:"vuelogo",attrs:{alt:"Vue logo",src:"/img/logo.png"}}),e("nav",[e("i",{staticClass:"fas fa-bars",attrs:{id:"menu-icon"}}),e("ul",[e("li",{staticStyle:{"list-style":"none",display:"inline"}}),e("li",[e("router-link",{attrs:{to:"/compras"}},[e("i",{staticClass:"fas fa-cart-arrow-down",staticStyle:{color:"#000000"}})])],1),e("li",{staticStyle:{"list-style":"none",display:"inline"}}),e("li",[e("router-link",{staticStyle:{color:"#000000"},attrs:{to:"/cuentaUsuario"}},[t._v("Regresar")])],1),e("li",{staticStyle:{"list-style":"none",display:"inline"}}),e("li",[e("a",{staticStyle:{color:"#000000"},attrs:{href:"/"},on:{click:t.cerrarSesion}},[t._v("Cerrar Sesión")])]),e("li",{staticStyle:{"list-style":"none",display:"inline"}})])])])]),e("div",{staticClass:"container main-container"},[e("h1",[t._v("Descripción del producto")]),e("div",{staticClass:"col-md-6"},[e("form",{on:{submit:function(r){return r.preventDefault(),t.listarProducto()}}},[t._m(0),e("p",[t._v(t._s(t.productoMostrar.nombre))]),e("p",[t._v("L. "+t._s(t.productoMostrar.precio))]),e("p",[t._v(t._s(t.productoMostrar.descripcion))])]),e("div",[e("form",{on:{submit:function(r){return r.preventDefault(),t.agregarCompra()}}},[e("label",{staticStyle:{"margin-right":"20px"},attrs:{for:""}},[t._v("Cantidad:")]),e("div",{staticClass:"input-contact"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.compra.cantidad,expression:"compra.cantidad"}],ref:"cantidad",attrs:{type:"number",id:"cantidad",name:"cantidad"},domProps:{value:t.compra.cantidad},on:{input:function(r){r.target.composing||t.$set(t.compra,"cantidad",r.target.value)}}})]),e("label",{attrs:{for:""}},[t._v("Total")]),e("div",{staticClass:"input-contact"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.totalValor,expression:"totalValor"}],ref:"total",attrs:{id:"total",type:"number",name:"total"},domProps:{value:t.totalValor},on:{input:function(r){r.target.composing||(t.totalValor=r.target.value)}}})])])]),e("div",{staticClass:"acciones"},[e("router-link",{staticClass:"btnEditar",attrs:{to:"/editarProducto/"+t.productoMostrar._id}},[t._v("Editar")]),e("button",{staticStyle:{"margin-right":"20px"},attrs:{type:"submit"},on:{click:function(r){return t.eliminarProducto(t.productoMostrar._id)}}},[t._v("Eliminar")]),e("button",{attrs:{type:"submit"},on:{click:t.showAlert}},[t._v("Agregar")])],1)])])])},a=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("img",{staticClass:"imagenProducto",attrs:{src:"https://www.maxmovil.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/c/o/comprar_samsung_galaxy_s10_negro.jpg",alt:"producto"}})])}],n=(e("c740"),e("a434"),e("a9e3"),{data:function(){return{producto:[],mostrar:!1,productoMostrar:{},cantidad:0,compras:[],compra:{cantidad:0,idProducto:"",total:0}}},created:function(){this.listarProducto()},methods:{listarProducto:function(){var t=this,r=this.$route.params.id;this.axios.get("/mostrarProducto/"+r).then((function(r){console.log(r.data),t.productoMostrar=r.data})).catch((function(t){console.log(t.response)}))},eliminarProducto:function(t){var r=this;this.axios.delete("/eliminarProducto/".concat(t)).then((function(t){var e=r.producto.findIndex((function(r){return r._id===t.data._id}));r.producto.splice(e,1)})).catch((function(t){})),this.$router.push("/cuentaUsuario")},cerrarSesion:function(t){var r=this;axios.get("/cerrarSesion").then((function(){r.$router.push("/")}))},agregarCompra:function(t){axios.post("/compra",{obj:this.compra}).then((function(t){console.log(t)})),this.$router.push("/cuentaUsuario")},showAlert:function(){this.$swal({type:"success",title:"Tu producto ha sido agregado"})}},computed:{totalValor:function(){return Number(this.compra.cantidad)*Number(this.productoMostrar.precio)}}}),i=n,c=e("2877"),s=Object(c["a"])(i,o,a,!1,null,null,null);r["default"]=s.exports},a434:function(t,r,e){"use strict";var o=e("23e7"),a=e("23cb"),n=e("a691"),i=e("50c4"),c=e("7b0b"),s=e("65f0"),u=e("8418"),l=e("1dde"),d=Math.max,f=Math.min,p=9007199254740991,m="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!l("splice")},{splice:function(t,r){var e,o,l,v,h,g,b=c(this),y=i(b.length),_=a(t,y),x=arguments.length;if(0===x?e=o=0:1===x?(e=0,o=y-_):(e=x-2,o=f(d(n(r),0),y-_)),y+e-o>p)throw TypeError(m);for(l=s(b,o),v=0;v<o;v++)h=_+v,h in b&&u(l,v,b[h]);if(l.length=o,e<o){for(v=_;v<y-o;v++)h=v+o,g=v+e,h in b?b[g]=b[h]:delete b[g];for(v=y;v>y-o+e;v--)delete b[v-1]}else if(e>o)for(v=y-o;v>_;v--)h=v+o-1,g=v+e-1,h in b?b[g]=b[h]:delete b[g];for(v=0;v<e;v++)b[v+_]=arguments[v+2];return b.length=y-o+e,l}})},a9e3:function(t,r,e){"use strict";var o=e("83ab"),a=e("da84"),n=e("94ca"),i=e("6eeb"),c=e("5135"),s=e("c6b6"),u=e("7156"),l=e("c04e"),d=e("d039"),f=e("7c73"),p=e("241c").f,m=e("06cf").f,v=e("9bf2").f,h=e("58a8").trim,g="Number",b=a[g],y=b.prototype,_=s(f(y))==g,x=function(t){var r,e,o,a,n,i,c,s,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=h(u),r=u.charCodeAt(0),43===r||45===r){if(e=u.charCodeAt(2),88===e||120===e)return NaN}else if(48===r){switch(u.charCodeAt(1)){case 66:case 98:o=2,a=49;break;case 79:case 111:o=8,a=55;break;default:return+u}for(n=u.slice(2),i=n.length,c=0;c<i;c++)if(s=n.charCodeAt(c),s<48||s>a)return NaN;return parseInt(n,o)}return+u};if(n(g,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var I,N=function(t){var r=arguments.length<1?0:t,e=this;return e instanceof N&&(_?d((function(){y.valueOf.call(e)})):s(e)!=g)?u(new b(x(r)),e,N):x(r)},w=o?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;w.length>A;A++)c(b,I=w[A])&&!c(N,I)&&v(N,I,m(b,I));N.prototype=y,y.constructor=N,i(a,g,N)}},b727:function(t,r,e){var o=e("f8c2"),a=e("44ad"),n=e("7b0b"),i=e("50c4"),c=e("65f0"),s=[].push,u=function(t){var r=1==t,e=2==t,u=3==t,l=4==t,d=6==t,f=5==t||d;return function(p,m,v,h){for(var g,b,y=n(p),_=a(y),x=o(m,v,3),I=i(_.length),N=0,w=h||c,A=r?w(p,I):e?w(p,0):void 0;I>N;N++)if((f||N in _)&&(g=_[N],b=x(g,N,y),t))if(r)A[N]=b;else if(b)switch(t){case 3:return!0;case 5:return g;case 6:return N;case 2:s.call(A,g)}else if(l)return!1;return d?-1:u||l?l:A}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},c740:function(t,r,e){"use strict";var o=e("23e7"),a=e("b727").findIndex,n=e("44d2"),i="findIndex",c=!0;i in[]&&Array(1)[i]((function(){c=!1})),o({target:"Array",proto:!0,forced:c},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n(i)},e8b5:function(t,r,e){var o=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}}}]);
//# sourceMappingURL=chunk-16d7a076.6a5978f7.js.map