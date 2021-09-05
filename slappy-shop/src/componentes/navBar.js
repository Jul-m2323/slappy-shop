import React from "react";
import { Link } from "react-router-dom";
import '../css/estilo.css'
import Carrito from "./cartWidget";
import Shop from "./shop";
import home from "./home"
import Nosotros from "./nosotros"
import News from "./noticias"


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
					<Link to={`/home`}>Home</Link>
			  	    </li>
			  	    <li className="nav-item">
					  <Link to={`/shop`}>Shop</Link>
			  	    </li>
			  	    <li className="nav-item">
					  <Link to={`/nosotros`}>Nosotros</Link>
			  	    </li>
			  	    <li className="nav-item">
					  <Link to={`/noticias`}>Noticias</Link>
			  	    </li>
			  	    <li className="nav-item">
					  <Link to={`/encontranos`}>Encontranos</Link>
			  		</li>
			    </ul>
				<Carrito/>
		    </div>
	    </nav>
    </header>
    )
}

export default NavBar;