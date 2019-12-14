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
              <router-link to="/compras">Compras</router-link>
            </li>

            <li style="list-style: none; display: inline"></li>
            <li>
              <router-link to="/crearProducto">Crear Producto</router-link>
            </li>
            <li style="list-style: none; display: inline"></li>
            <li>
              <a href="/" v-on:click="cerrarSesion">Cerrar Sesión</a>
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

          <div>
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
                <input ref="total" type="number" name="total" />
              </div>
            </form>
          </div>

          <div class="acciones">
            <router-link
              v-bind:to="'/editarProducto/' + productoMostrar._id"
              class="btnEditar"
              >Editar</router-link
            >
            <button
              type="submit"
              @click="eliminarProducto(productoMostrar._id)"
              style="margin-right: 20px;"
            >
              Eliminar
            </button>
            <button type="submit">Agregar</button>
          </div>

          <router-view />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { toASCII } from "punycode";
export default {
  data() {
    return {
      producto: [],
      mostrar: false,
      productoMostrar: {},

      // Agregar un producto a comprar
      compras: [],
      compra: { cantidad: 0, idProducto: "", idUsuario: "", total: 0 }
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
      console.log(this.compra);
      const formData = new FormData();
      this.axios.post("/compra", this.compra, productoMostrar._id).then(res => {
        this.compras.push(res.data);
        this.$$router.push("/cuentaUsuario");
      });
    }
  },
  computed: {
    totalValor: function() {
      return productoMostrar.precio * compra.cantidad;
    }
  }
};
</script>
