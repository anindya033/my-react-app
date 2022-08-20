import React, { useContext } from "react";
import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {

    const cartContext = useContext(CartContext);
    const itemCount = cartContext.items.reduce((accumulator, item)=>{
        return accumulator + item.amount
    },0);

    return (
        // <button className={classes.button}>
        //     {props.title}
        // </button>

        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>{props.title}</span>
            <span className={classes.badge}>{itemCount}</span>
        </button>

    );
};

export default HeaderCartButton;