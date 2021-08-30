import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import darItems from './Items';



const ItemCard = () => {
    const [productos, setProductos] = useState ();
    
    useEffect( () => {
        darItems(productos);
    })
       
    
     productos.map(() => { 
         return(
            <div className="miShop container-fluid">
                <div className="row">
                    <div className="card miCard col-12" >
                        <img src={productos.img} key={productos.img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <p className="card-text articulos" key={productos.nombre}>{productos.nombre}</p>
                        <p key={productos.precio}>{productos.precio}$</p>
                        <ItemCount/>
                        </div>
                    </div>
                </div>
            </div>
            )
        }         
    );
}


export default ItemCard;