import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './routes/Login.jsx'
import SingUp from './routes/SingUp.jsx'
import { Dashboard } from './routes/Dashboard.jsx'
import { ProtectedRout } from './routes/ProtectedRout.jsx'
import { AuthProvider } from './auth/AuthProvider.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>

  },
  {
    path: "/singup",
    element: <SingUp/>

  },
  {
    path: "/",
    element: <ProtectedRout/>, 
    children: [
      {
        path: "/dashboard",
        element: <Dashboard/>
    },
  ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
