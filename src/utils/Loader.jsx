// src/component/Loader.js
import React from 'react';
import './Loader.css'; // Import the custom CSS for keyframes

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
