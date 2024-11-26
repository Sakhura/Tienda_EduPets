<template>
  <div class="container mt-5">
  <div class="card mx-auto" style="max-width: 400px;">
    <div class="card-body">
      <h5 class="card-title text-center">Iniciar Sesión</h5>
      <form>
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input type="email" id="email" class="form-control" v-model="user.email" placeholder="email@email.com" />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Contraseña:</label>
          <input type="password" id="password" class="form-control" v-model="user.password" />
        </div>
       
        <button type="button" class="btn btn-primary w-100" @click="login()">Iniciar Sesión</button>
      </form>
      <hr>
    <router-link to='/RegistroUsuario' class="btn btn-primary w-100">Registrarse</router-link>
    </div>
   
  </div>
</div>

 

</template>

<script>
import axios from 'axios'
export default {
  name: "loginUser",
  data() {
      return {
          user: {
              email: '',
              password: '',
          }
      }
  },
  methods: {
      login() {
          if (!this.user.email || !this.user.password) {
              alert('Debes llenar todos los campos')
          }
          else {
              axios.get(`https://raw.githubusercontent.com/shaka0241/tiendaMascotaApi/main/login.json`)
                  .then((resp) => {
                      if (this.user.email === resp.data.loginRequest.email && this.user.password === resp.data.loginRequest.password) {
                          alert('logueado'),
                          this.$router.push({ name: 'Home' })
                      } else {
                          alert('no logueado')
                      }
                  })
                  .catch((error) => {
                      console.log("error en la solicitud", error)
                  })
          }
      },

  },
}
</script>

<style>
/* Tonos pastel */
:root {
  --pastel-blue: #b3d9ff;
  --pastel-pink: #ffc1cc;
  --pastel-green: #d4f8e8;
  --pastel-purple: #e6ccff;
  --text-dark: #4a4a4a;
}

/* Estilo de la tarjeta */
.pastel-card {
  border: none;
  border-radius: 15px;
  background: var(--pastel-blue);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

/* Títulos */
.card-title {
  font-size: 1.5rem;
  color: var(--text-dark);
  font-weight: bold;
  margin-bottom: 20px;
}

/* Botones */
.btn-pastel {
  background-color: var(--pastel-purple);
  color: white;
  border: none;
  transition: all 0.3s ease-in-out;
}
.btn-pastel:hover {
  background-color: var(--pastel-pink);
  color: var(--text-dark);
}

/* Input */
.form-control {
  border: 2px solid var(--pastel-green);
  border-radius: 10px;
  transition: border-color 0.3s;
}
.form-control:focus {
  border-color: var(--pastel-pink);
  outline: none;
  box-shadow: 0px 0px 5px var(--pastel-pink);
}

/* Separación entre campos */
.mb-4 {
  margin-bottom: 1.5rem !important;
}

/* Centrando el contenido */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
