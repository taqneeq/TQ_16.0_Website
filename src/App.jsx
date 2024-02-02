import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Bytes from "./pages/Byte";
import About from "./pages/About";
import Rewind from "./pages/Rewind";
import Contact from "./pages/Contact";
import RingLoader from "react-spinners/RingLoader";
import "./styles/style.css";

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
		navigate("/work");
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
						className="ringloader"
					/>
					<p className="loading-percentage">{`${loadingPercentage}%`}</p>
				</>
			) : (
				<Router>
					<Routes>
						<Route path="/" element={<Navigate to="/home" />} />
						<Route path="/home" element={<Home />} />
						<Route
							path="/work"
							element={<Work navigateToWork={navigateToWork} />}
						/>
						<Route path="/bytes" element={<Bytes />} />
						<Route path="/about" element={<About />} />
						<Route path="/rewind" element={<Rewind />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="*" element={<Navigate to="/home" />} />
					</Routes>
				</Router>
			)}
		</div>
	);

	const navigate = useNavigate();
}

export default App;
