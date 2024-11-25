<template>
    <div class="login-container">
      <h2>Iniciar sesión</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="username">Usuario</label>
          <input 
            type="text" 
            id="username" 
            v-model="username" 
            placeholder="Escribe tu usuario" 
            required />
        </div>
        <div>
          <label for="password">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            placeholder="Escribe tu contraseña" 
            required />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
  
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const username = ref('');
  const password = ref('');
  const errorMessage = ref('');
  
  const handleLogin = () => {
    // Simulamos una validación simple
    if (username.value === 'admin' && password.value === '1234') {
      alert('Inicio de sesión exitoso');
      errorMessage.value = ''; // Limpiar mensaje de error
      // Aquí podrías redirigir o manejar el estado de autenticación
    } else {
      errorMessage.value = 'Usuario o contraseña incorrectos';
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  form div {
    margin-bottom: 12px;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 6px;
  }
  
  input {
    padding: 8px;
    font-size: 14px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .error-message {
    color: red;
    margin-top: 12px;
  }
  </style>
  