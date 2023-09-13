import { useEffect, useState } from "react"
import { getProductos } from "../api/auth"
import { NavBarAdmin } from "../components/NavBarAdmin"
import { TableProduct } from "../components/tableProduct";



const EditProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductos()
      .then(response => {
        console.log(response.data)
        setProducts(response.data)
      })
      .catch(function (error) {
        setProducts(error)
      })
  }, []);

  return (
    <div className="container-fluid aling-item-center">
      <NavBarAdmin />
      <h1>CRUD to the product</h1>
      <div className='row mt3'>
        <div className='col-md-4 offset-4'>
          <div className='d-grid mx-auto'>
            <button>
              <i className='fa-solid fa-circule-plus'></i> Añadir
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 col-lg-8 offset-0 offset-lg-12">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">name</th>
                  <th scope="col">price</th>
                  <th scope="col">description</th>
                  <th scope="col">option</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {
                  products.map((product) => (
                    <>
                      <TableProduct
                        key={product._id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        id={product._id}
                      />
                    </>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProducts

