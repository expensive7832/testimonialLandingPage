import React from 'react'

const Testimonial = ({user}) => {
  return (
   <div className="testimonial">
       <div className="testimonial__img text-center">
           <img src={ user } alt="user image" className='testimonial__img--pic' />
       </div>
       <p className="text-center testimonial__name fw-bold">Joseph Ike</p>
       <div className="justify-content-center d-flex align-items-center">
           <div className="testimionial__place">in Ikeja</div>
           <small className="testimonial__service text-uppercase text-primary mx-3">customer</small>
          
       </div>
       <p className='testimonial__text px-0 px-md-5'>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur 
               duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat 
               incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis
                ea quis id quis ad et.Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            </p>
   </div>
  )
}

export default Testimonial