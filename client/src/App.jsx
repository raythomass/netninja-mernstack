import {BrowserRouter, Routes, Route} from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Home from './pages/Home'
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
        </Routes>

      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
