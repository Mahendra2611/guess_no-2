import React, { useContext } from 'react';
import bgimg from '../IMG/bg.png'; // Assuming this is the correct path to your background image
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleNavigation = ()=>{
    navigate("/body")
  }
  return (
    <div className="h-screen flex justify-center items-center" style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="text-center">
        <button onClick={handleNavigation} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-110 w-[70%] text-xl sm:text-2xl">
          GUESS THE NUMBER GAME
        </button>
      </div>
    </div>
  );
};

export default Home;
