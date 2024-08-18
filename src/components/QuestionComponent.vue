<template>
    <div>
      <h3 class="mt-3 mb-3" >Listado de preguntas </h3>
      <div class="card  mb-4"  
      v-for="(question, index) in questions"
      :key="index"
      >
          <div class="card-header" >
            <router-link  :to="'/question/' + question.id"  class="btn btn-link " style="color: #333; text-decoration: none; font-weight: 600;">{{question.title}}</router-link>
            
          </div>
          <div class="card-body">
            <p class="card-text">{{question.description}}</p>
            <router-link  :to="'/question/' + question.id" class="btn btn-primary">Ver</router-link>
          </div>
          <div class="card-footer text-muted">
            Respuestas: {{ question.answers.length }} 
          </div>
        </div>
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
        questions:[]
      };
    },
    methods: {
      getQuestions(){
        questionService.getQuestions().then(response => {
          this.questions = response.data;
        }).catch(error => {
          console.error('consulta error:', error);
        });

      },
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
    },
    mounted(){
      this.getQuestions();
      console.log('question');
      if(!authService.verifyUser()){
        this.$router.push('/login');
        console.log('login');
      }
    },
  };
  </script>
  <style>
  .card{
    border-radius: 0;
  }
  </style>