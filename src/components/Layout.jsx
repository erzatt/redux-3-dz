import React from 'react'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div>
        <Outlet/>
        <footer>
            <p>26.12.2023</p>
        </footer>
    </div>
  )
}

export default Layout