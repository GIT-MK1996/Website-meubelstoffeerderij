import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './Pages/HomePage';
import OverOnsPage from './Pages/OverOnsPage';
import TeKoopPage from './Pages/TeKoopPage';
import DienstenPage from './Pages/DienstenPage';
import ResultatenPage from './Pages/ResultatenPage';
import StoffenPage from './Pages/StoffenPage';

function App() {
  return (
    <div className="bg-secondary-subtle min-vh-100 py-2">

    
      <Router>
        <div className="main-wrapper mx-auto my-3 p-2 bg-light rounded shadow" style={{ maxWidth: "1200px" }}> 
          
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/over-ons" element={<OverOnsPage />} />
            <Route path="/te-koop" element={<TeKoopPage />} />
            <Route path='/resultaten' element={<ResultatenPage />} />
            <Route path='/stoffen' element={<StoffenPage />} />
            <Route path='/onze-diensten' element={<DienstenPage />} />
          </Routes>
        </div>
        
      </Router>
    </div>
  );
}

export default App;


