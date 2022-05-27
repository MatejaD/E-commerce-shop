const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    let change = state.cart.map((item) => {
      return { ...item, amount: 0 }
    })
    state.amount = 0
    return { ...state, change }
  }

  if (action.type === "ADD") {
    let change = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: (item.amount += 1) }
      }
      return item
    })

    return { ...state, change }
  }

  if (action.type === "REMOVE") {
    let change = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: (item.amount -= 1) }
      }
      return item
    })
    state.amount--
    return { ...state, change }
  }

  if (action.type === "DISPLAY") {
    let { amount, total } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { amount, price } = cartItem
        let itemTotal = price * amount

        cartTotal.total += itemTotal
        cartTotal.amount += amount
        return cartTotal
      },
      {
        total: 0,
        amount: 0,
      }
    )

    total = parseFloat(total.toFixed(2))
    return { ...state, amount, total }
  }

  if (action.type === "SEARCH") {
    let regex = new RegExp(action.payload, "i")
    let filterArray = state.cartDisplay
    let change = filterArray.filter((item) => {
      return regex.test(item.name)
    })

    return { ...state, cart: change }
  }

  if (action.type === "CATEGORY") {
    let filterArray = state.cartDisplay
    let change = filterArray.filter((item) => {
      return item.category === action.payload
    })

    if (action.payload === "All") {
      change = state.cartDisplay
    }

    return { ...state, cart: change }
  }

  throw new Error("no matching action type")
}

export default reducer
