import React from "react";

const CartContext = React.createContext({
    items: [{
        price:10
    }],
    totalAmounts : 0,
    addItem : (item) =>{},
    removeItem : (id)=>{}
});

export default CartContext;