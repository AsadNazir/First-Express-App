import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import AddForm from './Components/AddForm.jsx'
import CardsDisplay from './Components/CardsDisplay.jsx'
import Home from './Components/home.jsx'

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
        children: [
          {
            path: "/home/Add",
            element: <AddForm />
          },
          {
            path: "/home",
            element: <CardsDisplay />
          }
        ]
      }
      ,

    ]
  },


]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
