import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Gallery from './Component'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* components can be used like custon html tags */}
    <App/>
  </StrictMode>,
)
