import React from 'react'
import './SmallItem.css'

const SmallItem = (props)  => {
  return (
    <div className='smallitem'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className='smallitem-price'>
            <div className='smallitem-price-new'>${props.new_price}</div>
            <div className='smallitem-price-old'>${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default SmallItem