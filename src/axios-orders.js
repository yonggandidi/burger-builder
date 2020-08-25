import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-c51ca.firebaseio.com/'
});

export default instance;