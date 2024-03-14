import React from 'react'
import { NavLink } from 'react-router-dom'

const DashNav = () => {
    const commonClasses = "block p-3 hover:bg-gray-600 rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none"
    return (
        <div className="sidebar mt-20">
            <ul>
                <li>
                    <NavLink to="/"
                        className={({ isActive }) => isActive ? `bg-gray-200 hover:text-white text-black ${commonClasses}` : commonClasses}>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/orders"
                        className={({ isActive }) => isActive ? `bg-gray-200 hover:text-white text-black ${commonClasses}` : commonClasses}>

                        Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products"
                        className={({ isActive }) => isActive ? `bg-gray-200 hover:text-white text-black ${commonClasses}` : commonClasses}>

                        Products
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default DashNav