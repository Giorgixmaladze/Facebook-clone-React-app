import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import RegisterProvider from './context/RegisterContext.jsx'

createRoot(document.getElementById('root')).render(
<RegisterProvider>
   <BrowserRouter>
    <App />
  </BrowserRouter>,
</RegisterProvider>
 
)
