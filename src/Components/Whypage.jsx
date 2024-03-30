import React from 'react'
import low from '../Components/Assets/lowest-price.png'
import door from '../Components/Assets/double-door.png'
import sprey from '../Components/Assets/water-spray.png'
const Whypage = () => {
    return (
        <div className='pt-5'>
            <h2 className='text-center'> Why choose our service?</h2>
            <p className='text-center  mx-auto mt-4 px-3 whySubText '>
                Choose us for affordable, doorstep car washes. We provide thorough interior and exterior cleaning using premium products for a flawless finish.</p>
            <div className=' col-lg-10 mx-auto '>
                <div className='d-flex align-items-center justify-content-center flex-wrap'>
                    <div className="col-lg-4 col-md-6 col-12 py-md-5 py-3 px-md-4 px-3   ">
                        <div className='d-flex flex-column align-items-center whyItem  p-3 justify-content-center'>
                            <img src={low} className='whyImage' />
                            <p className='whyHeading'>Low prices</p>
                            <span className='whyText'>Top-class car wash services at an affordable price.</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 py-md-5 py-3 px-md-4 px-3  ">
                        <div className='d-flex flex-column align-items-center whyItem  p-3 justify-content-center'>
                            <img src={door} className='whyImage' />
                            <p className='whyHeading'>Doorstep</p>
                            <span className='whyText'>Relax and let us handle the car cleaning while you focus on enjoying your functions and celebrations.</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12  py-md-5 py-3 px-md-4 px-3   ">
                        <div className='d-flex flex-column align-items-center whyItem  p-3 justify-content-center'>
                            <img src={sprey} className='whyImage' />
                            <p className='whyHeading'>Products</p>
                            <span className='whyText'>Don't worry, we use high-quality branded cleaning products. Your vehicle is in good hands with us.</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Whypage