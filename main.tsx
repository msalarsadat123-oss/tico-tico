import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Boundary } from './Boundary'
import './fonts.css'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode><Boundary fallback={<p style={{ padding: 40 }}>TicoTico</p>}><App /></Boundary></StrictMode>
)
