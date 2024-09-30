import React from 'react'
import LOGO from '../../figma-app/src/assets/logo.png'

function Header() {
  return (
    <div className='container'>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img className='img-fluid ' src={LOGO} alt="logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fs-6  fw-bold" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-6 fw-bold" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-6   fw-bold" href="#">Contact Us</a>
              </li>
              
            </ul>
           <div className=' d-flex justify-content-between'>
            <button style={{background: "none"}} className='rounded-pill py-1 px-3  fw-medium border-0 '>Login</button>
            <button style={{background: "#EF8D12"}} className='text-white fw-medium rounded-pill py-1 px-3 border-0'>Book Scooter</button>
           </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header