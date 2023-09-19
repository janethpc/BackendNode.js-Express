import { NavBarUser } from "../components/NavBarUser";
import welcome from '../assets/images/welcome.png';
import { useEffect, useState } from "react";
import { useAuth } from '../context/AuthContext';
import Products from './Products'; // Asegúrate de importar el componente Products

const UserProfile = () => {
  const [userMail, setUserMail] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    setUserMail(user);
  }, []);

  console.log(userMail);

  return (
    <>
      <NavBarUser />
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

      {/* Pasar userMail como prop al componente Products */}
      <Products userMail={userMail} />
    </>
  );
};

export default UserProfile;