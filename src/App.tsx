
import { createRoot } from 'react-dom/client'
import './index.css'

import Router from './Components/Router.tsx'
import Header from './Components/Header.tsx'

createRoot(document.getElementById('root')!).render(
  <div>
    <Header/>
    <Router/>
  </div>
)
