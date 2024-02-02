import React from "react";
import Hero from "../components/hero";
import Nav from "../components/nav";
import Scroll from "../components/scroll";
import Projects from "../components/projects";
import "../styles/style.css";
import Cards from "../components/cards";

const Home = () => {
	return (
		<div className="home">
			<Nav />
			<Hero />
			<Scroll />
			<Projects />
			<Cards />
		</div>
	);
};

export default Home;
