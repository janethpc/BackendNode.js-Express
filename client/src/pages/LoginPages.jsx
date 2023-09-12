import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate  } from 'react-router-dom';
import { useEffect } from 'react';


const LoginPages = () => {

  const {register, handleSubmit, formState: {errors} } = useForm()
  const {signin, isAuthenticated, allErrors} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated) navigate('/products')
  }, [isAuthenticated]);


  const onSubmit = handleSubmit((data) => {
    signin(data, navigate)
  })

  return (
    <>
      <div className="container text-center" id='background'>
        <div className="row form-signin mx-auto">
        {allErrors.map((error, i) => (
            <alert key={i} className="alert alert-danger" role="alert">
              {error.message}
            </alert>
          ))}
        <form onSubmit={onSubmit} className='col text-center'>
        <h2 className="h3 mb-3 fw-normal" id='colorFond'> Login </h2>
        <div className="mb-3 form-floating">
          <input
            type="email"
            className="form-control rounded"
            placeholder="Email"
            id="floatingInput"
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
            <label htmlFor="floatingInput"> email </label>
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
              <div className="alert alert-danger" role="alert"> password is required </div>
              <br/>
              </>
            )
          }
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
          <p id='colorFond'> Dont have an account? <Link to="/register" id='colorFond'> Sing up </Link></p>
      </div>
      </div>
    </>
  )
}

export default LoginPages