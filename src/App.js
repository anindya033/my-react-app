import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {

    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = (data)=>{
        setCartIsShown(data);
    }
    const hideCartHandler = (data)=>{
        setCartIsShown(false);
    }
    let cartComponent;
    if(cartIsShown){
        cartComponent = <Cart onCloseCart={hideCartHandler} ></Cart>;//9832130501 porama; 9332093339; ranjan/ raju
    }

    console.log();
    return (
        <CartProvider>
            {cartComponent}
            
            <Header onShowCart = {showCartHandler}></Header>
            <main>
                <Meals></Meals>
            </main>
        </CartProvider>
    );
}

export default App;
