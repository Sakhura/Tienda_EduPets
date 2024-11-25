<template>
  <img alt="Tienda logo" src="./assets/LogoEduPets.jpg" />
  <HomePage msg="Bienvenido a EduPets" />
</template>
 
<script>
import HomePage from "./views/HomePage.vue";
 
export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>
 
<style>
#app {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: center;
  margin-top: 0px;
}
img {
  width: 300px;
  margin-bottom: 20px;
}
</style>