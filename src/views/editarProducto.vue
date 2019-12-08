<template>
  <div id="editarProducto">
    <div class="container main-container">
      <h1>Editar Producto</h1>

      <div class="col-md-6">
        <form @submit.prevent="editar(productoEditar)" enctype="multipart/form-data">
          <!-- Datos del form -->
          <div class="col-md-12">
            <label for>Nombre del producto:</label>
            <div class="input-contact">
              <input
                type="text"
                name="nombre"
                placeholder="Escribe el nombre del producto"
                v-model="productoEditar.nombre"
              />
            </div>
            <label for>Precio:</label>
            <div class="input-contact">
              <input
                type="number"
                name="precio"
                placeholder="Escribe el precio del producto"
                v-model="productoEditar.precio"
              />
            </div>
            <label for>Descripción</label>
            <div>
              <textarea name id cols="30" rows="10" v-model="productoEditar.descripcion"></textarea>
            </div>
            <label for>Imagen:</label>
            <div>
              <input type="file" ref="imagen" name="imagen" @change="enviarImagen" />
              <img :src="'/uploads/'+ productoEditar.imagen" />
            </div>
            <button v-on:click="showAlert" type="submit">Editar</button>
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
      producto: [],
      file: "",
      mostrar: false,
      productoEditar: {}
    };
  },
  created() {
    this.editarProducto();
  },
  methods: {
    enviarImagen() {
      this.file = this.$refs.imagen.files[0];
    },
    editarProducto() {
      var id = this.$route.params.id;
      this.axios
        .get("/mostrarProducto/" + id)
        .then(res => {
          console.log(res.data);
          this.productoEditar = res.data;
        })
        .catch(e => {
          console.log(e.response);
        });
    },
    editar(item) {
      const formData = new FormData();
      formData.append("imagen", this.file);
      this.axios.post("", formData);
      this.file = "";
      var idProducto = this.$route.params.id;
      this.axios.put(`/actualizarProducto/${item._id}`, item).then(res => {
        const index = this.producto.findIndex(n => n._id === res.data._id);
        this.producto[index].nombre = res.data.nombre;
        this.producto[index].precio = res.data.precio;
        this.producto[index].descripcion = res.data.descripcion;
      });
      this.$router.push("/detalleProducto/" + item._id);
    },
    showAlert() {
      this.$swal({
        type: "success",
        title: "Producto Editado"
      });
    }
  }
};
</script>


