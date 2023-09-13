import axios from 'axios';
import { useEffect, useState } from 'react';

const API = "http://localhost:3000/api"


export const registerRequest = async (user) =>
  await axios.post(`${API}/register`, user, { withCredentials: true }); //peticion al backend 


export const loginRequest = async (user) => await axios.post(`${API}/login`, user, {withCredentials: true})

export const verifyTokenReq = () => axios.get(`${API}/verify`);


export const getProductos = () => axios.get(`${API}/products`)