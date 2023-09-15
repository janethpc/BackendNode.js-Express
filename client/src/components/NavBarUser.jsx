import { Link } from 'react-router-dom';
import comprasImage from '../assets/images/compras.png';
import carros from '../assets/images/carros.png'


export const NavBarUser = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg " id='colorNav'>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/profile/admin" id='colorFond'>
                        <img src={comprasImage} alt="compras" width="30" height="24" className="d-inline-block align-text-top" />
                        Shoping
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to="/products" className="nav-link" id='colorFond'>
                                Products
                            </Link>
                        </ul>
                        <div className='aling-items-end'>
                        <a className="navbar-brand" href="/profile/admin" id='colorFond'>
                        <img src={carros} alt="compras" width="30" height="24" className="d-inline-block align-text-top" />
                        
                    </a>
                   
                            <button className='btn btn-danger btn-sm'>
                            <Link to='/' className='nav-link '>
                            Logout  
                            </Link>
                            </button>
                        
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}