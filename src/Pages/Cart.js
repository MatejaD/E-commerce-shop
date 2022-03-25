import { clear } from '@testing-library/user-event/dist/clear'
import React from 'react'
import { Link } from 'react-router-dom'
import {useGlobalContext} from '../context'
import { VscChevronUp, VscChevronDown } from 'react-icons/vsc'

{/* <div><Link to='/'>Go backkkkk</Link></div> */}

export default function Cart() {

    const {total,cart,cartDisplay,display,removeItem,addToCart,amount,clear} = useGlobalContext()

    
    

  return (
      <>
          {amount?
        <div>
            <div className="information">
                   <ul>
                       <li>
                           Item
                       </li>

                         <li>
                              Price
                          </li>

                          <li>
                              Total
                          </li>

                          <li>
                              Amount
                          </li>
                   </ul>
               </div>
           <div className="cart-container">
             
               {/* <div className="itemss"> */}
                      {/* <Link to='/'>back</Link> */}

            {cart.map((item,index)=>{
                {
                    
                     if (item.amount > 0){
                    return (<>
                    <div className="cart-item" key={item.id}>
                        <div className='together'>
                            <img src={item.image} alt="" />
                            <h5>{item.name}</h5>
                        </div>
                        <h3 style={{fontWeight: '500'}} className='price'>{item.price}$</h3>
                        <h3 className='price'> {parseFloat(item.price * item.amount).toFixed(2)}$</h3>
                        <div className="amount-container">
                        <h3>{item.amount}</h3>
                        <div className="icons">
                                <button className='remove-item' onClick={() => {
                                    display()
                                    addToCart(item.id)
                                }}><VscChevronUp /></button>
                                <button className='remove-item' onClick={() => {
                                    display()
                                    removeItem(item.id)
                                }}><VscChevronDown/></button>
                        </div>
                        </div>
                       
                    </div>
                    
                    </> )}
            }
               
            })}
                  {/* </div> */}
          </div> 
                  <div className="delete-all">
                      <button onClick={() => clear()} >Empty Cart</button>
                  </div>
              </div>
          :
           <div className='cart-empty'>
              <h2 className="empty-info">Your cart is currently empty.</h2>
                  <p className='empty-btn'><Link style={{textDecoration: 'none', color: 'black', fontSize: '1.3rem', width: '100%', height: '50%', display: 'flex', justifyContent: 'center'}} to='/'>Available Products</Link></p>
              </div>}
      </>
  )
}
