import React, { useContext } from 'react'
import { createBrowserRouter, RouterProvider,Navigate } from 'react-router-dom'
import Home from './components/Home'
import Body from './components/Body'
import GlobalProvider, { GlobalContext } from './utils/ContextAPI'
import GameOver from './components/GameOver'
import LeaderBoard from './components/LeaderBoard'
import Header from "./component/Header";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Homepage from "./component/Homepage";
import { auth } from "./component/firebase";
import { ToastContainer } from "react-toastify";

const App = () => {
 
  const AppProvider = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>
    },
    {
      path: "/body",
      element: <Body />
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/signup",
      element: <SignUp/>
    },
    {
      path: "/home",
      element: <Home/>
    },
    {
      path: "/gameover",
      element:<GameOver/>
    },
    {
      path: "/leaderboard",
      element: <LeaderBoard />
    }
  ])
  return (
    <div>
      <GlobalProvider>
         <Header/>
        <RouterProvider router={AppProvider} />
        <ToastContainer/>
      </GlobalProvider>
    </div>
  )
}

export default App
