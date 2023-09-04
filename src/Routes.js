import React from 'react'
import { Routes as RouterRoutes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'

const Routes = () => {
  return (
    <RouterRoutes>
        <Route path='/' element={<Home/>}/>
    </RouterRoutes>
  )
}

export default Routes