import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Outlet } from 'react-router-dom'
import { verify } from './Service/service'

function App() {
 

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
