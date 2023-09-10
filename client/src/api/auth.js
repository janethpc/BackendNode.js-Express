import axios from 'axios';

const API = "http://localhost:3000/api"


export const registerRequest = async (user) =>
  await axios.post(`${API}/register`, user, { withCredentials: true }); //peticion al backend 

