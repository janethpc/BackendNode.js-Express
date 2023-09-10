import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RegisterPages from './pages/RegisterPages';
import LoginPages from './pages/LoginPages';


const App = () => {
  return (
    <BrowserRouter> 
      
      <Routes>

      <Route path='/' element={<h1>Home Page</h1>}/>
      <Route path='/login' element={<LoginPages/>}/>
      <Route path='/register' element={<RegisterPages/>}/>
      <Route path='/product' element={<h1>products</h1>}/>
      <Route path='/category' element={<h1>category</h1>}/>
      <Route path='/user' element={<h1>usuarios</h1>}/>
      <Route path='/add-product' element={<h1>add product</h1>}/>
      <Route path='/product/:id' element={<h1>update product</h1>}/>
      <Route path='/profile/admin' element={<h1> profile</h1>}/>
      
      </Routes>



    </BrowserRouter>
      
  )
}

export default App

