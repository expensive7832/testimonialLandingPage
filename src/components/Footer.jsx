import React from 'react'
import mobile from './../assets/img/mobile.png'
import fb from './../assets/img/fb.png'
import ig from './../assets/img/ig.png'
import tw from './../assets/img/tw.png'
import ln from './../assets/img/in.png'

const Footer = () => {
  return (
    <div className="footer w-100 ">
        <div className="footer__top">
        <div className="container w-75 m-auto">
        <div className="row justify-content-center align-items-center">
            <div className="col-md-6 col-12">
                <img className='footer__mobile img-fluid' src={mobile} alt="site mobile app image" />
            </div>
            <div className="col-md-6 col-12 text-white">
               <h3 className="fw-bold">Be a  member <br/> of our community 🎉</h3>
               <p>We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.</p>
                <div className="container d-flex bg-secondary py-1 my-3" style={{backgroundColor: "#514D4A",borderRadius:".6rem"  }}>
    
                     
                            <input placeholder='enter your email address' type="text" className="form-control" />
                        
                        
                            <button className="btn btn-sm btn-light p-1">SUBSCRIBE</button>
                        
                  
                </div>
            </div>

        </div>
        </div>
        </div>
        <div className="footer__bottom text-white">
        <div className="container w-75 m-auto">
        <div className="row justify-content-around">
            <div className="col-md-2 col-12 my-3 my-md-0">
            <ul class="list">
            <p class="list-item fw-bold">Company</p>
            <li class="list-item">About Us</li>
            <li class="list-item">Term Of Use</li>
            <li class="list-item">Privacy Policy</li>
            <li class="list-item">Press & Media</li>
            </ul>
            </div>
            <div className="col-md-2 col-12 my-3 my-md-0">
            <ul class="list">
            <p class="list-item fw-bold">Products</p>
            <li class="list-item">Marketplace</li>
            <li class="list-item">Magazine</li>
            <li class="list-item">Seller</li>
            <li class="list-item">Wholesale</li>
            <li class="list-item">Services</li>
            </ul>
            </div>
            <div className="col-md-2 col-12 my-3 my-md-0">
            <ul class="list">
            <p class="list-item fw-bold">Careers</p>
            <li class="list-item">Become a Campus Rep</li>
            <li class="list-item">Become a Vasiti Influencer</li>
            <li class="list-item">Become a Campus writer</li>
            <li class="list-item">Become an Affiliate</li>
            </ul>
            </div>
            <div className="col-md-2 col-12 my-3 my-md-0">
            <ul class="list">
            <p class="list-item fw-bold">Get In Touch</p>
            <li class="list-item">Contact Us</li>
            <li class="list-item">Partner with us</li>
            <li class="list-item">Advertise with us</li>
            <li class="list-item">Help/FAQs</li>
            </ul>
            </div>
            <div className="col-md-3 col-12 my-3 my-md-0">
            <p class="list-item fw-bold">Join our community</p>
            <div className="d-flex">
                <img className='mx-1' src={fb} alt="social link" />
                <img className='mx-1' src={tw} alt="social link" />
                <img className='mx-1' src={ig} alt="social link" />
                <img className='mx-1' src={fb} alt="social link" />
                <img className='mx-1' src={ln} alt="social link" />
                
            </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer