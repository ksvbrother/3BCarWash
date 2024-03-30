import React, { useEffect } from 'react'
import Image from "./Assets/wash.jpg"
const BookForm = () => {
  useEffect(() => {
    document.getElementById('date').valueAsDate = new Date();
  }, [])
  return (
    <div className='px-md-5 px-2 mt-3'>
      <div className=''>
        <div className="shadow bookContainer overflow-hidden">
          <div className='d-flex flex-wrap'>
            {/* <div className='col-lg-6 col-12'><img src={Image} className='w-100 image' /></div> */}
            <div className='col-lg-12 py-3 col-12'>
              <form action="https://formspree.io/f/xeqylprk" method="POST">
                <div class="row mx-0">
                  <h2 className='text-center mb-4'>Book Now !</h2>
                  <div class="col-md-6 col-12 mb-3">
                    <label className='mb-2'>Full name</label>
                    <input type="text" name="User Name" class="form-control" id="" placeholder="Name" />
                  </div>
                  <div class="col-md-6 col-12 mb-3">
                    <label className='mb-2'>Phone number</label>
                    <input type="number" name="Phone Number" class="form-control" placeholder="Phone" />
                  </div>
                  <div class="col-md-6 col-12 mb-3">
                    <label className='mb-2'>Email</label>
                    <input type="email" name="Email Id" class="form-control" placeholder="Email" />
                  </div>
                  <div class="col-md-6 col-12 mb-3">
                    <label className='mb-2'>Brand name - (car)</label>
                    <input type="text" name="Brand Name" class="form-control" placeholder="Name" />
                  </div>
                  <div class="col-md-6 col-12 mb-3">
                    <label className='mb-2'>Select date </label>
                    <input type="date" id="date" class="form-control" name="Date" placeholder="Date" />
                  </div>
                  <div class="col-md-6 col-12 mb-3">
                    <label className='mb-2'>Time</label>
                    <select class="form-control" name='Time'>
                      <option>6:00 AM to 7:00 AM</option>
                      <option>7:00 AM to 8:00 AM</option>
                      <option>8:00 AM to 9:00 AM</option>
                      <option>9:00 AM to 10:00 AM</option>
                      <option>10:00 AM to 11:00 AM</option>
                    </select>
                  </div>
                  <div class="col-md-6 col-12 mb-3">
                    <label className='mb-2'>Cleaning Type</label>
                    <select class="form-control" name='Clean Type'>
                      <option>Interior</option>
                      <option>Exterior</option>
                      <option>Both</option>
                    </select>
                  </div>

                  <div class="col-12">
                    <label className='mb-2'>Address</label>
                    <textarea type="text" class="form-control" rows="2" name='Addres Line' placeholder="Address" />
                  </div>
                  <div class="col-md-6 col-12 mt-3">
                    <button type="submit" class="btn btn-primary">Book</button>
                  </div>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BookForm