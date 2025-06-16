import React, { useState, useEffect } from 'react'
import Home from './Pages/Home'
import Contact from './Pages/Contact';
import About from './Pages/About';
import AnimateText from './Components/AnimateText';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./index.css";

const LandingPage = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const navigate = useNavigate();

  const handleAnimationComplete = () => {
    setShowPortfolio(true);
    navigate('/home');
  };

  return (
    <div className="relative">
      <AnimateText onAnimationComplete={handleAnimationComplete} />
      
      {showPortfolio && (
        <div className="fixed inset-0 z-40 overflow-y-auto">
          <Home />
        </div>
      )}
    </div>
  );
};

const AppContent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
    }
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

const App = () => {
  return (
    <div className=''>
      <Router>
        <AppContent />
      </Router>
    </div>
  );
};

export default App