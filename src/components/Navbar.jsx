import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
               <NavLink to={"/"}>Home</NavLink> 
            </li>
            <li>
               <NavLink to={"/post_page"}>Post page - pagination</NavLink> 
            </li>
        </ul>
    </nav>
  )
}

export default Navbar