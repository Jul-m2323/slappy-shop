import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import darItems from './Items';



const ItemCard = () => {
    const [productos, setProductos] = useState ();
    
    useEffect( () => {
        darItems(productos);
    })
       
    return(
    <div>{ productos.map(({img, precio, nombre}) => { 
        <div className="miShop container-fluid">
            <div className="row">
                <div className="card miCard col-12" >
                    <img src={productos.img} key={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <p className="card-text articulos" key={nombre}>{productos.nombre}</p>
                    <p key={precio}>  {productos.precio} $</p>
                    <ItemCount/>
                    </div>
                </div>
            </div>
        </div>})}  
    </div>       
    );
}


console.log(promesa)
export default ItemCard;