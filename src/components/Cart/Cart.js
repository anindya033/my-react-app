import React from "react";
import Modal from "../UI/Modal";
import classes from './Cart.module.css'

const Cart = (props) => {

    const cartItemsArray = [{
        id: 1,
        name: 'Sushi',
        amount: "$" + 30,
        key : 1001
    }];
    const cartItems = <ul>{cartItemsArray.map(item => {
        return <li className={classes["cart-items"]}>{item.name}</li>
    })}</ul>;

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
                <span>$3.00</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]}
                onClick={props.onCloseCart}
                >
                    Close
                </button>
                <button className={classes["button"]}>
                    Proceed
                </button>
            </div>
        </Modal>

    );
};

export default Cart;