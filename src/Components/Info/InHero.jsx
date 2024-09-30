import React from 'react'
import "./InHero.css"
import InHero_icon from '../Assets/outlet-removebg-preview.png'
import { Link } from 'react-router-dom'


const InHero = () => {
  return (
    <div className='Inhero'>
      <div className="Inhero-bg">
        <div className="Inhero-left">
        <h1>Franchise &<br/>Outlets</h1>
        <div className="smallpara">
        <p>"Get a membership and be a family member "</p>
        <Link>Contact Us </Link>
        </div>
        
    </div>
    <div className="Inhero-right">
        <img src={InHero_icon} alt="" />
    </div>
    </div>

    <div className="Inhero-sm"><div className="Inhero-left">
        <h1>Franchise & Outlets</h1>
        <p>"Get a membership and be a family member "</p>
        <Link>Contact Us </Link> 
    </div>
    <div className="Inhero-right">
        <img src={InHero_icon} alt="" />
    </div>
    </div>

</div>
  )
}
export default InHero