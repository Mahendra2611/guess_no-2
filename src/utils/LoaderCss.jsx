import React from 'react';

const LoaderCss = () => (
  <div className="w-14 h-14 relative rounded-md bg-white animate-spin">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-75"></div>
      <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-150"></div>
      <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-225"></div>
      <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-300"></div>
      <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-375"></div>
      <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-450"></div>
    </div>
  </div>
);

export default LoaderCss;
