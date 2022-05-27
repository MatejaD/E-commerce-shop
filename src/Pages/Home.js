import React from "react"
import { Link } from "react-router-dom"
export default function Home() {
  return (
    <main style={{ height: "cover" }}>
      <div className="shop-now">
        <h2>Re-invent your home with us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          molestiae harum maxime cumque. Numquam quos ipsa accusamus fugit
          corporis illum.
        </p>
        <button className="buy">
          <Link to="/home" style={{ color: "black", textDecoration: "none" }}>
            Shop now
          </Link>
        </button>
      </div>
      <div className="picture">
        <img
          className="first-pic"
          src="https://cdn.pixabay.com/photo/2015/05/05/01/11/house-753271__340.jpg"
          alt=""
        />
        <img
          className="second-pic"
          src="https://cdn.pixabay.com/photo/2014/02/27/13/13/living-room-275837__340.jpg"
          alt=""
        />
        <img
          className="third-pic"
          src="https://cdn.pixabay.com/photo/2017/08/07/09/18/architecture-2601838__340.jpg"
          alt=""
        />
      </div>
    </main>
  )
}
