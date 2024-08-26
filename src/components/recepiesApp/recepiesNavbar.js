import React from "react";
import { NavLink } from "react-router-dom";

function NavbarRecepies() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container-fluid" style={{ backgroundColor: "rgb(3, 52, 110)", height: "65px" }}>
                <ul className="navbar-nav">
                    <li className="nav-item" style={{ margin: 10 }}>
                        <NavLink to="/" style={{ textDecoration: "none", color: "white" }} activeClassName="active-link">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item" style={{ margin: 10 }}>
                        <NavLink to="/about" style={{ textDecoration: "none", color: "white" }} activeClassName="active-link">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item" style={{ margin: 10 }}>
                        <NavLink to="/favorites" style={{ textDecoration: "none", color: "white" }} activeClassName="active-link">
                            Favorites
                        </NavLink>
                    </li>
                    <li className="nav-item" style={{ margin: 10 }}>
                        <NavLink to="/TasksList" style={{ textDecoration: "none", color: "white" }} activeClassName="active-link">
                            Tasks
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavbarRecepies;
