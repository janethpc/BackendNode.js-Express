import { useForm } from 'react-hook-form';
import {registerRequest} from '../api/auth'


const RegisterPages = () => {

    //const { signup } = useAuth();

    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit( async (values) => {
      const res = await registerRequest(values);
      console.log(res);
   })

  return (
    <div className="container text-center mt-5">
      <h2>Registro</h2>
      <form 
       onSubmit={onSubmit}
      >
        <div className="mb-3">
          <input
            type="text"
            className="form-control rounded"
            placeholder="Name"
            {...register('name', { required: true })}
          />
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
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control rounded"
            placeholder="Password"
            {...register('password', { required: true })}
          />
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPages;





