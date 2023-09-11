import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RegisterPages from './pages/RegisterPages';
import LoginPages from './pages/LoginPages';
import { AuthProvider } from './context/AuthContext';


const App = () => {
  return (
    <AuthProvider>
    <BrowserRouter> 
      <Routes>
      <Route path='/' element={<h1>Home Page</h1>}/>
      <Route path='/login' element={<LoginPages/>}/>
      <Route path='/register' element={<RegisterPages/>}/>
      <Route path='/product' element={<h1>products</h1>}/>
      <Route path='/profile' element={<h1>profile</h1>}/>
      <Route path='/profile/admin' element={<h1>profile admin</h1>}/>
      <Route path='/category' element={<h1>categorias</h1>}/>
      <Route path='/user' element={<h1>usuarios</h1>}/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App

