// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; // If you are using React Router

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full">
      <div className="absolute top-0 left-0 z-50 w-full h-20 bg-black">
        <div className="w-full h-full flex justify-between items-center py-4 px-4 md:px-8 lg:px-12">
          <div className="h-full aspect-square bg-white rounded-full">
            <img
              src="src/assets/logo.png"
              alt="Logo"
              className="h-full aspect-square"
            />
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex gap-4 text-white">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/schedule">Schedule</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/workshops">Workshops</Link>
            </li>
            <li>
              <Link to="/sponsors">Sponsors</Link>
            </li>
            <li>
              <Link to="/collaborations">Collaborations</Link>
            </li>
            <li>
              <Link to="/rewind">Rewind</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <ul
        className={`absolute z-10 ${isOpen ? "top-20" : "-top-full"} right-0 flex flex-col gap-4 bg-neutral-700 shadow-lg shadow-black text-white font-bold uppercase text-center rounded-b-lg p-8 transition-all`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/workshops">Workshops</Link>
        </li>
        <li>
          <Link to="/sponsors">Sponsors</Link>
        </li>
        <li>
          <Link to="/collaborations">Collaborations</Link>
        </li>
        <li>
          <Link to="/rewind">Rewind</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
