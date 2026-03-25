import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import ProjectsAndroid from './ProjectsAndroid.jsx';
import ProjectsDocker from './ProjectsDocker.jsx';
import ProjectsFirefox from './ProjectsFirefox.jsx';
import ProjectsVSCode from './ProjectsVSCode.jsx';
import ProjectsScripts from './ProjectsScripts.jsx';
import ProjectsHelm from './ProjectsHelm.jsx';
import TrainingCKA from './TrainingCKA.jsx';
import TrainingLinux from './TrainingLinux.jsx';
import Podcasts from './Podcasts.jsx';
import Certifications from './Certifications.jsx';
import Diplomas from './Diplomas.jsx';
import Toolkits from './Toolkits.jsx';

import './index.css';
import 'bulma/css/bulma.min.css';

// Import i18n configuration
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/training/cka" element={<TrainingCKA />} />
        <Route path="/training/linux" element={<TrainingLinux />} />
        <Route path="/projects/android" element={<ProjectsAndroid />} />
        <Route path="/projects/docker" element={<ProjectsDocker />} />
        <Route path="/projects/firefox" element={<ProjectsFirefox />} />
        <Route path="/projects/vscode" element={<ProjectsVSCode />} />
        <Route path="/projects/scripts" element={<ProjectsScripts />} />
        <Route path="/projects/helm" element={<ProjectsHelm />} />
        <Route path="/diplomas" element={<Diplomas />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/ai-podcasts" element={<Podcasts />} />
        <Route path="/digital-assets-toolkits" element={<Toolkits />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
