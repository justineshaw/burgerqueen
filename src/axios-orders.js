import axios from 'axios';

const instance = axios.create({
  baseURL: "https://burger-queen-original.firebaseio.com/"
});

export default instance;