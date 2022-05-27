import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./Pages/App"
import Navbar from "./Pages/Navbar"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { AppProvider } from "./context"
import Cart from "./Pages/Cart"
import Home from "./Pages/Home"
ReactDOM.render(
  <AppProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<App />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>,

  document.getElementById("root")
)
