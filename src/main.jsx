import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import AppRoutes from "./routes/AppRoutes.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
