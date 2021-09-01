import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import darItems from './Items';



const ItemCard = () => {
    const [productos, setProductos] = useState ([]);
    
    useEffect( () => {
        const prueba = darItems(productos);
        setProductos(prueba)
    },[]);
       
    return(
        <div className="miShop container-fluid">
            <div className="row">
            {
            productos.length < 1 ?
            <h1></h1>
            :
            productos.map(elemento => { 
                return(        
                        <div className="card miCard col-12" >
                            <img src={elemento.img} key={elemento.img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <p className="card-text articulos" key={elemento.nombre}>{productos.nombre}</p>
                            <p key={elemento.precio}>{productos.precio}$</p>
                            <ItemCount/>
                            </div>
                        </div>
                    )
                }         
            )
            }
            </div>
        </div>
    )
     
}


export default ItemCard;