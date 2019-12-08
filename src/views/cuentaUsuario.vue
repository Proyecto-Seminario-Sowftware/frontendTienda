<template>
  <div id="cuentaUsuario">
    <div class="main-container portfolio-inner clearfix">
      <!-- portfolio div -->
      <div class="portfolio-div">
        <div class="portfolio">
          <!-- portfolio_filter -->
          <div class="categories-grid wow fadeInLeft">
            <nav class="categories text-center">
              <ul class="portfolio_filter">
                <li>
                  <router-link to="/crearProducto">Crear Producto</router-link>
                </li>
                <li>
                  <a href v-on:click="cerrarSesion">Cerrar Sesión</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <main>
      <div class="lista-producto contenedor">
        <div class="producto" v-for="(item, index) in productos" :key="index">
          <img :src="item.imagen" alt="imagen" />
          <div class="texto">
            <p class="contenido">{{item.nombre}}</p>
            <p class="contenido">L. {{item.precio}}</p>
          </div>
          <router-link v-bind:to="'/detalleProducto/'+ item._id">Ver</router-link>
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
      mostrar: false
    };
  },
  created() {
    this.listarProductos();
  },
  methods: {
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
    cerrarSesion: function(e) {
      axios.get("/cerrarSesion").then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>