import React from 'react'
import { Link } from 'react-router-dom'
import {useGlobalContext} from '../context'

{/* <div><Link to='/'>Go backkkkk</Link></div> */}

export default function Cart() {

    const {total,cart,cartDisplay,removeItem,cartDisplay2} = useGlobalContext()

    
    

  return (
      <>
          {total?
           <div className="cart-container">
               <div className="information">
                   <ul>
                       <li>
                           Item
                       </li>

                         <li>
                              Price
                          </li>

                          <li>
                              Amount
                          </li>
                   </ul>
               </div>
               <div className="items">
                   {cart.map((item)=>{
                       if(item.amount > 0){
                           cartDisplay.push(item)
                       }
                   })}
            {cartDisplay.map((item,index)=>{
                console.log(item)
                return <div className="cart-item" key={index}>
                    <div className='together'>
                    <img src={item.image} alt="" />
                    <h5>{item.name}</h5>
                    </div>
                    <h3>{item.pricec}</h3>
                    <h3>{item.amount}</h3>
                    <button className='remove-item' onClick={() => removeItem(item.id)}>X</button>
                </div>
            })}
                  </div>
          </div> 
          :
           <div className='cart-empty'>
              <h2 className="empty-info">Your cart is currently empty.</h2>
                  <button className='empty-btn'><Link style={{textDecoration: 'none', color: 'black', fontSize: '1.3rem'}} to='/'>Available Products</Link></button>
              </div>}
      </>
  )
}
