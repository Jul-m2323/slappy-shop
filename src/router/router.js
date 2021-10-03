import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '.././componentes/home';
import Shop from '.././componentes/shop';
import Us from '.././componentes/Us';
import News from '.././componentes/news';
import FindUs from '.././componentes/FindUs';
import NavBar from '.././componentes/navBar';

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
                <Us />
            </Route>
            <Route path="/Noticias">
                <News />    
            </Route>
            <Route path="/Encontranos">
                <FindUs />
            </Route>                
        </Switch>    
    </BrowserRouter>   
    )
}

export default router;
