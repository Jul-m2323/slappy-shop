import React from "react";
import '../css/estilo.css'
import Carrito from "./cartWidget";


const NavBar =() => {
	return(
    <header>
        <nav className="navbar bg-yellow navbar-expand-xl">
			<div className="fixed-top">
			    <button className="navbar-toggler miToggler " type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			</div>
            <div>
                <h1 className="miFont Titulos">Slappy Shop</h1>
            </div>
			<div id="navbarToggleExternalContent" className="collapse navbar-collapse miHeader">
				<ul className="nav">
			  	    <li className="nav-item">
			   		<a className="nav-link active miFont navFontColor" href="index.html">Inicio</a>
			  	    </li>
			  	    <li className="nav-item">
			   		<a className="nav-link miFont navFontColor" href="shop.html">shop</a>
			  	    </li>
			  	    <li className="nav-item">
			   		<a className="nav-link miFont navFontColor" href="noticias.html">Noticias</a>
			  	    </li>
			  	    <li className="nav-item">
			   		<a className="nav-link miFont navFontColor" href="nosotros.html">Nosotros</a>
			  	    </li>
			  	    <li className="nav-item">
			   		<a className="nav-link miFont navFontColor" href="encontranos.html">Encontranos</a>
			  	</li>
			    </ul>
				<Carrito/>
		    </div>
	    </nav>
    </header>
    )
}

export default NavBar;