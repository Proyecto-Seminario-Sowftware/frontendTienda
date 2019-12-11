<template>
  <div class="iniciarSesion">
    <div class="container main-container">
      <div class="col-md-6">
        <form v-on:submit="login">
          <div>
            <h1>Iniciar Sesión</h1>
          </div>

          <div class="col-md-12">
            <label for>Correo Electronico</label>
            <div class="input-contact">
              <input type="email" name="email" placeholder="Ingresa tu correo electronico" />
            </div>

            <label for>Contraseña</label>
            <div class="input-contact">
              <input type="password" name="password" placeholder="Ingresa tu contraseña" />
            </div>

            <button value="Login">Iniciar Sesión</button>

            <router-link to="/crearCuenta">No tienes cuenta Registrate</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import router from "../router";
import axios from "axios";
import { log } from "util";

export default {
  name: "Login",
  methods: {
    login: e => {
      e.preventDefault();
      let email = e.target.elements.email.value;
      let password = e.target.elements.password.value;

      let login = () => {
        let data = {
          email: email,
          password: password
        };

        axios
          .post("/login", data)
          .then(response => {
            console.log("Haz iniciado sesion");
            router.push("/cuentaUsuario");
          })
          .catch(erros => {
            console.log("No has inicado sesion");
          });
      };
      login();
    }
  }
};
</script>