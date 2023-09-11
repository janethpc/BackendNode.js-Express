import { createContext, useState, useContext, useEffect } from "react";
import {registerRequest, loginRequest} from '../api/auth'
import { useNavigate  } from 'react-router-dom';

export const AuthContext = createContext();


export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
};

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [ allErrors, setAllError] = useState([])

    const singUp = async (user) => {
       try{
        const res = await registerRequest(user);
       
        //console.log(res.data);
        setUser(res.data)
        setIsAuthenticated(true)
        
       }catch (error) {
            console.log(error.response.data)
            setAllError(error.response.data)
       }
    };

    const signin = async (user, navigate) => {
        

        try {
          const res = await loginRequest(user);
          const userDataWithRole = res.data;
          const userIsAdmin = userDataWithRole.rol === "admin";

          setUser(res.data);
          setIsAuthenticated(true);
          setIsAdmin(userIsAdmin)

          if (userIsAdmin) {
            navigate('/profile/admin'); // Redirige a la ruta del panel de administrador
          } else {
            navigate('/profile'); // Redirige a la ruta del usuario normal
          }

        } catch (error) {
          console.log(error);
          // setAllError(error.response.data.message);
        }
      };

    useEffect(() =>{
        if(allErrors.length > 0){
           const timer = setTimeout(()=>{
                setAllError([])
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [allErrors])

    return (
        <AuthContext.Provider value={{
            singUp,
            user,
            isAuthenticated,
            isAdmin,
            allErrors,
            signin
        }}>
            {children}
        </AuthContext.Provider>
    )
}