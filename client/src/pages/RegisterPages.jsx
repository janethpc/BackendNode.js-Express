import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';


const RegisterPages = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const {singUp, isAuthenticated, allErrors} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      if(isAuthenticated) navigate('/product')
    }, [isAuthenticated]);

    const onSubmit = handleSubmit( async (values) => {
      singUp(values)
      
   });

  return (
    
    <div className="d-flex justify-content-center align-items-center h-100 container text-center">
      <div className="row form-signin mx-auto">
      {
        allErrors.map((error, i) => (
          <>
          <alert key={i} className="alert alert-danger" role="alert"> {error} </alert>
          </>
        ) )
      }
      <form 
       onSubmit={onSubmit}
       className='col'
      >
        <h2 className="h3 mb-3 fw-normal"> Register Here </h2>
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
      <p> Already have an account? <Link to="/login"> Sing up </Link></p>
    </div>
    </div>
  );
};

export default RegisterPages;





