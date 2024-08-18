<script>
import apiClient from './apiClient';

export default {
  register(user) {
    localStorage.removeItem('user');
    return apiClient.post('/register', user);
  },
  login(credentials) {
    return apiClient.post('/login', credentials).then(response => {
      localStorage.setItem('token', response.data.authorization.token);
      localStorage.setItem('user', response.data.user.email);
    });
  },
  getUser() {
    return apiClient.get('/user');
  },
  verifyUser() {
    return localStorage.getItem('user')
  },
  logout(){
    localStorage.removeItem('user');
  }

};
</script>
