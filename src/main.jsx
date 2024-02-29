import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Section1 from './components/Section1.jsx';
import PageForm from './components/PageForm.jsx';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
    <Router>
      <App />
      <Routes>
        <Route path="/Section1" element={<Section1 />} />
        <Route path="/PageForm" element={<PageForm />} />
      </Routes>
    </Router>
  
);

