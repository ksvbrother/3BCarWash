import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'

const Layout = () => {
    const excludePath = [""]
    return (
        <div>
            {!excludePath.some(path => path == window.location.pathname) && <Header />}
            <div className=''>
                <Outlet />
            </div>
            {!excludePath.some(path => path == window.location.pathname) && <Footer />}
        </div>
    )
}

export default Layout