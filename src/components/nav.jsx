import React from 'react';
const Nav = () => {
  return (
    <div className ="navstuff">
    <nav className="navMenu">
      <a href="/home">Home</a>
      <a href="/about">About</a>
      <a href="/Schedule">Schedule</a>
      <a href="/Workshops">Workshops</a>
      <a href="/Events">Events</a>
      <a href="/Collaborations">Collaborations</a>
      <a href="/Sponsors">Sponsors</a>
      <a href="/Rewind">Rewind</a>
      <a href="/contact">Contact</a>
      <div className="dot"></div>
    </nav>
  </div>
  );
}

export default Nav;
