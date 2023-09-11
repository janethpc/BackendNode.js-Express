import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate  } from 'react-router-dom';


const LoginPages = () => {

  const {register, handleSubmit, formState: {errors} } = useForm()
  const {signin, allErrors} = useAuth();
  const navigate = useNavigate();


  const onSubmit = handleSubmit((data) => {
    signin(data, navigate)
  })

  return (
    <>
      <div className="d-flex justify-content-center align-items-center h-100 container text-center">
        <div className="row form-signin mx-auto">
        {allErrors.map((error, i) => (
            <div key={i} className="alert alert-danger" role="alert">
              {error.message}
            </div>
          ))}
        <form onSubmit={onSubmit} className='col text-center'>
        <h2 className="h3 mb-3 fw-normal"> Login </h2>
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
          <p> Dont have an account? <Link to="/register"> Sing up </Link></p>
      </div>
      </div>
    </>
  )
}

export default LoginPages