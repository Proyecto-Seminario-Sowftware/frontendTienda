<template>
  <div class="detalleProducto">
    <div class="container-fluid">
      <!-- box-header -->
      <header style="background: #c5c5c5;">
        <img class="vuelogo" alt="Vue logo" src="/img/logo.png" />

        <nav>
          <i id="menu-icon" class="fas fa-bars"></i>

          <ul>
            <li style="list-style: none; display: inline"></li>
            <li>
              <router-link to="/compras">
                <i class="fas fa-cart-arrow-down" style="color: #000000;"></i>
              </router-link>
            </li>
            <li style="list-style: none; display: inline"></li>
            <li>
              <router-link to="/cuentaUsuario" style="color: #000000;">Regresar</router-link>
            </li>

            <li style="list-style: none; display: inline"></li>
            <li>
              <a href="/" v-on:click="cerrarSesion" style="color: #000000;">Cerrar Sesión</a>
            </li>
            <li style="list-style: none; display: inline"></li>
          </ul>
        </nav>
      </header>
      <!-- end box-header -->
    </div>

    <div class="container main-container">
      <h1>Descripción del producto</h1>

      <div class="col-md-6">
        <form @submit.prevent="listarProducto()">
          <div>
            <img
              src="https://www.maxmovil.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/c/o/comprar_samsung_galaxy_s10_negro.jpg"
              alt="producto"
              class="imagenProducto"
            />
          </div>

          <p>{{ productoMostrar.nombre }}</p>

          <p>L. {{ productoMostrar.precio }}</p>

          <p>{{ productoMostrar.descripcion }}</p>
        </form>
        <div>
          <!-- Formulario de agregar una compra -->
          <form @submit.prevent="agregarCompra()">
            <label for style="margin-right:20px;">Cantidad:</label>
            <div class="input-contact">
              <input
                ref="cantidad"
                type="number"
                id="cantidad"
                name="cantidad"
                v-model="compra.cantidad"
              />
            </div>
            <label for>Total</label>
            <div class="input-contact">
              <input id="total" ref="total" type="number" name="total" v-model="totalValor" />
            </div>
          </form>
        </div>
        <div class="acciones">
          <!-- Boton de editar -->
          <router-link v-bind:to="'/editarProducto/' + productoMostrar._id" class="btnEditar">Editar</router-link>
          <!-- Boton de eliminar -->
          <button
            type="submit"
            @click="eliminarProducto(productoMostrar._id)"
            style="margin-right: 20px;"
          >Eliminar</button>
          <!-- Boton de agregar compra producto -->
          <button v-on:click="showAlert" type="submit">Agregar</button>
        </div>
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
      productoMostrar: {},
      cantidad: 0,

      // Agregar un producto a comprar
      compras: [],
      compra: { cantidad: 0, idProducto: "", total: 0 }
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
    },
    // Metodo de cerrar
    cerrarSesion: function(e) {
      axios.get("/cerrarSesion").then(() => {
        this.$router.push("/");
      });
    },

    // Metodo para agregar una compra
    agregarCompra() {
      var id = this.$route.params.id;
      const data = new FormData();
      data.append("cantidad", this.compra.cantidad);
      data.append("total", this.totalValor);
      this.axios.post("/compra", data);
      this.$router.push("/cuentaUsuario");
    },
    showAlert() {
      this.$swal({
        type: "success",
        title: "Tu producto ha sido agregado"
      });
    }
  },
  computed: {
    totalValor: function() {
      return Number(this.compra.cantidad) * Number(this.productoMostrar.precio);
    }
  }
};
</script>
