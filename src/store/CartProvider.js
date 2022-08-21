import React, { useReducer } from "react";
import CartContext from "./cart-context";


const defaultCartState = {
    items: [],
    totalAmount: 0
};
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);
        // getting the index for the items
        const indexOfExisitngItem = state.items.findIndex(item=> item.id === action.item.id); 
        // getting the items from the exisitng item
        const exisitngCartItem = state.items[indexOfExisitngItem];
        let updatedItems =[];

        if(exisitngCartItem){
            let updatedItem = {};
            updatedItem = {
                ...exisitngCartItem,
                amount : exisitngCartItem.amount +1
            }
            updatedItems = [...state.items]; // Copied the existing items intp an array
            updatedItems[indexOfExisitngItem] = updatedItem; // Picked the old idex item and replaced
        }else{
            updatedItems = state.items.concat(action.item);
        }


        
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState;
};

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };
    const removeItemToCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmounts: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }



    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;