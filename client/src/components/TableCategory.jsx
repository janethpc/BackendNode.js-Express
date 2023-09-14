import escribir from '../assets/images/escribir.png'
import basura from '../assets/images/basura.png'
import { useState } from 'react'
import { ModalEditCategory } from './put/ModalEditCategory';

export const TableCategory = ({name, description, id}) => {

  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  

  

  return (
    <>
      <td key={id}>{name}</td>
      <td>{description}</td>
      <td>
        <button data-bs-toggle="modal" data-bs-target='#modalProducts' onClick={handleShow}>
          <img src={escribir} alt='edit' width="30" height="24" className="d-inline-block" />
        </button>
        <button >
          <img src={basura} alt='eliminar' width="30" height="24" className="d-inline-block" />
        </button>
      </td>
      <ModalEditCategory show={show} handleClose={handleClose} categoryname={name}/>
    </>
  )
}
