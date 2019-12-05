<template>
  <div id="crearCuenta">
    <div class="container main-container">
      <div class="col-md-6">
        <!-- Formulario para crear un nuevo usuario -->
        <form @submit.prevent="agregarUsuario()">
          <div>
            <h1>Crea Tu Cuenta</h1>
          </div>

          <div class="col-md-12">
            <label for>Nombre de usuario</label>
            <div class="input-contact">
              <input
                type="text"
                name="nombre"
                placeholder="Ingresa tu nombre de usuario"
                v-model="usuario.nombre"
              />
            </div>
            <label for>Correo Electronico</label>

            <div class="input-contact">
              <input
                type="email"
                name="email"
                placeholder="Ingresa tu correo electronico"
                v-model="usuario.email"
              />
            </div>

            <label for>Contraseña</label>
            <div class="input-contact">
              <input
                type="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                v-model="usuario.password"
              />
            </div>

            <button v-on:click="showAlert" type="submit">Crear usuario</button>
          </div>
        </form>
        <!-- Final de la etiqueta form -->
      </div>
    </div>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import { log } from "util";
import router from "../router";

export default {
  data() {
    return {
      usuarios: [],
      usuario: { nombre: "", email: "", password: "" },
      agregar: true
    };
  },
  methods: {
    agregarUsuario() {
      // console.log(this.usuario);

      this.axios
        .post("/nuevoUsuario", this.usuario)
        .then(res => {
          this.usuarios.push(res.data);
          this.usuario.nombre = "";
          this.usuario.email = "";
          this.usuario.password = "";
        })
        .catch(e => {});
    },
    showAlert() {
      this.$swal({
        icon: "success",
        title: "Tus datos han sido registrados"
      });
    }
  }
};
</script>