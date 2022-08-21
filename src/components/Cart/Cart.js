import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from './Cart.module.css'
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    // const cartItemsArray = [{
    //     id: 1,
    //     name: 'Sushi',
    //     amount: "$" + 30,
    //     key: 1001
    // }];
    const totalAmount = `$${cartCtx.totalAmounts.toFixed(2)}`;
    const cartItemAddHandler=(item)=>{
        cartCtx.addItem(item);
    }
    const cartItemRemoveHandler=(id)=>{
        cartCtx.removeItem(id);
    }
    const cartItems = <ul className={classes["cart-items"]}>
        {
            cartCtx.items.map(item => {
                return <CartItem
                    key={item.id}
                    name = {item.name}
                    amount={item.amount}
                    price = {item.price}
                    onRemove={cartItemRemoveHandler.bind(null,item.id)}
                    onAdd={cartItemAddHandler.bind(null,item)}
                ></CartItem>
            })
        }
    </ul>;

    return (
        <Modal
            onClick={props.onCloseCart}>
            <div>
                {cartItems}
            </div>
            <div className={classes.total}>
                <span>
                    Total -
                </span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]}
                    onClick={props.onCloseCart}
                >
                    Close
                </button>
                {cartCtx.items.length >0 &&
                    <button className={classes["button"]}>
                    Order
                </button>}
            </div>
        </Modal>

    );
};

export default Cart;