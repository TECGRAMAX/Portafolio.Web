import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx'; 
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // 👈 Importamos HelmetProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App /> 
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
