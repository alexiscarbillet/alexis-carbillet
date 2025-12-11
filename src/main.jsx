import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Projects from './Projects.jsx';
import Training from './Training.jsx';
import Podcasts from './Podcasts.jsx';

import './index.css';
import 'bulma/css/bulma.min.css';

// Import i18n configuration
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/training" element={<Training />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/podcasts" element={<Podcasts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
