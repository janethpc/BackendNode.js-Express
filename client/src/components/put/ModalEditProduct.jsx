import {useForm} from 'react-hook-form';
import Modal from 'react-bootstrap/Modal'
import { editProduct } from '../../api/auth';


export const ModalEditProduct = ({show, handleClose, productName}) => {

     const {register, handleSubmit, formState: {errors}} = useForm();
     
    const nameProduct = productName;
    
    const onSubmit = handleSubmit(async (data) => {
     try{
          await editProduct(nameProduct, data)
          window.location.reload();
     }catch(error){
          console.log(error)
     }
    })

     
   
    

  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> edit {productName} </Modal.Title>
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
                    placeholder='newname'
                    {...register('newname', {required: true})}
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