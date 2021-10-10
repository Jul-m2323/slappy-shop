import React from "react";
import  { CartContext ,  CartProvider } from "./context/cartContext";
import Router from "./router/Router";

const App = () => {
    return( 
    <div>
        <CartContext>
          <CartProvider>
              <Router />
          </CartProvider>
          </CartContext>   
    </div>
    )
}

export default App;                 