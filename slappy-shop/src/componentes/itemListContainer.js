import React from 'react';
import '../css/estilo.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const productos = [
    {
        nombre:'Bolso Playero Slappy DIY',
        precio:750,
        img:"./multimedia/bolso_playero_slappy.jpg" ,
    },
    {
        nombre:'Vela/Wax Slappy DIY',
        precio:150,
        img:"./multimedia/vela_slappy.jpg" ,
    },
    {
        nombre:"Campera Bomber Slappy DIY",
        precio:3500,
        img: './multimedia/campera_slappy.jpg' ,
    },
    {
        nombre:'Bolsas Slappy Logo',
        precio:850,
        img: './multimedia/bolsas_slappy_diy.jpg' ,
    },
    {
        nombre:'Remera Slappy DIY x Persistir',
        precio:900,
        img:"./multimedia/slappy_remera_persistir.jpg" ,
    },
    {   
        nombre:'Bolsos Eje x Slappy DIY',
        precio:1800,
        img: './multimedia/bolsos_slappy_diy.jpg',
    },
    {   
        nombre:'Medias Slappy Logo',
        precio:400,
        img: './multimedia/medias_slappy_diy.jpg',
    },
    {
        nombre:'Varillas de Skate Slappy',
        precio:400,
        img:"./multimedia/varas_skate.jpg" ,  
    },			 				
];

const ItemCard = () => {
    return(
    <div>
        {
        productos.map(producto =>{
            return (
                <div className="miShop container-fluid">
                    <div className="row">
                        <div className="card miCard col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2" >
                            <img src={producto.img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <p className="card-text articulos">{producto.nombre}</p>
                            <p>${producto.precio} $</p>
                            </div>
                        </div>
                    </div>
                </div>
            )    
            })
        }
    </div>       
    );
}

export default ItemCard;