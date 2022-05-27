import React, { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"
import cartItems from "../data"
import { useGlobalContext } from "../context"

function App() {
  let categories = []

  const {
    cart,
    newCategories,
    categorySearch,
    setNewCategories,
    addToCart,
    display,
    inputValue,
    setInputValue,
    sortByLowestPrice,
    sortByHighestPrice,
    input,
    setInput,
  } = useGlobalContext()

  useEffect(() => {
    categories = cart.map((item) => {
      const { category } = item
      return category
    })
    setNewCategories(categories)
  }, [])

  categories = [...new Set(newCategories)]
  categories.unshift("All")
  return (
    <main>
      <div className="cover">
        <form className="search-bar">
          <div className="input-container">
            <input
              type="text"
              className="search-input"
              value={inputValue}
              placeholder="Search..."
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <h4 className="title-category">Category</h4>
          <div className="categories-container">
            {categories.map((item, index) => {
              return (
                <li
                  onClick={() => categorySearch(item)}
                  className="category-item"
                  key={index}
                >
                  {item}
                </li>
              )
            })}
          </div>
        </form>
      </div>
      <div className="section">
        {cart.map((item) => {
          const { name, id, image, price } = item
          return (
            <div key={id} className="item-container">
              <div className="image-container">
                <img src={image} alt="wha" />
                <div className="overlay">
                  <p className="text">
                    Lorem ipsum, nulla perspiciatis sed fuga, ut laboriosam ab
                    laudantium enim rerum fugit eveniet molestias, explicabo
                    harum quasi autem vero qui?
                  </p>
                </div>
              </div>
              <div className="info">
                <h4>{name}</h4>
                <span>{price}$</span>
              </div>
              <div className="btn-container">
                <button
                  className="buy"
                  onClick={() => {
                    addToCart(id)
                    display()
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default App
