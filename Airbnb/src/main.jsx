import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack';
import { UserProvider } from './modules/Login/context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <BrowserRouter>
    <SnackbarProvider >
      <App />
    </SnackbarProvider>
    </BrowserRouter>
    </UserProvider>
  </StrictMode>,
)
