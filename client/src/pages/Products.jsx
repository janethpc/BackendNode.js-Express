import { useEffect, useState } from "react";
import { getProductos } from "../api/auth";
import { CardProducts } from "../components/products/CardProducts";

const Products = ({ userMail }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userMail) {
      return; // Evita ejecutar la llamada a la API si userMail está vacío
    }

    // Coloca la llamada a la API dentro de este useEffect y asegúrate de que se ejecute cuando userMail cambie
    getProductos()
      .then((response) => {
        setProducts(response.data);
        console.log(userMail);
      })
      .catch(function (error) {
        setError(error);
      });
  }, [userMail]); // Agrega userMail como una dependencia

  return (
    <div>
      <div className="text-center">
        <h1>Products</h1>
      </div>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <>
            <CardProducts
              key={product._id}
              id={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              user={userMail}
            />
           
            </>
          ))}
        </div>
      </div>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default Products;

