import React from 'react'
import './Shopbg.css'
import burger_pic from '../Assets/data'
import Item from '../Items/Item'
import SmallItem from '../Items/SmallItem'

const Shopbg = () => {
  return (
    <div className='shop'>
        <div className="shop-bg">
            <h1>Burger's</h1>
        <hr />
        <div className="shop-item">
            {burger_pic.map((item,i)=>{
                return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
        <div className="shop-item">
            {burger_pic.map((item,i)=>{
                return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
        <div className="shop-item">
            {burger_pic.map((item,i)=>{
                return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
    {/*________________________________________________________________________________ */}

        <div className="shop-sm">
            <h1>Burger's</h1>
        <hr />
        <div className="shop-item">
            {burger_pic.map((item,i)=>{
                return<SmallItem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
        <div className="shop-item">
            {burger_pic.map((item,i)=>{
                return<SmallItem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
        <div className="shop-item">
            {burger_pic.map((item,i)=>{
                return<SmallItem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div></div>
    </div>
  )
}

export default Shopbg