<template>
  <div id="detalleProducto">
    <div class="container main-container">
      <h1>Descripción del producto</h1>

      <div class="col-md-6">
        <form @submit.prevent="listarProducto()">
          <br />
          <p>{{productoMostrar.nombre}}</p>
          <br />
          <p>L. {{productoMostrar.precio}}</p>
          <br />
          <p>{{productoMostrar.descripcion}}</p>
          <img :src="productoMostrar.imagen" alt="producto" />

          <div class="acciones">
            <router-link v-bind:to="'/editarProducto/'+productoMostrar._id">Editar</router-link>
          </div>
          <button type="submit" @click="eliminarProducto(productoMostrar._id)">Eliminar</button>
          <div></div>
          <router-view />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      producto: [],
      mostrar: false,
      productoMostrar: {}
    };
  },
  created() {
    this.listarProducto();
  },
  methods: {
    // Listar el producto
    listarProducto() {
      var id = this.$route.params.id;
      this.axios
        .get("/mostrarProducto/" + id)
        .then(res => {
          console.log(res.data);
          this.productoMostrar = res.data;
        })
        .catch(e => {
          console.log(e.response);
        });
    },
    // Metodo para eliminar el producto
    eliminarProducto(id) {
      this.axios
        .delete(`/eliminarProducto/${id}`)
        .then(res => {
          const index = this.producto.findIndex(
            productoMostrar => productoMostrar._id === res.data._id
          );
          this.producto.splice(index, 1);
        })
        .catch(e => {});
      this.$router.push("/cuentaUsuario");
    }
  }
};
</script>