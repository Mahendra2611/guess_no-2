import React from 'react';
import home from "./images/home.png";

const Homepage = () => {
  return (
    <div>
     <div 
      className="h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: `url(${home})` }}
    >
 <a href="/login" class="relative inline-block px-4 py-2 font-medium group">
<span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
<span class="relative text-black group-hover:text-white">Lets Play</span>
</a>
    </div>
    </div>
  )
}

export default Homepage;
