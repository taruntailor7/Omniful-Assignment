import React from 'react'
import {Route, Routes} from "react-router-dom"
import { Channel } from '../Pages/Channel'
import { Home } from '../Pages/Home'
import { Hubs } from '../Pages/Hubs'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/channels" element={<Channel />}></Route>
        <Route path="/hubs" element={<Hubs />}></Route>
    </Routes>
  )
}
