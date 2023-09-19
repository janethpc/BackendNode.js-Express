import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


const LoginPages = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [userInfo, setUserInfo] =useState({})
  const { signin, allErrors} = useAuth();
  const navigate = useNavigate();

  console.log(userInfo)

  const onSubmit = handleSubmit((data) => {
    signin(data, navigate);
    setUserInfo(data);

  });

  return (
    <>
      <div className="container text-center" id='background'>
        <div className="row form-signin mx-auto">
          {allErrors.map((error, i) => (
            <div key={i} className="alert alert-danger" role="alert">
              {error}
            </div>
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
              {errors.email && (
                <>
                  <br />
                  <div className="alert alert-danger" role="alert"> Email is required </div>
                  <br />
                </>
              )}
              <label htmlFor="floatingInput"> Email </label>
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control rounded"
                placeholder="Password"
                {...register('password', { required: true })}
              />
              {errors.password && (
                <>
                  <br />
                  <div className="alert alert-danger" role="alert"> Password is required </div>
                  <br />
                </>
              )}
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <p id='colorFond'> Don't have an account? <Link to="/register" id='colorFond'> Sign up </Link></p>
        </div>
      </div>
    </>
  )
}

export default LoginPages;
