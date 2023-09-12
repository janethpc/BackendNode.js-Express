import { DefaultLayout } from "../layout/DefaultLayout"

const SingUp = () => {
  return (
    <>
         <DefaultLayout/>
      
      <form className="form">
          <h1>Signup </h1>
          
          <label>name</label>
          <input type="text" />

          <label>age</label>
          <input type="Number" />

          <label>email</label>
          <input type="email" />
      
          <label>password</label>
          <input type="password" />

          <button> signup </button>

      </form>
    </>
  )
}

export default SingUp
