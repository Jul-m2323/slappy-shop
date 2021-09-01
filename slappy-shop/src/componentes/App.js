import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./navBar";
import ItemCard from "./ItemContainer";

const App = () => {
    return <><NavBar/>
            <ItemCard/>
            </>
}

export default App;