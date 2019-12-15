<template>
  <div class="crearProducto">
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
      <h1>Ingresa el nuevo producto</h1>

      <div class="col-md-6">
        <form @submit.prevent="agregarProducto()" enctype="multipart/form-data">
          <!-- Datos del form -->

          <div class="col-md-12">
            <div class="imagenProducto">
              <label for>Imagen:</label>
              <input
                class="Imagen"
                type="file"
                ref="imagen"
                name="imagen"
                @change="enviarImagen"
                style="height:190px;"
                :v-model="producto.imagen"
              />
              <img :src="producto.imagen" alt />
            </div>
            <label for>Nombre del producto:</label>
            <div class="input-contact">
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Escribe el nombre del producto"
                v-model="producto.nombre"
              />
            </div>
            <label for>Precio:</label>
            <div class="input-contact">
              <input
                type="number"
                id="precio"
                name="precio"
                placeholder="Escribe el precio del producto"
                v-model="producto.precio"
              />
            </div>

            <label for>Descripción:</label>
            <div class="textTarea" style="width: 0px;">
              <textarea name id="descripcion" cols="30" rows="8" v-model="producto.descripcion"></textarea>
            </div>
            <div>
              <button v-on:click="showAlert" type="submit">Crear Producto</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productos: [],
      file: "",
      producto: { nombre: "", precio: 0, descripcion: "", imagen: "" }
    };
  },
  methods: {
    enviarImagen() {
      this.file = this.$refs.imagen.files[0];
    },
    agregarProducto() {
      console.log(this.producto);

      const formData = new FormData();
      formData.append("imagen", this.file);
      formData.append("nombre", this.producto.nombre);
      formData.append("precio", this.producto.precio);
      formData.append("descripcion", this.producto.descripcion);

      this.axios.post("/nuevoProducto", formData);
      this.file = "";
      this.$router.push("/cuentaUsuario");
    },
    cerrarSesion: function(e) {
      axios.get("/cerrarSesion").then(() => {
        this.$router.push("/");
      });
    },
    showAlert() {
      this.$swal({
        type: "success",
        title: "Producto Agregado"
      });
    }
  }
};
</script>