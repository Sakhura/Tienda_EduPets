import { createRouter, createWebHistory } from "vue-router";


import LoginUsuario from "@/views/LoginUsuario.vue";
import HomePage from "@/views/HomePage.vue";
import RegistroUsuario from "@/views/RegistroUsuario.vue";
import ConfirmacionUsuario from "@/views/ConfirmacionUsuario.vue";

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
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;