<template>
    <div v-if="question" >
      <div class="card  text-left ">
          <div class="card-header text-left">
            {{question.data.title}}
          </div>
          <div class="card-body">
            <p class="card-text">{{question.data.description}}</p>
          </div>

          <div class="card-footer text-muted" v-if="question.data">

            <h3>Respuestas: </h3>

            <div class="card mb-3 " 
            v-for="(answer, index) in question.data.answers"
            :key="index"
            >
              <div class="card-body">
                <p class="card-text">{{answer.description}}</p>
              </div>
             
            </div>
          </div>
          
      </div>

      <div class="row">
        <div class="col">
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Responder</label>
            <textarea class="form-control" v-model="description" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="mb-3">
            <button class="btn btn-success" @click="addAnswer">Responser</button>
          </div>
        </div>
      </div>


    </div>
</template>
  
  <script>
  import questionService from '@/services/questionService.vue';
  import authService from '@/services/authService.vue';
  
  export default {
    data() {
      return {
        questions:[],
        question:null,
        description:''
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
      getQuestion(id){
        questionService.getQuestion(id).then(response => {
          this.question = response.data;
          console.log(this.question);
        }).catch(error => {
          console.error('consulta error:', error);
        });

      },
      addAnswer() {
        questionService.addAnswer({
          description: this.description,
          question_id: this.$route.params.id
        }).then(response => {
          this.getQuestion(this.$route.params.id);
          this.description=null;
          console.log('User registered:', response.data);
        }).catch(error => {
          console.error('Registration error:', error);
        });
      },
    },
    mounted(){
      this.getQuestions();
      this.getQuestion(this.$route.params.id)
      console.log('question');
      if(!authService.verifyUser()){
        this.$router.push('/login');
        console.log('login');
      }
    },
  };
  </script>
  