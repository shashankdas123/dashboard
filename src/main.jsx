
import React from "react";
import { createRoot } from 'react-dom/client'

import Homepage from "./components/Homepage";


import { BrowserRouter, Route, Routes } from "react-router-dom";

import './index.css'
import 'react-toastify/dist/ReactToastify.css';

// import './react-toastify/dist/ReactToastify.css'
import { Login, Signup } from "./pages";
import Home from "./pages/Home";

createRoot(document.getElementById('root')).render(
  
    
      
          <BrowserRouter>
      <Routes>
      <Route path="/*" element={<Homepage />} />
      
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>



    
  
)


