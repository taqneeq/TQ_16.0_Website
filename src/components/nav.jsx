// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold"><img src='src/assets/logo.png' width={64}></img></Link>
        
        {/* Hamburger menu for mobile */}
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

        {/* Navbar links */}
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
            <li><Link to="/" className="text-white">Home</Link></li>
            <li><Link to='/schedule' className='text-white'>Schedule</Link></li>
            <li><Link to="/events" className="text-white">Events</Link></li>
            <li><Link to="/workshops" className="text-white">Workshops</Link></li>
            <li><Link to='/sponsors' className='text-white'>Sponsors</Link></li>
            <li><Link to="/collaborations" className="text-white">Collaborations</Link></li>
            <li><Link to="/rewind" className="text-white">Rewind</Link></li>
            <li><Link to="/contact" className="text-white">Contact</Link></li>
 
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
