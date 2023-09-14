import { useEffect, useState } from "react"
import { NavBarAdmin } from "../components/NavBarAdmin"
import { getUsers } from "../api/auth";
import agregar from '../assets/images/agregar.png';
import { TableUsers } from "../components/TableUsers";
import { ModalUser } from "../components/ModalUser";


const EditUsers = () => {

  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getUsers()
    .then(response => {
      setUsers(response.data)
    })
    .catch(function (error){
      setUsers(error)
    })
  }, []);
  return (
    <>
    <NavBarAdmin />
      
      <div className='row mt3'>
        <div className='col-md-4 offset-4'>
          <div className='d-grid mx-auto'>
          <h1>CRUD to the Users</h1>
          <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleShow}>
              <img src={agregar} alt="añadir" width="50" height="50" className="d-inline-block" />
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 col-lg-8 mx-auto">
          <div className="d-grid mx-auto">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">name</th>
                  <th scope="col">age</th>
                  <th scope="col">email</th>
                  <th scope="col">rol</th>
                  <th scope="col">option</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {
                  
                  users.map((user) => (
                    <>
                    <tr key={user._id}>
                        <th scope="row">#</th>
                      <TableUsers
                        key={user._id}
                        name={user.name}
                        age={user.age}
                        email={user.email}
                        id={user._id}
                        rol={user.rol}
                        
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
      
      <ModalUser show={show} handleClose={handleClose}/>
    </>
  )
}

export default EditUsers