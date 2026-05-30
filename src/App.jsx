import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Login from './pages/login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
