import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenReq } from '../api/auth'
import Cookies from 'js-cookie';

export const AuthContext = createContext();


export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
};

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [allErrors, setAllError] = useState([]);
  const [loading, setLoading] = useState(true);


  const singUp = async (user, navigate) => {
    try {
      const res = await registerRequest(user);
      const userData = res.data; // Obtiene la información del usuario
      setUser(userData);
      setIsAuthenticated(true);
      navigate('/profile'); // Redirige a la ruta del perfil del usuario
    } catch (error) {
      console.log(error.response.data)
      setAllError(error.response.data)
    }
};

  const signin = async (user, navigate) => {
  
    try {
      const res = await loginRequest(user);
      
      const userDataWithRole = res.data.user;
      const userIsAdmin = userDataWithRole.role
      //console.log(userIsAdmin)

      setUser(userDataWithRole);
      setIsAuthenticated(true);
      setIsAdmin(userIsAdmin)
      
      if (userIsAdmin) {
        navigate('/profile/admin'); // Redirige a la ruta del panel de administrador
      } else {
        navigate('/profile'); // Redirige a la ruta del usuario normal
      }

    } catch (error) {
      console.log(error);
      setAllError([...allErrors, error.response.data]);
    }
  };

  useEffect(() => {
    if (allErrors.length > 0) {
      const timer = setTimeout(() => {
        setAllError([])
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [allErrors])

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();

      if(!cookies.token){
        setIsAuthenticated(false);
        setLoading(false)
        return setUser(null)
      }
      try{
        const res = await verifyTokenReq(cookies.token);
        if(!res.data){
          setIsAuthenticated(false),
          setLoading(false)
          return;
        }
        setIsAuthenticated(true)
        setUser(res.data)
        setLoading(false)
      }catch (error) {
        console.log(error)
        setIsAuthenticated(false)
        setUser(null)
        setLoading(false)
      }
       }
       checkLogin();
  }, []);

  return (
    <AuthContext.Provider value={{
      singUp,
      user,
      isAuthenticated,
      isAdmin,
      allErrors,
      signin,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  )
}