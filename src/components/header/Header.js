import React from "react";
import {Link, NavLink} from "react-router-dom";

export default function Header () {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">AlloMovies</Link>
            <button className="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"><NavLink className="nav-link" to="/">Home</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/favoris">Favoris</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/create">Ajouter film</NavLink></li>
                </ul>
            </div>
        </header>
    )
}
