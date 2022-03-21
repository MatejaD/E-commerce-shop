import React, {useState,useReducer,useContext} from "react";
import cartItems from './data'
import reducer from "./reducer";


const initalState = {
    cart:cartItems,
    amount:0,
    total:0,
}

const AppContext = React.createContext()

 const  AppProvider = ({children}) => {
     const [state,dispatch] = useReducer(reducer,initalState)
     const [newCategories, setNewCategories] = useState([])

     const addToCart = (id) =>{
         dispatch({type:'ADD', payload:id})
     }

     const clear = () =>{
         dispatch({type:'CLEAR_CART'})
     }
     

    return <AppContext.Provider 
    value={{
        ...state,
        newCategories,
        setNewCategories,
        addToCart,
        clear,

    }}
    >
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}