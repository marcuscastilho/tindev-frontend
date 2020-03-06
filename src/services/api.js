import axios from 'axios';


const api = axios.create({
    baseURL: 'https://tindev-backend-js.herokuapp.com' 
});

export default api;