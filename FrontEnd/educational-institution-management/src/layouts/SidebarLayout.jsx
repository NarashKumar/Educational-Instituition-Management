import React from 'react'
import Sidebar from '../components/shared/Sidebar';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const sidebarItems = [
    { label: 'Dashboard', path: '/dashboard' },
    {label: 'Personal Details', path: '/personal-details'},
    { label: 'Fee Payment', path: '/fee-payment' },
    { label: 'Course List', path: '/course-list' },
    { label: 'Grade / Mark & Credit', path: '/grade-credit' },
    // Add other sidebar items as needed
  ];
  
const SidebarLayout = () => {
  return (
    <>
    <Navbar/>
    <div className="flex">
    <Sidebar items={sidebarItems} />
    <Outlet />
    </div>
    </>
  )
}

export default SidebarLayout;