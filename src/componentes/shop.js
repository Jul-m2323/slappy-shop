import React from 'react';

import ItemCard from './ItemContainer';
import '../css/estilo.css'
import Cart from './cart';

const Shop = () =>{
    return(
        <div>
            <h2 className="Titulos miFont">Shop</h2>            
            <ItemCard />
            <Cart />
        </div>    
    )
};

export default Shop;