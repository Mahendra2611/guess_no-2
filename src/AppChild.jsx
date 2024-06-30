import React from 'react'
import Header from './component/Header'
import { Outlet } from 'react-router-dom'
const AppChild = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default AppChild
