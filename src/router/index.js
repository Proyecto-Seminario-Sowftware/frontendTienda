import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    // Ruta de iniciar sesion
    path: "/iniciarSesion",
    name: "iniciarSesion",
    component: () => import("../views/IniciarSesion.vue")
  },
  {
    // Ruta para crear cuenta al usuario
    path: "/crearCuenta",
    name: "crearCuenta",
    component: () => import("../views/CrearCuenta.vue")
  },
  {
    path: "/cuentaUsuario",
    name: "cuentaUsuario",
    component: () => import("../views/cuentaUsuario.vue")
  },
  {
    path: "/crearProducto",
    name: "crearProducto",
    component: () => import("../views/crearProducto.vue")
  },
  {
    path: "/detalleProducto/:id",
    name: "detalleProducto",
    component: () => import("../views/detalleProducto.vue")
  },
  {
    path: "/editarProducto/:id",
    name: "editarProducto",
    component: () => import("../views/editarProducto.vue")
  },
  {
    path: "/compras",
    name: "compras",
    component: () => import("../views/Compra.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
