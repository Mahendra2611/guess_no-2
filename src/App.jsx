import React, { useContext } from 'react'
import { createBrowserRouter, RouterProvider,Navigate } from 'react-router-dom'
import Home from './components/Home'
import Body from './components/Body'
import GlobalProvider, { GlobalContext } from './utils/ContextAPI'
import GameOver from './components/GameOver'
import LeaderBoard from './components/LeaderBoard'
const App = () => {
 
  const AppProvider = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/body",
      element: <Body />
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
        <RouterProvider router={AppProvider} />
      </GlobalProvider>
    </div>
  )
}

export default App
