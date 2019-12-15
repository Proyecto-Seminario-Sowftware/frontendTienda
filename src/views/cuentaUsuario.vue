<template>
  <div class="cuentaUsuario">
    <div class="container-fluid">
      <!-- box-header -->
      <header style="background: #c5c5c5;">
        <img class="vuelogo" alt="Vue logo" src="img/logo.png" />

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
              <router-link to="/crearProducto" style="color: #000000;">Crear Producto</router-link>
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

    <main>
      <div class="lista-producto contenedor">
        <div class="producto" v-for="(item, index) in productos" :key="index">
          <progressive-img :src="item.imagen" />

          <!-- <img
            src="https://www.maxmovil.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/c/o/comprar_samsung_galaxy_s10_negro.jpg"
            alt
          />-->
          <div class="texto">
            <p class="contenido">{{ item.nombre }}</p>
            <p class="contenido">L. {{ item.precio }}</p>
          </div>
          <router-link v-bind:to="'/detalleProducto/' + item._id" class="btnVer">Ver</router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";
export default {
  data() {
    return {
      productos: [],
      mostrar: false,
      imagenes: ""
    };
  },
  created() {
    this.listarProductos();
  },
  methods: {
    // Metodo de listar todos los productos
    listarProductos() {
      this.axios
        .get("/mostrarProductos")
        .then(res => {
          console.log(res.data);
          this.productos = res.data;
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
    },
    // Mostrar la imagen de la api
    getMoreInfo(step) {
      this.imagenes = "";
      axios({
        method: "get",
        url: "http://localhost:8000/api/mostrarProductos",
        headers: {
          "Content-type": "imagenes/jpeg"
        },
        params: {
          id: step.id
        }
      }).then(response => {
        this.imagenes = "data:imagenes/jpg;base64,".concat(
          this.imagenes.concat(response.data)
        );
      });
    }
  }
};
</script>
