import escribir from '../assets/images/escribir.png'
import basura from '../assets/images/basura.png'
import { useState } from 'react';
import {deleteProduct} from '../api/auth'
import { ModalEditProduct } from './put/ModalEditProduct';


export const TableProduct = ({name, price, description, id, category}) => {

    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
  

    const productName = name

    const handleDelete = () => {
        deleteProduct(productName);
        window.location.reload();
      }
    
    
    return (
        <>
        
            
                
                    
                        <td key={id}>{name}</td>
                        <td>${new Intl.NumberFormat('es-mx').format(price)}</td>
                        <td>{category}</td>
                        <td>{description}</td>
                        <td>
                        <button data-bs-toggle="modal" data-bs-target='#modalProducts' onClick={handleShow}>
          <img src={escribir} alt='edit' width="30" height="24" className="d-inline-block" />
        </button>
                            <button >
          <img src={basura} alt='eliminar' width="30" height="24" className="d-inline-block" onClick={handleDelete}/>
        </button>
                        </td>
                    
                <ModalEditProduct show={show} handleClose={handleClose}  productName={name}/>    
                    
            
            
        </>
    )
}
