import React from "react";
const Nav = () => {
	return (
		<div className="navstuff">
			<nav className="navMenu">
				<a href="/home">Home</a>
				<a href="/bytes">Bytes</a>
				<a href="/work">Work</a>
				<a href="/about">About</a>
				<a href="/rewind">Rewind</a>
				<a href="/contact">Contact</a>
				<div className="dot"></div>
			</nav>
		</div>
	);
};

export default Nav;
