import React, { useState } from 'react';

import '../css/estilo.css'

const ItemCount = ({stock}) => {
const [cantidad, setCantidad] = useState(1)

const sumProducto = () =>{ cantidad <= stock ? setCantidad(stock) : setCantidad (cantidad +1)} 

const restProducto = () => {cantidad <= 1 ?  setCantidad(1) : setCantidad (cantidad -1);}


    return(
        <div className="itemCount">
            <button onClick={restProducto} >-</button>
            <button onClick={sumProducto}>+</button>
            <p>{counter}</p>
        </div>
    )
};


export default ItemCount;