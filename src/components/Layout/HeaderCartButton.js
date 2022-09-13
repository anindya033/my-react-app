import React, { useContext, useEffect, useState } from "react";
import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {

    const cartContext = useContext(CartContext);
    const itemCount = cartContext.items.reduce((accumulator, item)=>{
        return accumulator + item.amount
    },0);

    const [btnIsHighligted, setBtnIsHighligted] = useState(false);
    const btnClass = `${classes.button} ${btnIsHighligted ? classes.bump : ''}`;
    const {items} = cartContext;
    useEffect(()=>{
        if(items.length === 0) return;
        setBtnIsHighligted(true);
        setTimeout(()=>{
            setBtnIsHighligted(false);
        },300)
    },[items]);
    return (
        // <button className={classes.button}>
        //     {props.title}
        // </button>

        <button className={btnClass} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>{props.title}</span>
            <span className={classes.badge}>{itemCount}</span>
        </button>

    );
};

export default HeaderCartButton;