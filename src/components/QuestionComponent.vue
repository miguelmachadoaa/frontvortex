<template>
    <div>
      <div class="card  mb-4" 
      v-for="(question, index) in questions"
      :key="index"
      >
          <div class="card-header">
            {{question.title}}
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
    },
  };
  </script>
  