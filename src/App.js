import React from "react";
import { CartProvider } from "./context/cartContext";
import router from "./router/router";

const App = () => {
    return 
    <div>
          <CartProvider>
              <router />
          </CartProvider> 
    </div>
}

export default App;                 