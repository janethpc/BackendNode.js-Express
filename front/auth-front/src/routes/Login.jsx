import { DefaultLayout } from "../layout/DefaultLayout";


const Login = () => {
  return (
    <>
      
      <DefaultLayout/>
      
        <form className="form">
            <h1>Login</h1>
            
            <label>email</label>
            <input type="text" />
        
            <label>password</label>
            <input type="password" />

            <button> Login </button>

        </form>
    </>
  )
}

export default Login;