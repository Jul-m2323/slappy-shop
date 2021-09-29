import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../componentes/home';
import Shop from '../componentes/shop';
import Nosotros from '../componentes/nosotros';
import Noticias from '../componentes/noticias';
import Encontranos from '../componentes/encontranos';
import NavBar from '../componentes/navBar';

function router() {

    return (
        <BrowserRouter>
        <NavBar />
        <Switch>
            <Route exact path="/Home">
                <Home />
            </Route>
            <CartContext.Provider>
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
    )
}

export default router;
