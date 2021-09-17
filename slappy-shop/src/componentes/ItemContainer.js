import React, { useEffect, useState } from 'react';
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
        <div className="container-fluid">
            {     
            productos.length < 1 ?
            <h1>Slappy DIY Shop</h1>
            :
            <div className="row">
            {productos.map(elemento => { 
            return(     
                <div className="col-12 col-sm-6 col-md-8 col-lg-6">
                        <div className="card miCard">
                            <img src={elemento.img} key={elemento.img} className="card-img-top imgProp" alt="..."/>
                            <div className="card-body">
                            <ItemCount className="counter" />   
                            <p className="card-text articulos" key={elemento.nombre}>{elemento.nombre}</p>
                            <p key={elemento.precio}>{elemento.precio}$</p>
                            </div>
                    </div>
                </div>
                )
            }             
            )}
            </div>
            }
        </div>
    )
}


export default ItemCard;