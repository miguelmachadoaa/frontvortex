<template>
  <div></div>
</template>
<script>
import apiClient from './apiClient';

export default {
  register(question) {
    return apiClient.post('/question', question);
  },
  getQuestions() {
    return apiClient.get('/question');
  },
  getQuestion(id) {
    return apiClient.get('/question/'+id);
  },
  addAnswer(answer) {
    return apiClient.post('/answer', answer);
  },
  addQuestion(question) {
    return apiClient.post('/question', question);
  },
};
</script>
