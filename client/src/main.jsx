import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
=======
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>

>>>>>>> bfd9f49f88d9fd8cf41bcdcae49f99d6af971de2
    <App />
  </BrowserRouter>,
)
