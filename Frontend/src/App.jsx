import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Component/Pages/Navbar/Navbar'
import Footer from './Component/Pages/Footer/Footer'

function App() {


  return (
    <>
    <Navbar></Navbar>
       <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
