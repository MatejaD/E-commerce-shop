import { act } from "react-dom/test-utils"

const reducer = (state,action) => {

    if (action.type === 'CLEAR_CART') {
        let change = state.cart.map((item) => {
            return { ...item, amount: 0 }
        })
        state.amount = 0;
        return { ...state, change }
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
        // let remove = state.cart.filter((item) =>
        // item.id !== action.payload)
         
        // let change = state.cartDisplay.map((item)=>{
        //     if(item.id === action.payload){
        //         return {...item, amount:(item.amount -= 1)}
        //     }
        //     return item.amount
        // })
        // console.log(state.cartDisplay,remove)
        // return {...state,cartDisplay:remove,change}

        let change = state.cart.map((item) => {
            if (item.id === action.payload) {
                // state.amount -= item.amount ;
                return { ...item, amount: (item.amount -= 1) };

            }
            return item;
        });
        state.amount--;
        return { ...state, change };
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

    if (action.type === 'SEARCH'){
        let regex = new RegExp(action.payload, "i"); 
        let filterArray = state.cartDisplay
        let change = filterArray.filter((item)=>{
            return regex.test(item.name)
        })
        console.log(change)
        return {...state,cart:change}
    }

    if (action.type === 'CATEGORY'){

        let filterArray = state.cartDisplay
        let change = filterArray.filter((item)=>{
        return item.category === action.payload
        })
       
        if (action.payload === 'All'){
            change = state.cartDisplay
        }

        return {...state,cart:change}
    }

    if(action.type === 'LOWEST_PRICE'){
 
      let pricesArray = []
    let array = []
        state.cart.map((item)=>{
            pricesArray.push(item.price)
        })
        let sort =  pricesArray.sort((a,b)=>{
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        })
        
        let change = sort.forEach((price)=>{
            
            state.cart.map((item)=>{
                // console.log(item.price)
                if(price === item.price){
                    array.push(item)
                    return item
                }
            })
        })

            console.log(array)
        return {...state,cart:array}
    }


    throw new Error('no matching action type')

}

export default reducer;