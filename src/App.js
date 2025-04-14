// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginBox from './LoginBox';      
import RegisterBox from './RegisterBox';
import MainEditor from './MainEditor';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root "/" to "/login" */}
        <Route path="/" element={<MainEditor />} />

        {/* Login page */}
        <Route path="/login" element={<LoginBox />} />

        {/* Register page */}
        <Route path="/register" element={<RegisterBox />} />
      </Routes>
    </Router>
  );
}

export default App;
