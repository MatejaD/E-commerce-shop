import { clear } from '@testing-library/user-event/dist/clear'
import React from 'react'
import { Link } from 'react-router-dom'
import {useGlobalContext} from '../context'

{/* <div><Link to='/'>Go backkkkk</Link></div> */}

export default function Cart() {

    const {total,cart,cartDisplay,display,removeItem,addToCart} = useGlobalContext()

    
    

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
                      <Link to='/'>back</Link>

            {cartDisplay.map((item,index)=>{
                {if (item.amount > 0){
                    return <div className="cart-item" key={item.id}>
                        <div className='together'>
                            <img src={item.image} alt="" />
                            <h5>{item.name}</h5>
                        </div>
                        <h3>{item.pricec}</h3>
                        <h3>{item.amount}</h3>
                        <button className='remove-item' onClick={() =>{ 
                            display()
                            addToCart(item.id)}}>Up</button>
                        <button className='remove-item' onClick={() => {
                            display()
                            removeItem(item.id)
                        }}>Down</button>
                    </div>
                }
                
            }
               
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
