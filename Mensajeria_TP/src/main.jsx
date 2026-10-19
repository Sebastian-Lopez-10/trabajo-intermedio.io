import './index.css'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

import RenderContextProvider from './Context/RenderContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <RenderContextProvider>
  <App />
  </RenderContextProvider>
  </BrowserRouter>
  
)
