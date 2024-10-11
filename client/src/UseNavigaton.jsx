import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const UseAuthNavigation = (redirectTo = '/login') => {
  const navigate = useNavigate();
  const { loading, isAuthenticated } = useAuth();

  useEffect(() => {
    // Si el usuario no está autenticado y la autenticación ha finalizado (loading es falso),
    // redirige al usuario a la página de inicio de sesión (o la ruta especificada).
    if (!isAuthenticated && !loading) {
      navigate(redirectTo);
    }
  }, [isAuthenticated, loading, navigate, redirectTo]);

  return isAuthenticated;
};

export default UseAuthNavigation;
