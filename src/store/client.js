import axios from 'axios';

const client = axios.create({
  baseURL: 'https://manage-company.app/api/',
});

client.interceptors.request.use((config) => {
  
    const auth_key = localStorage.getItem('auth_key')
    if (auth_key) {
      config.headers['auth_key'] = auth_key
    }
    
    return config
});

client.interceptors.response.use(
    
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        console.log('error 401');
      }
      if (error.response && error.response.data && error.response.status !== 401) {
          console.log('error !401');
      }
      return Promise.reject(error)
    }
);

export default client;







