<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vortex</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <RouterLink class="nav-link active" to="/">Home</RouterLink>
        <RouterLink v-if="!isLogin" class="nav-link active" to="/login">Login</RouterLink>
        <RouterLink v-if="!isLogin" class="nav-link active" to="/register">Registrarse</RouterLink>
        <RouterLink class="nav-link active" to="/questions">Preguntas</RouterLink>
        <RouterLink class="nav-link active" to="/add">Agregar Pregunta</RouterLink>
        <RouterLink v-if="isLogin" class="nav-link active" to="/logout">LogOut</RouterLink>
       
      </div>
    </div>
  </div>
</nav>

  <div class="container " style="text-align: left;">
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <main>
          <RouterView />
        </main>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </div>

</template>

<script>

import authService from '@/services/authService';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        message: '',
        isLogin: '',
      };
    },
    methods: {

    },
    mounted(){
      if(authService.verifyUser()){
        this.isLogin=true;
      }else{
        this.isLogin=false;
      }
      console.log('App '+this.isLogin)
    },
  };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
