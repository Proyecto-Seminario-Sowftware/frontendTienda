(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7161faeb"],{"65f0":function(t,r,e){var i=e("861d"),o=e("e8b5"),a=e("b622"),n=a("species");t.exports=function(t,r){var e;return o(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)?i(e)&&(e=e[n],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===r?0:r)}},b727:function(t,r,e){var i=e("f8c2"),o=e("44ad"),a=e("7b0b"),n=e("50c4"),c=e("65f0"),s=[].push,d=function(t){var r=1==t,e=2==t,d=3==t,u=4==t,l=6==t,p=5==t||l;return function(f,m,v,h){for(var g,b,y=a(f),E=o(y),x=i(m,v,3),w=n(E.length),_=0,P=h||c,C=r?P(f,w):e?P(f,0):void 0;w>_;_++)if((p||_ in E)&&(g=E[_],b=x(g,_,y),t))if(r)C[_]=b;else if(b)switch(t){case 3:return!0;case 5:return g;case 6:return _;case 2:s.call(C,g)}else if(u)return!1;return l?-1:d||u?u:C}};t.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6)}},c740:function(t,r,e){"use strict";var i=e("23e7"),o=e("b727").findIndex,a=e("44d2"),n="findIndex",c=!0;n in[]&&Array(1)[n]((function(){c=!1})),i({target:"Array",proto:!0,forced:c},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),a(n)},e8b5:function(t,r,e){var i=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},fd53:function(t,r,e){"use strict";e.r(r);var i=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"editarProducto"}},[e("div",{staticClass:"container-fluid"},[e("header",{staticStyle:{background:"#c5c5c5"}},[e("img",{staticClass:"vuelogo",attrs:{alt:"Vue logo",src:"/img/logo.png"}}),e("nav",[e("i",{staticClass:"fas fa-bars",attrs:{id:"menu-icon"}}),e("ul",[e("li",{staticStyle:{"list-style":"none",display:"inline"}}),e("li",[e("router-link",{staticStyle:{color:"#000000"},attrs:{to:"/detalleProducto/"+t.productoEditar._id}},[t._v("Regresar")])],1),e("li",{staticStyle:{"list-style":"none",display:"inline"}}),e("li",[e("a",{staticStyle:{color:"#000000"},attrs:{href:"/"},on:{click:t.cerrarSesion}},[t._v("Cerrar Sesión")])]),e("li",{staticStyle:{"list-style":"none",display:"inline"}})])])])]),e("div",{staticClass:"container main-container"},[e("h1",[t._v("Editar Producto")]),e("div",{staticClass:"col-md-6"},[e("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(r){return r.preventDefault(),t.editar(t.productoEditar)}}},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"imagenProducto"},[e("label",{attrs:{for:""}},[t._v("Imagen:")]),e("input",{ref:"imagen",staticClass:"Imagen",staticStyle:{height:"190px"},attrs:{type:"file",name:"imagen","v-model":t.productoEditar.imagen},on:{change:t.enviarImagen}}),e("img",{attrs:{src:t.productoEditar.imagen,alt:""}})]),e("label",{attrs:{for:""}},[t._v("Nombre del producto:")]),e("div",{staticClass:"input-contact"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.productoEditar.nombre,expression:"productoEditar.nombre"}],attrs:{type:"text",name:"nombre",placeholder:"Escribe el nombre del producto"},domProps:{value:t.productoEditar.nombre},on:{input:function(r){r.target.composing||t.$set(t.productoEditar,"nombre",r.target.value)}}})]),e("label",{attrs:{for:""}},[t._v("Precio:")]),e("div",{staticClass:"input-contact"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.productoEditar.precio,expression:"productoEditar.precio"}],attrs:{type:"number",name:"precio",placeholder:"Escribe el precio del producto"},domProps:{value:t.productoEditar.precio},on:{input:function(r){r.target.composing||t.$set(t.productoEditar,"precio",r.target.value)}}})]),e("label",{attrs:{for:""}},[t._v("Descripción")]),e("div",{staticClass:"textTarea",staticStyle:{width:"0px"}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.productoEditar.descripcion,expression:"productoEditar.descripcion"}],attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:t.productoEditar.descripcion},on:{input:function(r){r.target.composing||t.$set(t.productoEditar,"descripcion",r.target.value)}}})]),e("button",{attrs:{type:"submit"},on:{click:t.showAlert}},[t._v("Editar")])])])])])])},o=[],a=(e("c740"),{data:function(){return{producto:[],file:"",mostrar:!1,productoEditar:{}}},created:function(){this.editarProducto()},methods:{enviarImagen:function(){this.file=this.$refs.imagen.files[0]},editarProducto:function(){var t=this,r=this.$route.params.id;this.axios.get("/mostrarProducto/"+r).then((function(r){console.log(r.data),t.productoEditar=r.data})).catch((function(t){console.log(t.response)}))},editar:function(t){var r=this,e=new FormData;e.append("imagen",this.file),this.axios.post("",e),this.file="";this.$route.params.id;this.axios.put("/actualizarProducto/".concat(t._id),t).then((function(t){var e=r.producto.findIndex((function(r){return r._id===t.data._id}));r.producto[e].nombre=t.data.nombre,r.producto[e].precio=t.data.precio,r.producto[e].descripcion=t.data.descripcion})),this.$router.push("/detalleProducto/"+t._id)},showAlert:function(){this.$swal({type:"success",title:"Producto Editado"})},cerrarSesion:function(t){var r=this;axios.get("/cerrarSesion").then((function(){r.$router.push("/")}))}}}),n=a,c=e("2877"),s=Object(c["a"])(n,i,o,!1,null,null,null);r["default"]=s.exports}}]);
//# sourceMappingURL=chunk-7161faeb.06c08a6e.js.map