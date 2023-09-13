import { useEffect, useState } from "react"
import { NavBarAdmin } from "../components/NavBarAdmin"
import { getCategories } from "../api/auth";
import agregar from '../assets/images/agregar.png'
import { TableCategory } from "../components/TableCategory";


const Categories = () => {

const [Categories, setCategories] = useState([]);

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
    <div>
     <div className="contairner text-center">
              <NavBarAdmin />
      <h1>CRUD to the categories</h1>
      <div className='row mt3'>
        <div className='col-md-4 offset-4'>
          <div className='d-grid mx-auto'>
            <button className="btn ">
              <img src={agregar} alt="añadir" width="50" height="50" className="d-inline-block" />
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
  )
}

export default Categories