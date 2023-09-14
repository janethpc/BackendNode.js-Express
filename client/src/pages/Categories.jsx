import { useEffect, useState } from "react"
import { NavBarAdmin } from "../components/NavBarAdmin"
import { getCategories } from "../api/auth";
import agregar from '../assets/images/agregar.png'
import { TableCategory } from "../components/TableCategory";
import {ModalCategories} from '../components/ModalCategories'

const Categories = () => {

const [Categories, setCategories] = useState([]);

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true)

useEffect(() => {
  getCategories()
  .then(response => {
    console.log(response)
    setCategories(response.data)
  })
  .catch(function (error) {
    setCategories(error)
  })
}, [])



  return (
    <>
     <NavBarAdmin />
     <div className="contairner text-center">
      <div className='row mt3'>
        <div className='col-md-4 offset-4'>
          <div className='d-grid mx-auto'>
          <h1>CRUD to the categories</h1>
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
                  <th scope="col">description</th>
                  <th scope="col">option</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {
                  
                  Categories.map((category) => (
                    <>
                    <tr key={category._id}>
                        <th scope="row">#</th>
                      <TableCategory
                        key={category._id}
                        name={category.name}
                        description={category.description}
                        id={category._id}
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
      <ModalCategories show={show} handleClose={handleClose}/>
    </>
  )
}

export default Categories