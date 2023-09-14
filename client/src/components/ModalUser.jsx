import {useForm} from 'react-hook-form';
import Modal from 'react-bootstrap/Modal'
import { AddUser } from '../api/auth';


export const ModalUser = ({show, handleClose}) => {

     const {register, handleSubmit, formState: {errors}} = useForm();
    
     
     const onSubmit = handleSubmit(async (data) => {
          //console.log(data)
          await AddUser(data)
          window.location.reload();
     
     })

     
   
    

  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add category </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form 
       onSubmit={onSubmit}
       className='col text-center'

      >
        <h2 className="h3 mb-3 fw-normal" id='colorFond'> Register Here </h2>
        <div className="mb-3 form-floating">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
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
          <label htmlFor="floatingInput"> Name </label>
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
          <input
            type="password"
            className="form-control rounded"
            placeholder="Password"
            {...register('password', { required: true })}
          />
            {
            errors.name && (
              <>
              <br/>
              <alert className="alert alert-danger" role="alert"> password is required </alert>
              <br/>
              </>
            )
          }
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
