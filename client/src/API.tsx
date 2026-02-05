import axios from 'axios';


const API = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Your API's base URL
  headers: {
    'Authorization': 'Bearer YOUR_AUTH_TOKEN',
    'Content-Type': 'application/json'
  }
});

export default API;




