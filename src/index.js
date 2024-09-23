import React from 'react';
import ReactDOM from 'react-dom/client';
// Import BrowserRouter, Routes, and Route
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Import style
import "./Style/style.css";
//Import Pages
import HomePage from './Pages/Home';
import Search from './Pages/Search';
import Booking from './Pages/Booking';
import About from './Pages/About';
/*-----------*/
import { ListeProvider } from './utils/Liste-info';
import Register from './Pages/Register';
import { Sign_in } from './Pages/Sign in';
import Sign_Up from './Components/Sign up/Section-1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Booking' element={<Booking/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Sign-Up' element={<Sign_Up/>}/>
          <Route path='/Sign-in' element={<Sign_in/>}/>
        </Routes>
      </BrowserRouter>
    </ListeProvider>
  </React.StrictMode>
);
