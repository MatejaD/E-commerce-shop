import React, { useState, useReducer, useContext, useEffect } from "react"
import cartItems from "./data"
import reducer from "./reducer"

const initalState = {
  cart: cartItems,
  cartDisplay: cartItems,
  amount: 0,
  total: 0,
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState)
  const [newCategories, setNewCategories] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState()

  const addToCart = (id) => {
    dispatch({ type: "ADD", payload: id })
  }

  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: id })
  }

  const clear = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const display = () => {
    dispatch({ type: "DISPLAY" })
  }

  const search = (name) => {
    dispatch({ type: "SEARCH", payload: name })
  }

  const categorySearch = (category) => {
    dispatch({ type: "CATEGORY", payload: category })
  }

  const sortByLowestPrice = () => {
    dispatch({ type: "LOWEST_PRICE" })
  }

  const sortByHighestPrice = () => {
    dispatch({ type: "HIGHEST_PRICE" })
  }

  useEffect(() => {
    display()
  }, [])

  useEffect(() => {
    let timeout = setTimeout(() => {
      search(inputValue)
    }, 300)
    return () => clearTimeout(timeout)
  }, [inputValue])

  return (
    <AppContext.Provider
      value={{
        ...state,
        newCategories,
        setNewCategories,
        addToCart,
        clear,
        display,
        removeItem,
        inputValue,
        setInputValue,
        categorySearch,
        open,
        setOpen,
        sortByLowestPrice,
        sortByHighestPrice,
        input,
        setInput,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
