import axios from 'axios';


const API = "http://localhost:3000/api"


export const registerRequest = async (user) =>
  await axios.post(`${API}/register`, user, { withCredentials: true }); //peticion al backend 


export const loginRequest = async (user) => await axios.post(`${API}/login`, user, {withCredentials: true})

export const verifyTokenReq = () => axios.get(`${API}/verify`);


export const getProductos = () => axios.get(`${API}/products`)

export const getCategories = () => axios.get(`${API}/category`)

export const getUsers = () => axios.get(`${API}/users`)

export const AddProduct = async (productdata) => {
  try {
    const newObject = {
      "name": productdata.name,
      "price": parseInt(productdata.price),
      "description": productdata.description,
      "category": productdata.category
    };

    const response = await axios.post(`${API}/products`, newObject);

    // Haz algo con la respuesta si es necesario
    response
  } catch (error) {
    console.error(error.response.data.message);
    
  }
};

export const AddCategory = async (category) => {
  try{
    const response = await axios.post(`${API}/category`, category)

    response
  }catch(error){
    const allError = error.response.data.message
   console.log(allError)
  }
}

export const AddUser = async (user) => {
  try {
    const newObject = {
      "name": user.name,
      "age": parseInt(user.age),
      "email": user.email,
      "password": user.password,
      "rol": user.rol
    };

    const response = await axios.post(`${API}/users`, newObject);

    
    response
  } catch (error) {
    console.error(error.response.data.message);
    
  }
};

export const EditCategory = async (categoryName, data) => {
  try{
    const response = await axios.put(`${API}/category/${categoryName}`, data)

   console.log( response)
  }catch(error){
    const allError = error.response.data.message
   console.log(allError)
  }
}

export const deleteCategory = (categoryName) => axios.delete(`${API}/category/${categoryName}`)

