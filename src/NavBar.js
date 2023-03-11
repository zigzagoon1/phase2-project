import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <div className="justify-content-center">
            <div className="container">
                <div className="row justify-content-around ">
                  <nav className="nav nav-tabs justify-content-center">
                    <div className="col col-sm-3 nav-item">
                        <NavLink className="nav-link text-center" to="/">Home</NavLink>
                    </div>
                    <div className="col col-sm-3 nav-item">
                        <NavLink className="nav-link text-center" to="/memory">Memory Game</NavLink>
                    </div>
                    <div className="col col-sm-3 nav-item">
                        <NavLink className="nav-link text-center" to="/scores">High Scores</NavLink>
                    </div>
                  </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar;