import { useEffect, useState } from "react";
import { getProductos } from "../api/auth";
import { NavBarUser } from "../components/NavBarUser";
import { CardProducts } from "../components/products/CardProducts";


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
            <>
           <CardProducts id={product._id} name={product.name} description={product.description} price={product.price}/>
           </>
          ))}
        </div>
      </div>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default Products;
