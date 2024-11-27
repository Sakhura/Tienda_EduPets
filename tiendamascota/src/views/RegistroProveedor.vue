<template>
    <div class="container-fluid d-flex flex-column align-items-center">
      <!-- Logo e Información -->
      <div class="imagen text-center mb-4 animate-fade-in">
        <img
          class="imageLogo rounded-circle shadow"
          :src="require('@/assets/LogoEduPets.jpg')"
          alt="logo"
        />
        <h1 class="title mt-3 text-primary">Tienda de Mascotas</h1>
        <router-link to="/Home" class="btn btn-outline-primary w-50 mt-2">
          Volver al Home
        </router-link>
      </div>
  
      <!-- Formulario de registro -->
      <div class="registro-box p-4 shadow-lg animate-slide-up">
        <h2 class="text-center text-secondary">Registro Proveedor</h2>
        <form action="#" method="POST">
          <div class="mb-3">
            <label for="name" class="form-label">Nombre Proveedor:</label>
            <input
              type="text"
              id="name"
              class="form-control"
              v-model="user.name"
              placeholder="Nombre"
            />
          </div>
          <div class="mb-3">
            <label for="contact-name" class="form-label">Nombre Persona Contacto:</label>
            <input
              type="text"
              id="contact-name"
              class="form-control"
              v-model="user.namecontacto"
              placeholder="Nombre"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input
              type="email"
              id="email"
              class="form-control"
              v-model="user.email"
              placeholder="email@email.com"
            />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Teléfono:</label>
            <input
              type="text"
              id="phone"
              class="form-control"
              v-model="user.phone"
              placeholder="1234123"
            />
          </div>
          <button type="button" class="btn btn-primary w-100" @click="registroProveedor">
            Registrarme
          </button>
        </form>
      </div>
    </div>
  </template>
  
   
  <script>
  export default {
    name: "RegistroProveedor",
    data() {
      return {
        user: {
          name: "",
          email: "",
          namecontacto: "",
          phone: "",
        },
      };
    },
    methods: {
      registroProveedor() {},
      LoginUsuario() {
        this.$router.push("/login");
      },
    },
  };
  </script>
   
  <style>
  /* Animaciones */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Clases de animación */
.animate-fade-in {
  animation: fadeIn 1.2s ease-in-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out;
}

/* Estilos generales */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  background: linear-gradient(135deg, #f5fafd, #dfeeff);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imagen img {
  max-width: 150px;
  height: auto;
  border: 3px solid #6cc0f7;
}

.title {
  font-size: 24px;
  color: #4a90e2;
}

.registro-box {
  background: #ffffff;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
}

.registro-box h2 {
  margin-bottom: 20px;
  font-size: 22px;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 10px;
}

.registro-box input {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
}

.registro-box input:focus {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  outline: none;
}

.registro-box button {
  background: #4a90e2;
  border: none;
  transition: background 0.3s;
}

.registro-box button:hover {
  background: #357ab8;
}

  </style>