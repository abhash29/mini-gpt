import App from './App.jsx'
import ContextProvider from './Context/context.jsx'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)
