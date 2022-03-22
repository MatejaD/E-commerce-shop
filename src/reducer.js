
const reducer = (state,action) => {


    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }

    if(action.type === 'ADD'){
        let change = state.cart.map((item)=>{
            if(item.id === action.payload){
                return {...item,amount: item.amount += 1}
            }
            return item
        })
     
        return {...state,change}
    }

    if(action.type ==='REMOVE'){

        let change = state.cartDisplay.map((item)=>{
            if(item.id === action.payload){
                return {...item,cartDisplay:item}
            }
        })

        console.log(change)
        return {...state,change}
    }

    if(action.type === 'DISPLAY'){
        let {amount,total} = state.cart.reduce((cartTotal,cartItem)=>{
           const {amount,price} = cartItem
            let itemTotal = price  * amount

            cartTotal.total += itemTotal
            cartTotal.amount += amount
            return cartTotal
        },{
            total:0,
            amount:0
        })

        total = parseFloat(total.toFixed(2))


        return {...state,amount,total}
    }

    throw new Error('no matching action type')

}

export default reducer;