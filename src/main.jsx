import { createRoot } from 'react-dom/client'
import { App } from './app.jsx'
import './global.css'
import './styles.css'

const rootElement = document.querySelector("[data-js='root']")

const root = createRoot(rootElement)

root.render(<App />)
