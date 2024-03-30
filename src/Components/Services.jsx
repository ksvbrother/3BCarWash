import React from 'react'
import service from './Assets/dashboard.jpg'
const Services = () => {
    return (
        <div className='d-flex  flex-wrap  px-2 px-sm-3 px-md-4 px-lg-5  serviceContainer'>
            <div className="col-lg-6 ">
                <h1 className='text-start mb-5 '>Quality guaranteed</h1>
                <div className='serviceBox col-10'>
                    <p className='text-start mb-4'>3Brother carwash provides quality car wash solutions.</p>
                    <p className='text-start serviceDescription mb-4'>Enjoy the convenience of our expert team bringing top-quality car wash right to you. No more trips to the car wash - we'll make your vehicle shine effortlessly.</p>
                    <p className='text-start serviceDescription'>Our reliable and efficient door step car wash service guarantees a sparkling clean car without you lifting a finger. Book now for a stress-free cleaning experience!</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className='serviceImageContainer p-3'>
                    <img src={service} className='serviceImage' />
                </div>
            </div>
        </div>
    )
}

export default Services