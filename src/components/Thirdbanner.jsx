import React from 'react'
import womanshopping from './../assets/img/woman-shoppingbag.png'
import arrow from './../assets/img/arrow.png'
const Thirdbanner = () => {
  return (
   <div className="thirdbanner">
       <div className="container-fluid py-5 py-md-0">
            <div className="row justify-content-center align-items-center">
                <div className="text-dark col-md-6 order-2 order-md-1 col-12 my-md-4 my-0 thirdbanner__content">
                  <p className='fw-bold my-2'>Josiah’s Experience</p>
                  <small className=" thirdbanner__client p-1 my-2" style={{borderRadius:".2rem"}}>vendor</small>
                <small className='d-block lead my-4'>
                I had the best experience shopping with vasiti. Usability of the website was great, very good customer service,
                 an all round great experience. I would definately be coming back! I had the best experience 
                 shopping with vasiti. Usability of the website was great, very good customer service, 
                 an all round great experience. I would definately be coming back!
                </small>
                <p className="text-uppercase text-warning">share your story</p>
                <img src={arrow} alt="arrow icon" />
                </div>
                <div className="col-md-6 order-1 order-md-2 col-12 ">
                  <img src={womanshopping} alt="third banner image" className='thirdbanner__img' />
                </div>
            </div>
        </div>
   </div>
  )
}

export default Thirdbanner