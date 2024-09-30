import React from 'react'
import './Weekend.css'
import Coca_cola from '../Assets/pngwing.com.png'

const Weekend = () => {
  return (
    <div className='weekend'>
        <div className="weekend-left">
            <h1>Sunday Funday</h1>
            <p>"Enjoy your Weekend's with double paties"</p>
        </div>
        <div className="weekend-right">
            <img src={Coca_cola} alt="" />
        </div>
    </div>
  )
}

export default Weekend