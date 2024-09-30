import React from 'react'
import './Bloghero2.css'
import Blog_burger from '../Assets/png300-removebg-preview.png'

const Bloghero2 = () => {
  return (
    <div className='Bloghero2'>

      <div className="Bloghero2-bg">
        <img src={Blog_burger} alt="" />
        <div className="Bloghero2-right">
        <p>“The 1970s were the "Golden Age" of the company's advertising, but beginning in the mid-1980s, Burger King advertising began losing focus. A series of less successful advertising campaigns created by a procession of advertising agencies continued for the next two decades. In 2003, Burger King hired the Miami-based advertising agency Crispin Porter + Bogusky (CP+B), which completely reorganized its advertising with a series of new campaigns centered on a redesigned Burger King character nicknamed "The King", accompanied by a new online presence. While highly successful, some of CP+B's commercials were derided for perceived sexism or cultural insensitivity. Burger King's new owner, 3G Capital, later terminated the relationship with CP+B in 2011 and moved its advertising to McGarryBowen, to begin a new product-oriented campaign with expanded demographic targeting...”</p>
        </div>
      </div>
        
    </div>
  )
}

export default Bloghero2