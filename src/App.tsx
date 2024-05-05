import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import CreateContact from './components/CreateContact'
import Dashboard from './pages/Dashboard';

// Main component of the application
function App() {
  //rendering routes for different paths
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path='/create-contact' element={<CreateContact />} />
    </Routes>
  );
}

export default App;
