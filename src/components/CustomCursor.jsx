import React, { useState, useEffect } from 'react';
import '../App.css';

const CustomCursor = () => {
  // State to store mouse coordinates
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Effect to track mouse movement
  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener for mouse movement
    window.addEventListener('mousemove', updateCursorPosition);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;