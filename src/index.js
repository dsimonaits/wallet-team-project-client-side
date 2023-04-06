import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './stylesheet/index.css';
import './stylesheet/vars.css';
import './stylesheet/fonts.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="wallet-team-project-client-side"></BrowserRouter>
    <App />
  </React.StrictMode>
);
