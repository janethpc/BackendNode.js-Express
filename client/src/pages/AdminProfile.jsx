import { NavBarAdmin } from "../components/NavBarAdmin"
import adminPage from '../assets/images/adminPage.png'

import './AdminProfile.css'

const AdminProfile = () => {
  
  

  return (
    < >
    <NavBarAdmin/>
    <div className="container text-center" id="alingCenter">
      <div className="row row-cols-2 align-items-center justify-content-center">
        <div className="col-4">
        <img src={adminPage} alt="admin" />
        </div>
        <div className="col-4">
        <h1> Welcome Admin </h1>
        </div>
        </div>
    </div>
    </>
  )
}

export default AdminProfile