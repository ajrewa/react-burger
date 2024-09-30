import React from 'react'
import './Hero.css'
import Hero_icon from '../Assets/hero_image.png'
import Hero_icon_2 from '../Assets/hero_image_-_Copy-removebg-preview.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-content">
      <div className="hero-left">
            <h1>Burger King</h1>
            <p>"Life is too short to miss out on beautiful burgers."</p>
        </div>
        <div className="hero-right">
            <img src={Hero_icon} alt="" />
        </div>
        <div className="hero-right-2">
            <img src={Hero_icon_2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero