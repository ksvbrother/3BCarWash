import './Header.css'
import React, { useState } from 'react'
import logo from "../Assets/carlogo.png"
import { NavLink } from 'react-router-dom'
import { PiPhone } from "react-icons/pi";
import { FaBarsStaggered, FaHand } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";



const Header = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div className='d-flex justify-content-between align-items-center px-md-4 px-2 shadow fixed-top headerContainer'>
            <img src={logo} alt='logo' className='bannerImage'></img>
            <div className={`d-flex align-items-center flex-column flex-lg-row  mobileFixed ${toggle && 'active'} `}>
                <div className='align-self-end px-2 py-3 d-lg-none '>
                    <IoMdClose onClick={handleToggle} style={{ width: "25px", height: "25px" }} />
                </div>
                <NavLink to='/' className='text-decoration-none py-3 py-lg-0 px-md-3 px-4 headerLink'>Home</NavLink>
                <NavLink to='/services' className='text-decoration-none py-3 py-lg-0 px-md-3 px-4 headerLink'>Services</NavLink>
                <NavLink to='/aboutus' className='text-decoration-none py-3 py-lg-0 px-md-3 px-4 headerLink'>About us</NavLink>
                <NavLink to='/price' className='text-decoration-none py-3 py-lg-0 px-md-3 px-4 headerLink'>Prices</NavLink>
                <NavLink to='/faq' className='text-decoration-none py-3 py-lg-0 px-md-3 px-4 headerLink'>FAQs</NavLink>
            </div>
            <div className='d-flex align-items-center'>
                <div className='px-3 mobileNumber'><PiPhone className='mobileIcon' /> 9080569922</div>
                <button type='button' onClick={handleToggle} className='d-lg-none d-inline-block bg-transparent border-0'><FaBarsStaggered /></button>
                <button type='button' className='pe-4 bg-transparent border-0 loginText d-none'>Login</button>
                <button type='button' className='px-2 bordre-0 registerBtn border-0 d-none d-lg-block'>Register</button>
            </div>
        </div>


    )
}

export default Header