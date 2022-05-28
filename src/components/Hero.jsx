import React from 'react'
import Bannerimg from './../assets/img/banner.png'

const Hero = () => {
  return (
    <div className="hero mt-5">
        <div className="container m-auto">
            <div className="row justify-content-center">
                <div className="col-md-6 col-12 my-5">
                    <h3 className='hero__text'>Amazing <br/> Experiences from Our <br/> Wonderful Customers</h3>
                    <p className='lead my-3 mx-4 mx-md-0'>Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
                </div>
                <div className="col-md-6 col-12">
                    <img src={Bannerimg} alt="banner image" className="hero__img"  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero