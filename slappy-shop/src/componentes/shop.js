import React from 'react';
import Carrito from './cartWidget';
import ItemCard from './ItemContainer';
import '../css/estilo.css'

const Shop = () =>{
    return(
        <div>
            <h2 className="Titulos miFont">Shop</h2>            
            <ItemCard />
            <Carrito />
        </div>    
    )
};

export default Shop;