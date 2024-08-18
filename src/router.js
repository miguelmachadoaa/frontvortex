import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from './components/LoginComponent.vue';
import RegisterComponent from './components/RegisterComponent.vue';
import QuestionComponent from './components/QuestionComponent.vue';
import QuestionDetailComponent from './components/QuestionDetailComponent.vue';
import AddQuestionComponent from './components/AddQuestionComponent.vue';
import LogoutComponent from './components/LogoutComponent.vue';

const routes = [
  { path: '/', component: QuestionComponent },
  { path: '/login', component: LoginComponent },
  { path: '/register', component: RegisterComponent },
  { path: '/question/:id', component: QuestionDetailComponent },
  { path: '/questions', component: QuestionComponent },
  { path: '/add', component: AddQuestionComponent },
  { path: '/logout', component: LogoutComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
