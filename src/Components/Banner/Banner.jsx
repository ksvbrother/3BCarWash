import './Banner.css'
import React from 'react'
import bannerImage from "../Assets/bannerimage.jpg"
import { Button } from 'bootstrap'
import CustomButton from '../CustomButton'
const Banner = () => {
    return (
        <div className='bannerContainer d-flex align-items-md-center align-items-start justify-content-center p-md-5 px-3 py-3 py-md-5' style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className='d-flex align-items-center flex-wrap'>
                <div className='col-lg-6 col-12 pe-5 pe-md-0'>
                    <h1 className='bannerHeading'> Doorstep Car Shine Service</h1>
                    <p className='bannerText'>Get your daily dose of shine with 3B! Enjoy doorstep car wash service with a 50% discount on your first booking. Keep your ride sparkling effortlessly!</p>
                    <CustomButton text='Schedule a booking' />
                </div>
                <div className='col-lg-6'></div>
            </div>
        </div>
    )
}

export default Banner