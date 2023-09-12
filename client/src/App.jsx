import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RegisterPages from './pages/RegisterPages';
import LoginPages from './pages/LoginPages';
import { AuthProvider } from './context/AuthContext';
import UserProfile from './pages/UserProfile';
import AdminProfile from './pages/AdminProfile';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import Categories from './pages/Categories';
import EditUsers from './pages/EditUsers';
import EditProducts from './pages/EditProducts';
import ProtectedRouter from './protectedRouter';
import './App.css'


const App = () => {
  return (
    <AuthProvider>
    <BrowserRouter> 
      <Routes>
        

      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPages/>}/>
      <Route path='/register' element={<RegisterPages/>}/>
        
      <Route element={<ProtectedRouter/>}>
      <Route path='/products' element={<Products/>}/>
      <Route path='/product' element={<EditProducts/>}/>
      <Route path='/profile' element={<UserProfile/>}/>
      <Route path='/profile/admin' element={<AdminProfile/>}/>
      <Route path='/category' element={<Categories/>}/>
      <Route path='/user' element={<EditUsers/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App

