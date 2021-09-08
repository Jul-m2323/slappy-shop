import React from "react";
import { NavLink } from "react-router-dom";
import '../css/estilo.css'




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
				<ul className="nav miFont">
			  	    <li className="nav-item">
					<NavLink to={`/Home`}>Home</NavLink>
			  	    </li>
			  	    <li className="nav-item">
					  <NavLink to={`/Shop`}>Shop</NavLink>
			  	    </li>
			  	    <li className="nav-item">
					  <NavLink to={`/Nosotros`}>Nosotros</NavLink>
			  	    </li>
			  	    <li className="nav-item">
					  <NavLink to={`/News`}>Noticias</NavLink>
			  	    </li>
			  	    <li className="nav-item">
					  <NavLink to={`/Encontranos`}>Encontranos</NavLink>
			  		</li>
			    </ul>
		    </div>
	    </nav>
    </header>
    )
};

export default NavBar;