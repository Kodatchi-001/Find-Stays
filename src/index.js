import React from 'react';
import ReactDOM from 'react-dom/client';
// Import BrowserRouter, Routes, and Route
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Import style
import "./Style/style.css";
//Import Pages
import HomePage from './Pages/Home';
import Search from './Pages/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Search' element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
