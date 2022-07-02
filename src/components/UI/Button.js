import React from "react";
import classes from './Button.module.css';

const Button = (props)=>{
    
    console.log("<>>>>>>>>>>>"+props.type);
    return (
        <button
            className={classes.button}
            type={props.type || 'button'}
            oncClick={props.onClick} 
        >
            {props.children}
        </button>
    );
};

export default Button;
