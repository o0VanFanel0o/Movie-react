import React from 'react'
import ReactDOOM from "react-dom/client"

import { BrowserRouter } from 'react-router-dom'
import './index.css'

import App from './App.jsx'

ReactDOOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
