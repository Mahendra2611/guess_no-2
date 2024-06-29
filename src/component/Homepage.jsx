import React, { useContext } from 'react';
import home from "./images/home.png";
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../utils/ContextAPI';

const Homepage = () => {
  const navigate = useNavigate();
  const {IsAuthenticated} = useContext(GlobalContext)
  console.log("home page called")
  const handleClick = ()=>{
   if(IsAuthenticated){
    console.log("home page called auth")
    navigate("/home")
   }
    else{
      console.log("home page login")
      navigate("/login")
    }
  }
 
  return (
    <div>
     <div 
      className="h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: `url(${home})` }}
    >
 <div className="relative inline-block px-4 py-2 font-medium group">
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
<span className="relative text-black group-hover:text-white"><button onClick={handleClick}>Lets Play</button></span>
</div>
    </div>
    </div>
  )
}

export default Homepage;
