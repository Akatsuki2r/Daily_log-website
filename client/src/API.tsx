import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5173', // Your API's base URL
  headers: {
    'Authorization': 'Bearer YOUR_AUTH_TOKEN',
    'Content-Type': 'application/json'
  }
});

export default API;
