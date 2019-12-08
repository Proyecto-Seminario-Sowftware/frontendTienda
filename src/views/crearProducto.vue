<template>
  <div id="crearProducto">
    <div class="container main-container">
      <h1>Ingresa el nuevo producto</h1>

      <div class="col-md-6">
        <form @submit.prevent="agregarProducto()" enctype="multipart/form-data">
          <!-- Datos del form -->
          <div class="col-md-12">
            <label for>Nombre del producto:</label>
            <div class="input-contact">
              <input
                type="text"
                name="nombre"
                placeholder="Escribe el nombre del producto"
                v-model="producto.nombre"
              />
            </div>
            <label for>Precio:</label>
            <div class="input-contact">
              <input
                type="number"
                name="precio"
                placeholder="Escribe el precio del producto"
                v-model="producto.precio"
              />
            </div>
            <label for>Imagen:</label>
            <div>
              <input type="file" ref="imagen" name="imagen" @change="enviarImagen" />
              <img src="/uploads" class="perfil" />

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
      producto: { nombre: "", precio: 0 }
    };
  },
  methods: {
    enviarImagen() {
      this.file = this.$refs.imagen.files[0];
    },
    agregarProducto() {
      console.log(this.producto);

      this.axios
        .post("/nuevoProducto", this.producto)
        .then(res => {
          this.productos.push(res.data);
          this.producto.nombre = "";
          this.producto.precio = 0;
        })

        .catch(e => {});

      const formData = new FormData();
      formData.append("imagen", this.file);
      this.axios.post("/nuevoProducto", formData);
      this.file = "";
      this.$router.push("/cuentaUsuario");
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