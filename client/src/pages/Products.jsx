import { useEffect, useState } from "react";
import { getProductos } from "../api/auth";
import { NavBarUser } from "../components/NavBarUser";
import productos from '../assets/images/productos.png';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProductos()
      .then((response) => {
        setProducts(response.data);
      })
      .catch(function (error) {
        setError(error);
      });
  }, []);

  return (
    <div>
      <NavBarUser />
      <div className="text-center">
        <h1>Products</h1>
      </div>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4" key={product._id}>
              <div className="card mb-4" style={{ width: "70%" }}>
                <img src={productos} className="card-img-top" alt="product" />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <div className="container text-center">
                  <button type="button" className="btn btn-success">{product.price}</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default Products;
