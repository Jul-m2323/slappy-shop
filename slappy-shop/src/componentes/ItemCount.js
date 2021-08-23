import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/estilo.css'

const ItemCount = () => {
const [counter, setCounter] = useState(1)

const sumProducto = () => setCounter (counter +1);

const restProducto = () => setCounter (counter -1);


    return(
        <div className="itemCount">
            <button onClick={restProducto} >-</button>
            <button onClick={sumProducto}>+</button>
            <p>{counter}</p>
        </div>
    )
};


export default ItemCount;