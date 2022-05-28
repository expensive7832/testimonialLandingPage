import React from 'react'
import secondbanner from './../assets/img/about.png'
import arrow from './../assets/img/arrow.png'

const SecondBanner = () => {
  return (
    <div className="secondbanner ">
        <div className="container-fluid py-5 py-md-0">
            <div className="row justify-content-center justify-content-md-around align-items-center">
                <div className="col-md-6 col-12 order-2 order-md-1">
                  <img src={secondbanner} alt="second banner image" className='secondbanner__img' />
                </div>
                <div className="text-white px-5 px-md-0 col-md-6 col-12 order-1 order-md-2 my-md-4 my-0 secondbanner__content">
                  <p >Tolu & Joy’s Experience</p>
                  <small className="border border-white my-2" style={{borderRadius:".2rem"}}>customer</small>
                <small className='d-block lead my-4'>
                I had the best experience shopping with vasiti. Usability of the website was great, very good customer service,
                 an all round great experience. I would definately be coming back! I had the best experience 
                 shopping with vasiti. Usability of the website was great, very good customer service, 
                 an all round great experience. I would definately be coming back!
                </small>
                <p className="text-uppercase">share your story</p>
                <img src={arrow} alt="arrow icon" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondBanner