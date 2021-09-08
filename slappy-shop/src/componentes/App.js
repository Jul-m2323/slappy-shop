import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Encontranos from "./encontranos";
import Home from "./home";
import NavBar from "./navBar";
import Nosotros from "./nosotros";
import Noticias from "./noticias";
import Shop from "./shop";

const App = () => {
    return <div>
        <BrowserRouter>
    		<NavBar />
            <Switch>
                <Route exact path="/Home">
                    <Home />
                </Route>
                <Route path="/Shop">
                    <Shop />
                </Route>
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