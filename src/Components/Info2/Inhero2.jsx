import React,{useState} from 'react'
import "./Inhero2.css"

function FavoriteColor() {
const [Inhero2,setInhero2] = useState("?")
  return (
    <div className='Inhero2'>
      <div className='leftt'>
      <h1>I love BURGER <br/>with {Inhero2}! </h1>
      </div>

      <div className='rightt'>
       <button type="button" onClick={() => setInhero2("fries")} >Fries</button>
        <button type="button" onClick={() => setInhero2("coldrink")} >Coldrink</button> 
        <button type="button" onClick={() => setInhero2("Extra Cheese")} >Cheese</button> 
        <button type="button" onClick={() => setInhero2("Double pettie")} >Double</button>
      </div>

    </div>
  )
};

export default FavoriteColor