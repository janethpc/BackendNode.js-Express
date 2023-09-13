import escribir from '../assets/images/escribir.png'
import basura from '../assets/images/basura.png'


export const TableUsers = ({name, age, email, rol, id}) => {
  return (
    <>
      <td key={id}>{name}</td>
                        <td>{age}</td>
                        <td>{email}</td>
                        <td>{rol}</td>
                        <td>
                            <button data-bs-toggle="modal" data-bs-target='#modalProducts'>
                            <img src={escribir} alt='edit' width="30" height="24" className="d-inline-block" />
                            </button>
                            <button>
                            <img src={basura} alt='eliminar' width="30" height="24" className="d-inline-block" />
                            </button>
                        </td>
                    
    </>
  )
}
