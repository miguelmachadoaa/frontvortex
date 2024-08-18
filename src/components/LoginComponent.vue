<template>
    <div>
      <form @submit.prevent="login">
        <h3>Login</h3>
        <h4 >{{ message }}</h4>
        <input class="form-control mb-3" v-model="email" placeholder="Email" />
        <input class="form-control mb-3" v-model="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
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
      };
    },
    methods: {
      login() {
        authService.login({
          email: this.email,
          password: this.password,
        }).then(() => {
          console.log('User logged in');
          this.$router.push('/questions');
        }).catch(error => {
            this.message="Credenciales Invalidas"
          console.error('Login error:', error);
        });
      },

    },
    mounted(){
      if(authService.verifyUser()){
        this.$router.push('/questions');
        console.log('login');
      }
      console.log('question');
    },
  };
  </script>