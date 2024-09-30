import React from 'react'
import './Footer.css'
import  insta_logo from'../Assets/instagram_icon.png'
import pin_logo from'../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <p>GOOD DAY</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <hr />
        <div className="foot">
            <div className='social_logo'>
            <img src={insta_logo} alt="" />
            <img src={whatsapp} alt="" />
            <img src={pin_logo} alt="" />
            </div>
            <p>Copyright @ 2024 All Rights reserved</p>
            <p>@aj_rewa</p>
        </div>
    </div>
    
  )
}

export default Footer