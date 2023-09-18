import axios from 'axios';


export const API = "http://localhost:3000/api"

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token")
    }
  }
  return headers
};
//peticiones get
export const verifyTokenReq = () => axios.get(`${API}/verify`);


export const getProductos = () => axios.get(`${API}/products`)

export const getCategories = () => axios.get(`${API}/category`)

export const getUsers = () => axios.get(`${API}/users`)


//peticiones post

export const registerRequest = async (user) =>
  await axios.post(`${API}/register`, user, { withCredentials: true }); //peticion al backend 


export const loginRequest = async (user) => await axios.post(`${API}/login`, user, {withCredentials: true})



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
      "role": user.role
      
    };

    const response = await axios.post(`${API}/users`, newObject);

    
    response
  } catch (error) {
    console.error(error.response.data.message);
    
  }
};

export const checkoutSession = async (checOut) => {
  try{
    const response = await axios.post(`${API}/create-checkout-session`, checOut);
    response
  }catch(error){
console.log(error.response.data.message)
  }
  
}

//metodo Put
export const EditCategory = async (categoryName, data) => {
  try{
    const response = await axios.put(`${API}/category/${categoryName}`, data)

   console.log( response)
  }catch(error){
    const allError = error.response.data.message
   console.log(allError)
  }
}

export const editProduct = async (nameProduct, data) => {
  try {
    
    const newObject = {
      "name": data.name,
      "newname": data.newname,
      "price": parseInt(data.price),
      "description": data.description,
      "category": data.category,
    };

    const response = await axios.put(`${API}/products/${nameProduct}`, newObject);    
    response
  } catch (error) {
    console.error(error.response.data.message);
    
  }
};

export const editUser = async (idUser, data) => {
  try {
    const newObject = {

      "name": data.name,
      "age": parseInt(data.age),
      "email": data.email,
      "password": data.password,
      "role": data.role
      
    };

    const response = await axios.put(`${API}/users/${idUser}`, newObject);

    
   console.log(response)
  } catch (error) {
    console.error(error.response.data.message);
    
  }
};

//metodo delete
export const deleteCategory = (categoryName) => axios.delete(`${API}/category/${categoryName}`)

export const deleteProduct = (productName) => axios.delete(`${API}/products/${productName}`)

export const deleteUser = (userName) => axios.delete(`${API}/users/${userName}`)
