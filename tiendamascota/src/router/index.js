import { createRouter, createWebHistory } from "vue-router";

import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import HomePage from "../views/HomePage.vue";
import ConfirmacionProveedor from "@/views/ConfirmacionProveedor.vue";
import ConfirmacionUsuario from "@/views/ConfirmacionUsuario.vue";
import DetalleProducto from "@/components/DetalleProducto.vue";
import ListadoProducto from "@/views/ListadoProducto.vue";
import LoginUsuario from "@/views/LoginUsuario.vue";
import RegistroUsuario from "@/views/RegistroUsuario.vue";
import RegistroProveedor from "@/views/RegistroProveedor.vue";
 

 
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/confirmacionproveedor",
    name: "ConfirmacionProveedor",
    component: ConfirmacionProveedor,
  },
 
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/confirmacionusuario",
    name: "ConfirmacionUsuario",
    component: ConfirmacionUsuario,
  },
  {
    path: "detalleproducto",
    name: "DetalleProducto",
    component: DetalleProducto,
  },
 
  {
    path: "listadoproducto",
    name: "ListadoProducto",
    component: ListadoProducto,
  },
 
  {
    path: "loginusuario",
    name: "LoginUsuario",
    component: LoginUsuario,
  },
 
  {
    path: "registrousuario",
    name: "RegistroUsuario",
    component: RegistroUsuario,
  },
 
  {
    path: "registroproveedor",
    name: "RegistroProveedor",
    component: RegistroProveedor,
  },
];
 
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;