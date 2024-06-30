import React, { useContext ,useEffect} from 'react'
import { createBrowserRouter, RouterProvider,Navigate, useNavigate } from 'react-router-dom'
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
import Offline from './utils/Offline'
import { ToastContainer } from "react-toastify";
import ErrorElement from './components/ErrorElement'
import Loader from './utils/Loader'
import AppChild from './AppChild'
const Authentication = ({children})=>{
  const {IsAuthenticated} = useContext(GlobalContext)
  return IsAuthenticated?children:<Navigate to={"/"}/>
}

const App = () => {
  const {IsAuthenticated} = useContext(GlobalContext)
  console.log(IsAuthenticated)
  const AppProvider = createBrowserRouter([
    {
      path:"/",
      element:<AppChild/>,
      errorElement:<ErrorElement/>,
      children:[{
        path: "/",
        element: <Homepage/>,
        errorElement:<ErrorElement/>
      },
      {
        path: "/body",
        element: <Authentication><Body/></Authentication>,
        errorElement:<ErrorElement/>
      },
      {
        path: "/login",
        element: <Login/>,
        errorElement:<ErrorElement/>
      },
      {
        path: "/signup",
        element: <SignUp/>,
        errorElement:<ErrorElement/>
      },
      {
        path: "/home",
        element:  <Authentication><Home/></Authentication>,
        errorElement:<ErrorElement/>
      },
      {
        path: "/gameover",
        element: <Authentication><GameOver/></Authentication>,
        errorElement:<ErrorElement/>
      },
      {
        path: "/leaderboard",
        element:  <Authentication><LeaderBoard/></Authentication>,
        errorElement:<ErrorElement/>
      },
      {
        path:"/offline",
        element:<Offline/>
      }
      ,
    ]
    }
    ])
  return (
    <div>
      <GlobalProvider>
         
        <RouterProvider router={AppProvider} />
        <ToastContainer/>
      </GlobalProvider>
    </div>
  )
}

export default App
