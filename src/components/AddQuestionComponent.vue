<template>
    <div  >

      <div class="row">
        <div class="col">
            <h3 class="mt-3">Agregar Pregunta </h3>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Titulo</label>
                <input type="text"  v-model="title" class="form-control" id="title" placeholder="Title">
            </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Descripcion</label>
            <textarea class="form-control" v-model="description" id="description" rows="3"></textarea>
          </div>
          <div class="mb-3">
            <button class="btn btn-success" @click="addQuestion">Responser</button>
            <RouterLink class="btn btn-danger" to="/questions">Cancelar</RouterLink>

          </div>
        </div>
      </div>


    </div>
</template>
  
  <script>
  import questionService from '@/services/questionService.vue';
  
  export default {
    data() {
      return {
        description:'',
        title:''
      };
    },
    methods: {
      addQuestion() {
        questionService.addQuestion({
          title: this.title,
          description: this.description,
        }).then(response => {
          console.log('Question registered:', response.data);
        }).catch(error => {
          console.error('Question error:', error);
        });
      },
    },
    mounted(){
      console.log('add');
    },
  };
  </script>
  