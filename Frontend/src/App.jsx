import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Component/Pages/Navbar/Navbar'
import Footer from './Component/Pages/Footer/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
function App() {


  return (
    <>
    <Navbar></Navbar>
       <Outlet></Outlet>
          {/* Whatsapp button */}
          <div className="App">
              <FloatingWhatsApp
                phoneNumber="01954311300"
                accountName="Mehedi Hasan "
                allowEsc
                allowClickAway
                notification
                notificationSound
              />
            </div>
    <Footer></Footer>
    </>
  )
}

export default App
