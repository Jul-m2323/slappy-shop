import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ".././css/estilo.css";
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
                <div className="miCard">
                    <div className="card">
                        <img src={elemento.img} key={elemento.img} className="card-img-top imgProp" alt="..."/>
                        <div className="card-body">
                        <p className="card-text articulos" key={elemento.nombre}>{elemento.nombre}</p>
                        <p key={elemento.precio}>{elemento.precio}$</p>
                        <ItemCount />
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