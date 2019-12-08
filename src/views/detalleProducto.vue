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