import {BrowserRouter, Routes, Route} from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'

axios.defaults.baseURL = 'http://localhost:3001';

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar/>
      <div className='pages'>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/login' element={<Login/>}/> 
          <Route path='/signup' element={<Signup/>}/> 
        </Routes>

      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
