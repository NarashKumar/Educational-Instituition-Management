import React from 'react'
import { NavLink } from 'react-router-dom'


const items = [
  { label: 'Dashboard', path: '/dashboard' },
  {label: 'Personal Details', path: '/personal-details'},
  { label: 'Fee Details', path: '/fee-payment' },
  { label: 'Course List', path: '/course-list' },
  { label: 'Grade / Mark & Credit', path: '/grade-credit' },
  // Add other sidebar items as needed
];

const Sidebar = () => {
  return (
    <>
  
      <div className="bg-gray-100 min-h-screen w-64  shadow-md">
        <ul className="flex flex-col p-2">
          {items.map((item, index) => (
            <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer">
              <NavLink  to={item.path}> {item.label}   </NavLink>
            </li>
          ))}
        </ul>
      </div>
    
   </>
  )
}


export default Sidebar