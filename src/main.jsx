import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'animate.css'
import './index.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
