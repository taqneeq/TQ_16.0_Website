import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';
import RingLoader from "react-spinners/RingLoader";
import "./styles/style.css";
import Sponsors from './pages/Sponsors';
import Rewind from "./pages/Rewind"
import Workshops from './pages/Workshops';
import Contact from "./pages/Contact"
import Schedule from './pages/Schedule';
import './styles/globals.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
	// preloader
	AOS.init();
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
		navigate("/work");
	};

	return (
		<>
			{loading ? (
				<div className='preloader'>
					<RingLoader
						color={"#ffff"}
						loading={loading}
						size={100}
						aria-label="Loading Spinner"
						data-testid="loader"
						className="ringloader"
					/>
					<p className="loading-percentage">{`${loadingPercentage}%`}</p>
				</div>
			) : (
				<Router>
					<Routes>
						<Route path="/" element={<Navigate to="/home" />} />
						<Route path="/home" element={<Home />} />
						<Route
							path="/sponsors"
							element={<Sponsors/>} />
            <Route path="/events" element={<Events />}
						/>
						<Route path="/workshops" element={<Workshops />} />
						<Route path="/about" element={<About />} />
						<Route path="/rewind" element={<Rewind />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/schedule" element={<Schedule />} />
						<Route path="*" element={<Navigate to="/home" />} />
					</Routes>
				</Router>
			)}
		</>
	);

	const navigate = useNavigate();
}

export default App;
