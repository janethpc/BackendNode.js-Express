import { useContext, createContext, useState, useEffect  } from 'react'



const authContext = createContext({
    isAuthenticated: false
});

export const AuthProvider = ({children}) => {
  
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
    <authContext.Provider value={{isAuthenticated}}>
        {children}
    </authContext.Provider>
    );
};

export const useAuth = () => useContext(authContext);
