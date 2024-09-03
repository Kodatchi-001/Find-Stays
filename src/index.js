import React from 'react';
import ReactDOM from 'react-dom/client';
//Import style
import "./Style/style.css";
//Import Pages
import HomePage from './Pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
