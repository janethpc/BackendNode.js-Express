import {useForm} from 'react-hook-form';
import Modal from 'react-bootstrap/Modal'
import { AddProduct } from '../api/auth';


export const ModalProducts = ({show, handleClose}) => {

     const {register, handleSubmit, formState: {errors}} = useForm();
    
     
     const onSubmit = handleSubmit(async (data) => {
          //console.log(data)
          await AddProduct(data)
          window.location.reload();
     
     })

     
   
    

  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add Product </Modal.Title>
        </Modal.Header>
        <Modal.Body>
               <form 
               onSubmit={onSubmit}
               className='col text.center'>
                    <div className='mb-3'>
                    <input
                    type='text'
                    className='form-control'
                    id='floatingInput'
                    placeholder='name'
                    {...register('name', {required: true})}
                    />
                    {
                         errors.name && (
                              <>
                              <br/>
                              <alert className="alert alert-danger" role='alert'>Name is required</alert>
                              <br/>
                              </>
                         )
                    }
                    </div>

                   
                     
                    <div className='mb-3'>
                         <input
                      type='text'
                      className='form-control'
                      placeholder='description'
                      id='floatinInput'   
                      {...register('description', {required: true})}
                         />
                    </div>

                    <div className='mb-3'>
                         <input
                         type='number'
                         placeholder='price'
                         className='form-control'
                         {...register('price')}
                         />
                    </div>

                    <div className='mb-3'>
                         <input
                         type='text'
                         className='form-control'
                         placeholder='category'
                         {...register('category', {required: true})}
                         />
                    </div>
                  
                    <button type='submit' className='btn btn-primary'>Save</button>
                   
               </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

