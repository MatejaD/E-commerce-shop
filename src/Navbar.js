import React from 'react'
import { useGlobalContext } from './context'

export default function Navbar() {

const {amount} = useGlobalContext()

    const links = [
        {name:'Home',
        id:1
        },

        {
            name: 'About',
            id: 2
        },

        {
            name: 'Contact us',
            id: 3
        },

    ]
  return (
      <nav>
          <div className="logo">
              <h3>Logo</h3>
          </div>
          <ul className='links'>
            {links.map((link)=>{
              return  <li className='link' key={link.id}>{link.name}</li>
            })}
          </ul>
          <div className="cart">

              <h2>cart</h2>
              <p>{amount}</p>
          </div>
      </nav>
  )
}
