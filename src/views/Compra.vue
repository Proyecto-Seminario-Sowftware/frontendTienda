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
              <router-link to="/cuentaUsuario" style="color: #000000;">Regresar</router-link>
            </li>
            <li style="list-style: none; display: inline"></li>
            <li>
              <router-link v-on:click="cerrarSesion()" to="/" style="color: #000000;">Cerrar Sesión</router-link>
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
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in compras" :key="index">
            <td>{{item.compra[index.nombre]}}</td>
            <td>{{item.compra[index.precio]}}</td>
            <td>{{item.compra[index.cantidad]}}</td>
            <td>L. {{item.total}}</td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td>Total:</td>
            <td name="totalFinal">L. {{totalFinal}}</td>
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
    // Metodo de cerrar
    cerrarSesion: function(e) {
      axios.get("/cerrarSesion").then(() => {
        this.$router.push("/");
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