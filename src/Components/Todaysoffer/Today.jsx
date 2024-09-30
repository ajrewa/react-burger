import React from 'react'
import './Today.css'
import burger_pic from '../Assets/data'
import Smallburger_pic from '../Assets/data-2'
import Item from '../Items/Item'
import SmallItem from '../Items/SmallItem'


const Today = () => {
  return (
    <div className='today'>
        <h1>Today's Offer</h1>
        <hr/>
        <div className="todays-item">
        <div className="todays-item-bg">
          {burger_pic.map((item,i)=>{
                return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
        <div className="todays-item-sm">
          {Smallburger_pic.map((item,i)=>{
                return <SmallItem key={i} id={item.id} name={item.name} image={item.image}
                new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
        </div>

    </div>

  )
}

export default Today