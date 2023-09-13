import escribir from '../assets/images/escribir.png'
import basura from '../assets/images/basura.png'
import { Modal } from './Modal'


export const TableProduct = ({name, price, description, id}) => {
    return (
        <>
        
            
                
                    <tr>
                        <th scope="row" key={id}></th>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{description}</td>
                        <td>
                            <button data-bs-toggle="modal" data-bs-target='#modalProducts'>
                            <img src={escribir} alt='edit' width="30" height="24" className="d-inline-block" />
                            </button>
                            <button>
                            <img src={basura} alt='eliminar' width="30" height="24" className="d-inline-block" />
                            </button>
                        </td>
                    </tr>
                    
                    
            
            
        </>
    )
}
