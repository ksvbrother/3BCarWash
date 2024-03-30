import React from 'react'
import Image from '../Components/Assets/carlogo.png'
import { Link } from 'react-router-dom'
const CustomButton = ({ text }) => {
    return (
        <div className='position-relative bookBtn d-flex align-items-center mt-4'>
            <Link to='/book' className='d-inline-block  px-md-4 px-3 py-sm-3 py-2 py-md-3   text-decoration-none text-white  linkBtn'>{text}</Link>
            <img src={Image} className='buttonImage' />
        </div>
    )
}

export default CustomButton