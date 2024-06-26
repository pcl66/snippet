import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@renderer/assets/index.css'
import '@renderer/assets/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
