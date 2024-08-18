<template>
    <div>
      <form @submit.prevent="register">
        <input class="form-control mb-2" v-model="name" placeholder="Name" />
        <input class="form-control mb-2" v-model="email" placeholder="Email" />
        <input class="form-control mb-2" v-model="password" type="password" placeholder="Password" />
        <input class="form-control mb-2" v-model="password_confirmation" type="password" placeholder="Confirm Password" />
        <button class="btn btn-primary" type="submit">Register</button>
      </form>
    </div>
</template>
  
  <script>
  import authService from '@/services/authService';
  import questionService from '@/services/questionService.vue';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      };
    },
    methods: {
      register() {
        authService.register({
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        }).then(response => {
          console.log('User registered:', response.data);
        }).catch(error => {
          console.error('Registration error:', error);
        });
      },
      getQuestions(){
        questionService.getQuestions().then(response => {
          console.log('User registered:', response.data);
        }).catch(error => {
          console.error('Registration error:', error);
        });

      },
    },
    mounted(){
      this.getQuestions();
      console.log('question');
      if(authService.verifyUser()){
        this.$router.push('/questions');
        console.log('login');
      }

    },
  };
  </script>
  