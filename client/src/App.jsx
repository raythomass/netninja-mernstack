import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import axios from 'axios'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'

axios.defaults.baseURL = 'http://localhost:3001';

function App() {
  const { user } = useAuthContext()

  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar/>
      <div className='pages'>
        <Routes>
          <Route
            path='/'
            element={user ? <Home/> : <Navigate to={'/login'}/>}
          /> 
          <Route
            path='/login'
            element={!user ? <Login/> : <Navigate to={'/'}/>}
          /> 
          <Route
            path='/signup'
            element={!user ? <Signup/> : <Navigate to={'/'}/>}
          /> 
        </Routes>

      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
