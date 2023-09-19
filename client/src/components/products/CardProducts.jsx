import axios from 'axios';
import productos from '../../assets/images/productos.png'
import { API } from '../../api/auth'
import { useEffect, useState } from 'react'

export const CardProducts = ({id, name, description, price, user}) => {

  

  const handleCheckout = ({target}) => {
    const priceProduct = target.innerHTML;
    const userOrder = user._id;
    
     axios.post(`${API}/create-checkout-session`, {
        priceProduct,
        userId: userOrder
      }).then((res) => {
        if(res.data.url){
          window.location.href = res.data.url
        }
      }).catch((error) => {
        console.log(error.message)
      })
  }

    
  

  return (
    <>
             <div className="col-md-4" key={id}>
              <div className="card text-center mb-4" style={{ width: "70%" }}>
                <div className="card-header">
                <img src={productos} className="card-img-top" alt="product" />
                </div>
                <div className="card-body">
                 
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{description}</p>
                  <div className="container text-center">
                   <button type="button" key={id} className="btn btn-success" onClick={(e) => handleCheckout(e)}> $ {price}</button>
                  </div>
                 
                </div>
              </div>
              </div>
    </>
  )
}
