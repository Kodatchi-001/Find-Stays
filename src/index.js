import React from 'react';
import ReactDOM from 'react-dom/client';
// Import BrowserRouter, Routes, and Route
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Import style
import "./Style/style.css";
//Import Pages
import HomePage from './Pages/Home';
import Search from './Pages/Search';
import { ListeProvider } from './utils/Liste-info';
import Booking from './Pages/Booking';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Booking' element={<Booking/>}/>
        </Routes>
      </BrowserRouter>
    </ListeProvider>
  </React.StrictMode>
);
