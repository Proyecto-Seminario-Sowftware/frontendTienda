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

    <main>
      <div class="lista-producto contenedor">
        <div class="producto" v-for="(item, index) in productos" :key="index">
          <img :src="item.imagen" alt="imagen" />
          <div class="texto">
            <p class="contenido">{{item.nombre}}</p>
            <p class="contenido">L. {{item.precio}}</p>
          </div>
          <router-link v-bind:to="'/detalleProducto/'+ item._id" class="btnVer">Ver</router-link>
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
      usuario: { nombre: "" }
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
    // Mostrar el usuario autenticado
    mostrarUsuario: function() {
      let self = this.axios
        .get("/usuarioAutencidado")
        .then(res => {
          console.log(res);
          self.$set(this, "nombre", res.data.usuario);
        })
        .catch(err => {
          {
            console.log(err);
            router.push("/");
          }
        });
    }
  }
};
</script>