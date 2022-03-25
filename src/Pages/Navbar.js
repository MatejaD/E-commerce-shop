import React from 'react'
import { useGlobalContext } from '../context'
import { RiShoppingCartLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'


export default function Navbar() {

const {amount,open,setOpen} = useGlobalContext()

    const links = [
        {name:'Home',id:1,link:'/'},
        {name: 'About',id: 2,link:'About'},
        {name: 'Contact us',id: 3,link:'Contact'},
    ]


  return (<>
    
    <nav >
           <div className="logo">
              <h3>Logo</h3>
          </div>
      <div className={`pop-up ${open ? 'display' : ""}`}>
        <button onClick={()=> setOpen(!open)} className='close'>X</button>
        <ul className='links'>
          {links.map((link) => {
            return <li className='link' key={link.id}><Link style={{textDecoration: 'none', color: 'black'}} to='/'>{link.name}</Link></li>
          })}
        </ul>
        <div className="cart">
          <Link style={{textDecoration: 'none', color:'black'}} className='cart-icon' to='./Cart'><RiShoppingCartLine /></Link>
          <div className="amount">{amount}</div>
        </div>

          </div>
          <button className='ham' onClick={()=> setOpen(!open)}><GiHamburgerMenu/></button>
      </nav>
  </>
  )
}
