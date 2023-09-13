import {  useEffect, useState } from "react"
import { getProductos } from "../api/auth"
import { NavBarUser } from "../components/NavBarUser"

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(()=> {
      getProductos()
      .then(response => {
        console.log(response.data)
        setProducts(response.data)
      })
      .catch(function (error){
        setProducts(error)
      })
  }, [])
  
  return (


    <div>
      <NavBarUser/>
        <h1>Productos </h1>
        <ul>
        {
  products.map((product) => (
    <li key={product._id}>{product.name}</li>
  ))
}
        </ul>
    </div>

  )
}

export default Products