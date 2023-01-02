import React from 'react'
import {Iconbar} from './Iconbar'
import "./Sidebar.css"

export const Sidebar = () => {
  return (
    <div className="sidebar d-flex" >
        <Iconbar />
        <div>Sidebar</div>
    </div>
  )
}
