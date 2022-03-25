import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import cartItems from '../data'
import {useGlobalContext} from '../context'
// TASKS
// 1. Implement Pagination
// 2. Make it Prettier
// 3. (Done) Adding items to cart function and displaying them 
// 4. Add Total cost of items in Cart
// 5. Add Footer
// 6. Create a Home page


function App() {
  let categories = []

  const {cart,
    newCategories,
    categorySearch,
    setNewCategories,
    addToCart,
    display,
    inputValue,
    setInputValue,
    sortByLowestPrice,} = useGlobalContext()
  
useEffect(()=>{
  categories = cart.map((item) => {
    const {category} = item
    return category
  })
  setNewCategories( categories)
},[])


  categories = [... new Set(newCategories)]
  categories.unshift('All')
  return (
    <main>
      <div className="cover">
      <form className="search-bar">
        <div className="input-container">
        <input type="text"
        className="search-input" 
        value={inputValue} 
        placeholder='Search...'
        onChange={e=> setInputValue(e.target.value)}
        />
        </div>
          <h4 className="title-category" onClick={() => sortByLowestPrice()}>Category</h4>
        <div className="categories-container">
          { categories.map((item,index)=>{
            return <li onClick={() => categorySearch(item)} className="category-item" key={index}>{item}</li>
          })
            
          }
            <select onSubmit>
              <option value='Lowest Price' onClick={() => sortByLowestPrice()}>Lowest Price</option>
            </select>
        </div>
      </form>
      </div>
      <div className="section">
        {cart.map((item)=>{
          const {name,id,image,price,} = item
          return <div key={id} className="item-container">
            <div className="image-container">
            <img src={image} alt='wha' />
            <div className="overlay">
              <p className="text">Lorem ipsum, nulla perspiciatis  sed fuga, ut laboriosam ab laudantium enim rerum fugit eveniet molestias, explicabo harum quasi autem vero qui?</p>
            </div>
            </div>
            <div className="info">
              <h4>{name}</h4>
              <span>{price}$</span>
            </div>
            <div className="btn-container">
            <button className="buy" onClick={() => {
              addToCart(id)
              display()
            }}>Add To Cart</button>
            </div>
          </div>
        })}
   
      </div>
    </main>
   
  );
}

export default App;
