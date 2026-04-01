import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import Gallery from './Component'
import Avatar from './Avatar'
import Profile from './Props'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* components can be used like custon html tags */}
    <App/>
    <Profile />
  </StrictMode>,
)
