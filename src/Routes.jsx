import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Section1 from "./components/Section1";
import PageForm from "./components/PageForm";

const Routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Section1" element={<Section1 />} />
        <Route path="/PageForm" element={<PageForm />} />
      </Routes>
      
    </Router>
  );
}

export default Routes;
