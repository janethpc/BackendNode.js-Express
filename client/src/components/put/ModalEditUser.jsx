import {useForm} from 'react-hook-form';
import Modal from 'react-bootstrap/Modal';
import { editUser } from '../../api/auth';


export const ModalEditUser = ({show, handleClose, userId, name}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const idUser = userId;

    const onSubmit = handleSubmit(async (data) => {
      try{
        await editUser(idUser, data)
        window.location.reload();
      }catch(error){
        console.log(error)
    }
    })

  return (
    <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> edit {name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form 
       onSubmit={onSubmit}
       className='col text-center'

      >
       
        <div className="mb-3 form-floating">
          <input
            type="text"
            className="form-control"
            placeholder="name"
            id="floatingInput"
            {...register('name', { required: true })}
          />
          {
            errors.name && (
              <>
              <br/>
              <alert className="alert alert-danger" role="alert"> User name is required </alert>
              <br/>
              </>
            )
          }
          <label htmlFor="floatingInput"> newname </label>
        </div>

        <div className="mb-3">
          <input
            type="number"
            className="form-control rounded"
            placeholder="Age"
            {...register('age', { required: true })}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control rounded"
            placeholder="role"
            {...register('role')}
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control rounded"
            placeholder="Email"
            {...register('email', { required: true })}
          />
          {
            errors.name && (
              <>
              <br/>
              <alert className="alert alert-danger" role="alert"> Email is required </alert>
              <br/>
              </>
            )
          }
        </div>

        

        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            UpData
          </button>
          </div>
          </form>
        </Modal.Body>
      </Modal>
    </ >
  )
}
