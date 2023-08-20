import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/user.store.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import Home from './Components/Home.jsx'
import AddForm from './Components/AddForm.jsx'
import MainPage from './Components/MainPage.jsx'
import CardsDisplay from './Components/CardsDisplay.jsx'

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
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
