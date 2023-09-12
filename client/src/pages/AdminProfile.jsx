import { NavBarAdmin } from "../components/NavBarAdmin"
import adminPage from '../assets/images/adminPage.png'
import './AdminProfile.css'

const AdminProfile = () => {
  return (
    < >
    <NavBarAdmin/>
    <div className="container text-center" id="alingCenter">
        <img src={adminPage} alt="admin" />
        <h1> Welcome Admin </h1>
    </div>
    </>
  )
}

export default AdminProfile