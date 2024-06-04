import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router } from './Routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
    <Toaster />
  </React.StrictMode>,
)
