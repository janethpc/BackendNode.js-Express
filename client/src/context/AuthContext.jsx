import { createContext, useState, useContext } from "react";
import {registerRequest} from '../api/auth'


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
        const userDataWithRole = res.data;
        const userIsAdmin = userDataWithRole.rol === "admin";
        //console.log(res.data);
        setUser(res.data)
        setIsAuthenticated(true)
        setIsAdmin(userIsAdmin)
       }catch (error) {
            console.log(error.response.data)
            setAllError(error.response.data)
       }
    };

    return (
        <AuthContext.Provider value={{
            singUp,
            user,
            isAuthenticated,
            isAdmin,
            allErrors
        }}>
            {children}
        </AuthContext.Provider>
    )
}