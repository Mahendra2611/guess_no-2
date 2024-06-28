import React from 'react';

const CustomButton = ({ children, onClick }) => {
  return (

    <button
      className="btn-7 px-2 py-2 font-semibold rounded-lg  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 hover:scale-110"
      onClick={onClick}
    >
      <span >
        {children}
      </span>

    </button>
  );
};

export default CustomButton;
