import React from "react";
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 // We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 // Here, we display our Navbar
import decLogo from '../assets/DEC-logo.png'

export default function Navbar() {
 return (
   <div>
     <nav className="navbar bg-warning">
     <div className="flex-row justify-content-between">
        <div className="flex">
            <NavLink className="nav-link" to="/">
                <img style={{"width" : 50}} className="ps-2" src={decLogo}></img>
            </NavLink>
        </div>

        <div className="flex">
            <button className="btn btn-primary " type="button">
                    <NavLink className="nav-link" to="/create">
                    Create 
                    </NavLink>
            </button>
        </div>

        </div>
     </nav>
   </div>
 );
}