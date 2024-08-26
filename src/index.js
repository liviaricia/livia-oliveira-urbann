import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import db from './services/firebase';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
