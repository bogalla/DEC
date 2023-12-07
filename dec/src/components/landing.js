import React from "react";
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 // We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 // Here, we display our Navbar
import decLogo from '../assets/DEC-logo.png'

export default function Landing() {
 return (
    <div className="d-flex flex-column align-items-center">
            <img className="w-25 ps-2" alt="" src={decLogo} />
        <div className="p-20">
            <button className="btn btn-dark " type="button">
                <NavLink className="nav-link" to="/homepage">
                    Get drunk 
                </NavLink>
            </button>
        </div>
    </div>
 );
}