import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Component/Router/Route.jsx'
import AuthProvaiders from './Component/Provaider/AuthProvaiders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvaiders>
       <RouterProvider router={router} />
    </AuthProvaiders>
      
  </React.StrictMode>,
)
