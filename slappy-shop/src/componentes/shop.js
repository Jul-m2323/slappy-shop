import React from 'react';
import Carrito from './cartWidget';
import ItemCard from './ItemContainer';
import '../css/estilo.css'

const Shop = () =>{
    return(
        <div>            
            <ItemCard />
            <Carrito />
            <h2 className="Titulos miFont">Shop</h2>
        </div>    
    )
};

export default Shop;