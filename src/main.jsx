import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router } from './Routes/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
)
