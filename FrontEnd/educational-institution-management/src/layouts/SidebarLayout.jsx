import React from 'react'
import Sidebar from '../components/shared/Sidebar';
import { Outlet } from 'react-router';


const SidebarLayout = () => {
  return (
    <>
    <div className="flex">
    <Sidebar  />
    <Outlet />
    </div>
    </>
  )
}

export default SidebarLayout;