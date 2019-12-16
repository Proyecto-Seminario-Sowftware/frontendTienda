<template>
  <div class="compras">
    <div class="container-fluid">
      <!-- box-header -->
      <header style="background: #c5c5c5;">
        <img class="vuelogo" alt="Vue logo" src="img/logo.png" />

        <nav>
          <i id="menu-icon" class="fas fa-bars"></i>

          <ul>
            <li style="list-style: none; display: inline"></li>
            <li>
              <router-link to="/cuentaUsuario" style="color: #000000;"
                >Regresar</router-link
              >
            </li>
            <li style="list-style: none; display: inline"></li>
            <li>
              <router-link
                v-on:click="cerrarSesion()"
                to="/"
                style="color: #000000;"
                >Cerrar Sesión</router-link
              >
            </li>
            <li style="list-style: none; display: inline"></li>
          </ul>
        </nav>
      </header>
      <!-- end box-header -->
    </div>
    <div class="container main-container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Total</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in compras" :key="index">
            <td>{{ item.producto.nombre }}</td>
            <td>{{ item.producto.precio }}</td>
            <td>{{ item.cantidad }}</td>
            <td>L. {{ item.total }}</td>

            <td>
              <b-button
                v-on:click="showAlert"
                type="submit"
                @click="eliminarCompra(item._id)"
                >Eliminar</b-button
              >
            </td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td>Total:</td>
            <td name="totalFinal">L. {{ totalFinal }}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      compras: {}
    };
  },
  created() {
    this.listarCompras();
  },
  methods: {
    listarCompras() {
      this.axios
        .get("/mostrarCompras")
        .then(res => {
          console.log(res.data);
          this.compras = res.data;
        })
        .catch(e => {
          console.log(e.response);
        });
    },
    // Eliminar compra
    // Metodo para eliminar el producto
    eliminarCompra(id) {
      this.axios
        .delete(`/eliminarCompras/${id}`)
        .then(res => {
          const index = this.compras.findIndex(
            compras => compras._id === res.data._id
          );
          this.producto.splice(index, 1);
        })
        .catch(e => {});
      this.$router.push("/compras");
    },
    // Metodo de cerrar
    cerrarSesion: function(e) {
      axios.get("/cerrarSesion").then(() => {
        this.$router.push("/");
      });
    },
    showAlert() {
      this.$swal({
        type: "success",
        title: "Compra Eliminada"
      });
    }
  },
  computed: {
    totalFinal: function() {
      return this.compras.reduce(function(sum, item) {
        return sum + item.total;
      }, 0);
    }
  }
};
</script>
