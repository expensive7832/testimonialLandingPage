import React from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SecondBanner from './components/SecondBanner'
import Testimonial from './components/Testimonial'
import Thirdbanner from './components/Thirdbanner'
import user1 from './assets/img/user1.png'
import user2 from './assets/img/user2.png'
import user3 from './assets/img/user3.png'
import user4 from './assets/img/user4.png'
import user5 from './assets/img/user5.png'
import user6 from './assets/img/user6.png'

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <SecondBanner/>
     <div className="container w-75 m-auto my-5">
         <div className="row">
             <div className="col-md-4 col-12">
             <Testimonial user={user1}/>
             </div>
             <div className="col-md-4 col-12">
             <Testimonial user={user2}/>
             </div>
             <div className="col-md-4 col-12">
             <Testimonial user={user3}/>
             </div>
             <div className="col-md-4 col-12">
             <Testimonial user={user4}/>
             </div>
             <div className="col-md-4 col-12">
             <Testimonial user={user5}/>
             </div>
             <div className="col-md-4 col-12">
             <Testimonial user={user6}/>
             </div>
         </div>
     </div>
     <Thirdbanner/>
     <div className="container w-75 m-auto my-5">
     <div className="row">
             <div className="col-md-4 col-12">
             <Testimonial user={user5}/>
             </div>
             <div className="col-md-4 col-12">
             <Testimonial user={user4}/>
             </div>
             <div className="col-md-4 col-12">
             <Testimonial user={user2}/>
             </div>
             <div className="col-md-4 col-12">
             <Testimonial user={user1}/>
             </div>
             <div className="col-md-4 col-12">
             <Testimonial user={user3}/>
             </div>
             <div className="col-md-4 col-12">
             <Testimonial user={user6}/>
             </div>
         </div>
     </div>
     <Footer/>
    </div>
  )
}

export default App