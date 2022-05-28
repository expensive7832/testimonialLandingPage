import React from 'react'
import Logo from './../assets/img/logo.png'

const Navbar = () => {
  return (
    <>
    <header id="header" className='container m-auto my-3'>
        <div className="topheader container m-auto">
        <nav className="navbar navbar-expand-lg">
        <div className="navbar-brand ms-1 ms-md-4" to="/">
              <img src={Logo} alt="site logo" />
          </div >
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item mx-md-3 mx-0">
                <div className="nav-link text-uppercase" aria-current="page" to="/submitArticle">About us</div>
              </li>
              <li className="nav-item mx-md-3 mx-0">
                <div className="nav-link text-uppercase" aria-current="page" to="/submitArticle">stories</div>
              </li>
              <li className="nav-item mx-md-3 mx-0">
                <div className="nav-link text-uppercase" aria-current="page" to="/submitArticle">contact</div>
              </li>
              <li className="nav-item mx-md-3 mx-0">
                <div className="nav-link text-uppercase" aria-current="page" to="/submitArticle">Log in</div>
              </li>
              <li className="nav-item mx-md-3 mx-0">
                <div style={{width: "fit-content"}} className="nav-link signup py-1 px-2 text-uppercase" aria-current="page" to="/submitArticle">sign up</div>
              </li>
             
              
            </ul>
            
           
            
          </div>
      </nav>
        </div>
    </header>
    <div className="container-fluid">
    <div className="mt-4 bottomHeader p-2 d-flex flex-wrap justify-content-evenly align-items-center">
            <p className="fw-bold text-uppercase">marketplace</p>
            <p className="fw-bold text-uppercase">wholesale center</p>
            <p className="fw-bold text-uppercase">seller</p>
            <p className="fw-bold text-uppercase">services</p>
            <p className="fw-bold text-uppercase">internships</p>
            <p className="fw-bold text-uppercase">events</p>
        </div>
    </div>
    </>
  )
}

export default Navbar