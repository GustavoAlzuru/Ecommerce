import React from "react";
export const CartContext = React.createContext()

const CartProvider = ({children}) => {
    return(
        <>
        {children}
        </>
    )
}
export default CartProvider 