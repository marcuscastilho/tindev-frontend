import axios from 'axios';


const api = axios.create({
    baseURL: process.env.REACT_API_URL || 'https://tindev-backend-js.herokuapp.com'
});

export default api;