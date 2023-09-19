import { useEffect, useState } from "react"
import { getProductos } from "../api/auth"
import { NavBarAdmin } from "../components/NavBarAdmin"
import agregar from '../assets/images/agregar.png';
import { ModalProducts } from "../components/ModalProducts";
import { TableProduct } from "../components/TableProduct";
import { useAuth } from '../context/AuthContext';



const EditProducts = () => {

  const [products, setProducts] = useState([]);
  
  const [show, setShow] = useState(false);
  const { isAuthenticated } = useAuth();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  useEffect(() => {
    getProductos()
      .then(response => {
        console.log(response.data)
        setProducts(response.data)
        isAuthenticated
      })
      .catch(function (error) {
        setProducts(error)
      })
  }, []);

 console.log(isAuthenticated)
  return (
    < >
       <NavBarAdmin />
 
      <div className="contairner text-center">
                  
      <div className='row mt3'>
        <div className='col-md-4 offset-4'>
          <div className='d-grid mx-auto'>
          <h1>CRUD to the Products</h1>
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleShow}>
              <img src={agregar} alt="añadir" width="50" height="50" className="d-inline-block" />
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 col-lg-8 mx-auto">
          <div className="d-grid mx-auto">
          <div className="table-responsive aling-item-center">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">name</th>
                  <th scope="col">price</th>
                  <th scope="col">categoty</th>
                  <th scope="col">description</th>
                  <th scope="col">option</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {
                  
                  products.map((product) => (
                    <>
                    <tr key={product._id}>
                        <th scope="row">#</th>
                      <TableProduct
                        key={product._id}
                        name={product.name}
                        price={product.price}
                        category={product.category}
                        description={product.description}
                        id={product._id}

                      />
                      </tr>
                    </>
                  ))
                }
              </tbody>
            </table>
            </div>
          </div> 
          </div>
    </div>
    </div>
    <ModalProducts show={show} handleClose={handleClose}/>
    </>
  )
}

export default EditProducts

