import React from "react"; 
import { NavLink } from "react-router-dom";
import logo  from  "../src/images/logo.png";
const Navbar=()=>{
    return(
              <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                        <NavLink className="navbar-brand" to="/">
                        <img src={logo} />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            <NavLink to="/" className="nav-link" tabindex="-1" aria-disabled="true">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/about" className="nav-link" tabindex="-1" aria-disabled="true">About</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/service" className="nav-link" tabindex="-1" aria-disabled="true">Service</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/contact" className="nav-link" tabindex="-1" aria-disabled="true">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                    </nav> 
    );   
};
export default Navbar;