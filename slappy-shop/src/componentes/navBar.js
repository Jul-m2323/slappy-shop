import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
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
				<BrowserRouter>
				<ul className="nav miFont">
			  	    <li className="nav-item">
					<Link to={`/Home`}>Home</Link>
			  	    </li>
			  	    <li className="nav-item">
					  <Link to={`/Shop`}>Shop</Link>
			  	    </li>
			  	    <li className="nav-item">
					  <Link to={`/Nosotros`}>Nosotros</Link>
			  	    </li>
			  	    <li className="nav-item">
					  <Link to={`/News`}>Noticias</Link>
			  	    </li>
			  	    <li className="nav-item">
					  <Link to={`/Encontranos`}>Encontranos</Link>
			  		</li>
			    </ul>
				</BrowserRouter>
		    </div>
	    </nav>
    </header>
    )
};

export default NavBar;