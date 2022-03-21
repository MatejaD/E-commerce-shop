
const reducer = ({state,action}) => {


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
}

export default reducer