import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Workshops from './pages/Workshops';
import Event from './pages/events';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Contact from './pages/contact';
import Collaborations from './pages/collaborations';
import Sponsors from './pages/Sponsors'
import Rewind from './pages/rewind'
import RingLoader from "react-spinners/RingLoader";
import './styles/style.css'

function App() {
  // preloader
  const [loading, setLoading] = useState(false);
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    setLoading(true);
    let percentage = 0;
    const interval = setInterval(() => {
      if (percentage >= 100) {
        clearInterval(interval);
        setLoading(false);
      } else {
        percentage += 5;
        setLoadingPercentage(percentage);
      }
    }, 150);
  }, []);

  const navigateToWork = () => {
    navigate('/workshops');
  };

  return (
    <div className="preloader">
      {loading ? (
        <>
          <RingLoader
            color={"#ffff"}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
            className='ringloader'
          />
          <p className="loading-percentage">{`${loadingPercentage}%`}</p>
        </>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/workshops" element={<Workshops navigateToWork={navigateToWork} />} />
            <Route path="/event" element={<Event />} />
            <Route path="/collaborations" element={<Collaborations />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/about" element={<About />} />
            <Route path="/rewind" element={<Rewind />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </Router>
      )}
    </div>
  );

  const navigate = useNavigate();
}

export default App;
