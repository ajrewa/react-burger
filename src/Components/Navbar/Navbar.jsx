import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu,setMenu]= useState("home")

  return (
    <div className='navbar'>
      <div className="nav">
        <div class="logo"> 
        <p>AJAX</p>
      </div>
        <ul className='nav-menu'>
          <li onClick={()=>{setMenu("home")}}> <Link style={{textDecoration:"none", color:"white"}} to='/'>HOME</Link>{menu==="home"?<hr/> :<></>}</li>
          <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none", color:"white"}} to='/shop'>SHOP</Link> {menu==="shop"?<hr/> :<></>}</li>
          <li onClick={()=>{setMenu("blog")}}><Link style={{textDecoration:"none", color:"white"}} to='/blog'>BLOG</Link> {menu==="blog"?<hr/> :<></>}</li>
          <li onClick={()=>{setMenu("info")}}><Link style={{textDecoration:"none", color:"white"}} to='/info'>INFO</Link> {menu==="info"? <hr/> :<></>}</li>
        </ul>
         </div>
      </div> 
  )
}

export default Navbar