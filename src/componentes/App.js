import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../context/cartContext';
import Encontranos from "./encontranos";
import Home from "./home";
import NavBar from "./navBar";
import Nosotros from "./nosotros";
import Noticias from "./noticias";
import Shop from "./shop";
import CartContext from "../context/cartContext";

const App = () => {
    const [cartContext, setCartContext] = useState([]);


    return <div>
        <BrowserRouter>
    		<NavBar />
            <Switch>
                <Route exact path="/Home">
                    <Home />
                </Route>
                <CartContext.Provider value={cartContext}>
                <Route path="/Shop">
                    <Shop />
                </Route>
                </CartContext.Provider>
                <Route path="/Nosotros">
                    <Nosotros />
                </Route>
                <Route path="/Noticias">
                    <Noticias />    
                </Route>
                <Route path="/Encontranos">
                    <Encontranos />
                </Route>                
            </Switch>    
        </BrowserRouter>    
           </div>
}

export default App;                 