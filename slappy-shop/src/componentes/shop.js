import React from 'react';
import Carrito from './cartWidget';
import ListaProductos from './itemListContainer';
import '../css/estilo.css'

const Shop = () =>{
    return(
        <div>
            <h2 className="Titulos miFont">Shop</h2>
            <ListaProductos />
            <Carrito />
        </div>    
    )
};

export default Shop;