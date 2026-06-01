import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {GlobalProvider} from "./context/GlobalContext";
import { UserProvider } from './context/Usercontext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider>
     <UserProvider>
       <App />
     </UserProvider>
    </GlobalProvider>
  </StrictMode>,
)
