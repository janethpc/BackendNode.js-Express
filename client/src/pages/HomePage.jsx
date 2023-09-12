import comprasImage from '../assets/images/compras.png'; 
import { Link } from 'react-router-dom';
import '../pages/HomePage.css'

const HomePage = () => {
  return (
    <div className='container text-center' id='background'>
      <img src={comprasImage} alt="compras" />
      <h1>Ready to Shop?</h1>
      <p>Log in now or register to get started!</p>
      <div>
        <div className='row justify-content-evenly'>
        <div className='col-4'>
        <Link to="/login">
          <button className="btn btn-primary">Log In</button>
        </Link>
        </div>
        <div className='col-4' id='buttonregister'>
        <Link to="/register">
          <button className="btn btn-success">Register Now</button>
        </Link>
        </div>
        </div>
      </div>
      </div>
  );
}

export default HomePage;






