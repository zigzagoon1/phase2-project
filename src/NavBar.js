import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
            <div className="container bg-light py-2">
                <div className="row">
                  <nav className="navbar nav-tabs justify-content-center">
                    <div className="col col-sm-3 nav-item">
                        <NavLink className="nav-link text-center" to="/">Home</NavLink>
                    </div>
                    <div className="col col-sm-3 nav-item">
                        <NavLink className="nav-link text-center" to="/memory">Memory Game</NavLink>
                    </div>
                    <div className="col col-sm-3 nav-item">
                        <NavLink className="nav-link text-center" to="/scores">High Scores</NavLink>
                    </div>
                    <div className="col col-sm-3 nav-item">
                        <NavLink className="nav-link text-center" to="/comments">Comments</NavLink>
                    </div>
                  </nav>
                </div>
            </div>
    )
}

export default NavBar;