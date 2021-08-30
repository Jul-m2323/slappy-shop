import React from 'react';

const detalleProductos = [
    {
        nombre:'Bolso Playero Slappy DIY',
        precio:750,
        img:"../multimedia/bolso_playero_slappy.jpg" ,
        tipo:'Totebag',
        detalle:'Bolso playero estampado',
        material:'Hilo',
    },		 				
];

const DetailProd = () => {
    return(
        <div>
            {
                detalleProductos.map(({nombre, precio, img, tipo, detalle, material}) =>{
                    return (<div>
                        <div>
                            <img src={img} key={img}/>
                        </div>
                        <div>
                            <h2 key={nombre} >{nombre}</h2>
                            <ul>
                                <li key={detalle}>{detalle}</li>
                                <li key={tipo}>{tipo}</li>
                                <li key={material}>{material}</li>
                            </ul>
                            <h4 key={precio}>{precio}$</h4>
                        </div>
                    </div>)
                })
            }
        </div>
    )
};

export default DetailProd;