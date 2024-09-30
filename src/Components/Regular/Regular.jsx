import React from 'react'
import './Regular.css'
import Item from '../Items/Item'
import regular from '../Assets/regular'
import Smallburger_pic from '../Assets/data-2'
import SmallItem from '../Items/SmallItem'


const Regular = () => {
  return (
    <div className='Regular'>
        <h1>Regular</h1>
        <hr />
        <div className="Regular-collection">
          <div className="Regular-collection-bg">{regular.map((item,i)=>{
                return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
            </div>
            <div className="Regular-collection-sm">{Smallburger_pic.map((item,i)=>{
                return <SmallItem key={i} id={item.id} name={item.name} image={item.image}
                new_price={item.new_price} old_price={item.old_price}/>
            })}
            </div>
        </div>
    </div>
  )
}

export default Regular