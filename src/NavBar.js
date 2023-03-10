import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <div className="justify-content-center">
            <div className="container">
                <div className="row justify-content-around ">
                  <nav className="nav nav-tabs justify-content-center">
                    <div className="col col-sm-3 nav-item">
                        <NavLink className="nav-link text-center" to="/" exact >Home</NavLink>
                    </div>
                    <div className="col col-sm-3 nav-item">
                        <NavLink className="nav-link text-center" to="/memory" exact>Memory Game</NavLink>
                    </div>
                    <div className="col col-sm-3 nav-item">
                        <NavLink className="nav-link text-center" to="/other" exact>Other Game</NavLink>
                    </div>
                  </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar;