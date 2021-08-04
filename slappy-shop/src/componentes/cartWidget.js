import React from 'react';
import '../css/estilo.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Carrito = (onSeleccionar) =>{
    return(
    <div>
        <button onClick={onSeleccionar} type="button" class="buttonCarrito btn btn-outline-warning">Carrito</button>
    </div>
    )
}


export default Carrito;