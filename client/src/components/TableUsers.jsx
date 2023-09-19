import escribir from '../assets/images/escribir.png'
import basura from '../assets/images/basura.png'
import { useState } from 'react';
import { deleteUser } from '../api/auth';
import { ModalEditUser } from './put/ModalEditUser';


export const TableUsers = ({name, age, email, role, id}) => {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  const userName = id


  const handleDelete = () => {
    deleteUser(userName);
    window.location.reload();
  }


  return (
    <>
      <td key={id}>{name}</td>
                        <td>{age}</td>
                        <td>{email}</td>
                        <td>{role}</td>
                        <td>
                        <button data-bs-toggle="modal" data-bs-target='#modalProducts' onClick={handleShow}>
          <img src={escribir} alt='edit' width="30" height="24" className="d-inline-block" />
        </button>
        <button >
          <img src={basura} alt='eliminar' width="30" height="24" className="d-inline-block" onClick={handleDelete}/>
        </button>
                        </td>
                      <ModalEditUser show={show} handleClose={handleClose} userId={id} name={name}/>
                    
    </>
  )
}
