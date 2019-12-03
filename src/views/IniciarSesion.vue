<template>
  <div id="iniciarSesion">
    <div class="container main-container">
      <div class="col-md-6">
        <form action="#" method="post">
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
              <input type="password" name placeholder="Ingresa tu contraseña" />
            </div>

            <button class="btn btn-box">Iniciar Sesión</button>

            <router-link to="/crearCuenta">
              <p>No tienes cuenta</p>Registrate
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>