import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
// import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
// import './index.css'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "router"}>
      <App />

    </BrowserRouter>

  </StrictMode>,
);

//https://jvalbjorn.github.io/router/