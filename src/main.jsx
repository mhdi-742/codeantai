import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './context.jsx'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <AppProvider> 
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AppProvider>
)
