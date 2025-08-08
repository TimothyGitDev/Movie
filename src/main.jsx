import bridge from '@vkontakte/vk-bridge'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MainRoutes } from './MainRoutes.jsx'

bridge.send('VKWebAppInit')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainRoutes />
  </StrictMode>,
)
