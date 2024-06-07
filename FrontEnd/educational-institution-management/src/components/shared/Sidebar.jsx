import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Sidebar = ( { items }) => {
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

//props validation
Sidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  )
}


export default Sidebar