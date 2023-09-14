import {useForm} from 'react-hook-form';
import Modal from 'react-bootstrap/Modal'
import { EditCategory } from '../../api/auth';


export const ModalEditCategory = ({show, handleClose, categoryname}) => {

     const {register, handleSubmit, formState: {errors}} = useForm();
     const categoryName = categoryname;
    
    
     const onSubmit = handleSubmit(async (data) => {
          //console.log(data)
          try{

            await EditCategory(categoryName, data)
            window.location.reload();
        }catch(error){
            console.log(error)
        }
          
          
     
     })

     
   
    

  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> edit {categoryname} </Modal.Title>
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

                                      
                    <button type='submit' className='btn btn-primary'>Save</button>
                   
               </form>
        </Modal.Body>
      </Modal>
    </>
  )
}