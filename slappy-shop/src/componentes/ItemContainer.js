import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import darItem from './Items';



const ItemCard = () => {
    const [productos, setProductos] = useState ([]);
    
    useEffect( () => {
       const prueba = darItem(productos);
       console.log(prueba)
       setProductos(prueba)
    }, [productos])
       
    return(
        <div>
            {     
            productos.length < 1 ?
            <h1>Slappy DIY Shop</h1>
            :
            productos.map(elemento => { 
            return(
                <div className="miShop container-fluid">
                    <div className="row">
                        <div className="card miCard col-12" >
                            <img src={elemento.img} key={elemento.img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <p className="card-text articulos" key={elemento.nombre}>{elemento.nombre}</p>
                            <p key={elemento.precio}>{elemento.precio}$</p>
                            <ItemCount/>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }             
            )}
        </div>
    )
}


export default ItemCard;