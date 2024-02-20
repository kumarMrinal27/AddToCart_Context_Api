import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CounterProvider } from './context/Counter.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterProvider>
      {/* by doing above line, all the child components including App component , can use the context that we have made. */}
    <App />
    </CounterProvider>
  </React.StrictMode>,
)
