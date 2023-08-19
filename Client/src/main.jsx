import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import Home from './Components/Home.jsx'

//Main Router Browser Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/home",
        element: <Home />,
      }
    ]
  },


]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
