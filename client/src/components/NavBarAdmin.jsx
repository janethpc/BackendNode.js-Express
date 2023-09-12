import { Link } from 'react-router-dom';
import comprasImage from '../assets/images/compras.png';


export const NavBarAdmin = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id='colorNav'>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/profile/admin">
                        <img src={comprasImage} alt="compras" width="30" height="24" className="d-inline-block align-text-top" />
                        Shoping
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to="/product" className="nav-link">
                                Products
                            </Link>
                            <Link to='/category' className='nav-link'>
                                Categories
                            </Link>
                            <Link to='/user' className='nav-link'>
                                Users 
                            </Link>
                        </ul>
                        <div className='aling-items-end'>
                            <Link to='/login' className='nav-link'>
                           <button className='btn btn-danger btn-sm'> Logout </button> 
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
