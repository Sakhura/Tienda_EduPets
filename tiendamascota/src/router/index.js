import { createRouter, createWebHistory } from "vue-router";


import LoginUsuario from "@/views/LoginUsuario.vue";

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
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;