import React, { useState } from "react";
import { CartContext, CartProvider } from "./context/cartContext";
import { ThemeProvider } from "./context/themeContext";
import router from "./router/router";

const App = () => {
    return 
    <div>
         <ThemeProvider>
           <CartProvider>
               <router />
           </CartProvider>
         </ThemeProvider>
    </div>
}

export default App;                 