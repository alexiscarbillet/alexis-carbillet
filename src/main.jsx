import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Fiverr from './Fiverr.jsx'
import Projects from './Projects.jsx'
import Training from './Training.jsx'
import './index.css';
import 'bulma/css/bulma.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Training" element={<Training />} />
        <Route path="/Fiverr" element={<Fiverr />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);