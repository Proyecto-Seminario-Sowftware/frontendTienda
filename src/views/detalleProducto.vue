<template>
  <div id="detalleProducto">
    <div class="container main-container">
      <h1>Descripción del producto</h1>

      <div class="col-md-6">
        <form @submit.prevent="listarProducto()">
          <input v-model="productoMostrar.nombre" />
          <p v-show="productoMostrar.nombre"></p>
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
    }
  }
};
</script>