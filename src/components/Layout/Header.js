import React from "react";
import mealsImg from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {

    const onAddCartHandler=()=>{
        props.onShowCart (true);
    }
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Order your meals</h1>
                <HeaderCartButton 
                title="Cart" 
                onClick = {onAddCartHandler}
                ></HeaderCartButton>
            </header>
            <div>
                <img src={mealsImg} className={classes["main-image"]}>

                </img>
            </div>
        </React.Fragment>
    );
}

export default Header;