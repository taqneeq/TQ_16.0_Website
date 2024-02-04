import React, { useEffect, useRef } from 'react';
import '../styles/style.css';

const Scroll = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  let position = containerRef.current?.offsetWidth || 0;

  useEffect(() => {
    const scrollText = () => {
      position--;
      if (position < -textRef.current?.offsetWidth) {
        position = containerRef.current?.offsetWidth || 0;
      }
      textRef.current.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(scrollText);
    }
    requestAnimationFrame(scrollText);
  }, []);

  return (
    <div className="scroll-container" ref={containerRef}>
      <div className="scroll-text" ref={textRef}>
       ROD DROPPER - INNOVATION - THE TALK  - INNOVATION - TECH EXPO - INNOVATION -  ROD DROPPER - INNOVATION - THE TALK  - INNOVATION - TECH EXPO - INNOVATION -  ROD DROPPER - INNOVATION - THE TALK  - INNOVATION - TECH EXPO - INNOVATION -  ROD DROPPER - INNOVATION - THE TALK  - INNOVATION - TECH EXPO - INNOVATION -  ROD DROPPER - INNOVATION - THE TALK  - INNOVATION - TECH EXPO - INNOVATION
      </div>
    </div>
  );
}

export default Scroll;
