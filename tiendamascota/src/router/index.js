import { createRouter, createWebHistory } from "vue-router";


import LoginUsuario from "@/views/LoginUsuario.vue";
import HomePage from "@/views/HomePage.vue";
import RegistroUsuario from "@/views/RegistroUsuario.vue";
import ConfirmacionUsuario from "@/views/ConfirmacionUsuario.vue";
import ConfirmacionProveedor from "@/views/ConfirmacionProveedor.vue";
import DetalleProducto from "@/views/DetalleProducto.vue";
import NotFound from "@/views/NotFound.vue";
import ProductosVarios from "@/views/ProductosVarios.vue";
import RegistroProveedor from "@/views/RegistroProveedor.vue";

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginUsuario
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  { path: '/RegistroUsuario' ,
    name:'registroUsuario', 
    component: RegistroUsuario
  },
    {
      path: '/confirmacionUsuario',
      name: 'ConfirmacionUsuario',
      component: ConfirmacionUsuario
    },
    {
      path: '/Productos',
      name: 'ListaProductos',
      component: ProductosVarios
     
    },
    {
      path: '/Productos/:id',
      name: 'DetalleProducto',
      component: DetalleProducto,
    },
    {
      path: '/*',
      component: NotFound,
    },
    {
      path: '/RegistroProveedor',
      name: 'RegistroProveedor',
      component: RegistroProveedor,
    },
    {
      path: '/ConfirmacionProveedor',
      name: 'ConfirmacionProveedor',
      component: ConfirmacionProveedor,
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;