import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Offline = () => {
  // const [isOnline, setIsOnline] = useState(true); // Initially assume the user is online
  // const navigate = useNavigate();
  // console.log("Component rendered");

  // useEffect(() => {
  //   const handleOnline = () => {
  //     console.log("Online event triggered");
  //     setIsOnline(true);
  //   };

  //   const handleOffline = () => {
  //     console.log("Offline event triggered");
  //     setIsOnline(false);
  //     navigate("/offline"); // Uncomment if you want to navigate to an offline page
  //   };

  //   console.log("Setting up event listeners");
  //   window.addEventListener('online', handleOnline);
  //   window.addEventListener('offline', handleOffline);

  //   // Cleanup event listeners on component unmount
  //   return () => {
  //     console.log("Cleaning up event listeners");
  //     window.removeEventListener('online', handleOnline);
  //     window.removeEventListener('offline', handleOffline);
  //   };
  // }, [navigate]);

  return  (
    <h1>NO INTERNET IS PRESENT</h1>
  ) 
};

export default Offline;
