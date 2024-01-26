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
        WEB DEV - FIGMA - APP DEV - FRONTEND - BACKEND - WEB DEV - FIGMA - APP DEV - FRONTEND - BACKEND - WEB DEV - FIGMA - APP DEV - FRONTEND - BACKEND - WEB DEV - FIGMA - APP DEV - FRONTEND - BACKEND - WEB DEV - FIGMA - APP DEV - FRONTEND - BACKEND - WEB DEV - FIGMA - APP DEV - FRONTEND - BACKEND
      </div>
    </div>
  );
}

export default Scroll;
