<template>
    <div>
     
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
      

    },
    mounted(){
      authService.logout();
      this.$router.push('/login');
    },
  };
  </script>