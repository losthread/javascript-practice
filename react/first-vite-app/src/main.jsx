import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Gallery from './Component'
import Avatar from './Avatar'
import Profile from './Props'
import PackingList from './Conditionalrendering'
import List from './FilterMap'
import Toolbar from './Events'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* components can be used like custon html tags */}
    <App/>
    <Profile />
    <PackingList />
    <List />
    <Toolbar />
  </StrictMode>,
)
