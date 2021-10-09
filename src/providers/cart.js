import { createContext, useState } from "react";

export const CartContext = createContext([])

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    
    const addToCart =(item) =>{

        setCart([...cart, item])

    }

    const removeFromCart = (item) => {

        const filterCart = cart.filter((e) => e.name !== item.name)
        setCart( filterCart)

    }

    return(
        <CartContext.Provider
        value ={{cart, addToCart, removeFromCart}}
        >
            {children}
        </CartContext.Provider>
    )


}