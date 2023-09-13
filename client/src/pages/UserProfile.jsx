import { NavBarUser } from "../components/NavBarUser"
import welcome from '../assets/images/welcome.png'

const UserProfile = () => {
  return (
    < >
    <NavBarUser/>
    <div className="container text-center" id="alingCenter">
      <div className="row row-cols-2 align-items-center justify-content-center">
        <div className="col-4">
        <img src={welcome} alt="admin" />
        </div>
        <div className="col-4">
        <h1> Welcome User </h1>
        </div>
        </div>
    </div>
    </>
  )
}

export default UserProfile