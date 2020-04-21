import React from "react";
import {Link} from "react-router-dom";

export default function Header () {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">AlloMovie</Link>
            <button className="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/favoris">Favoris</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/create">Ajouter film</Link></li>
                </ul>
            </div>
        </header>
    )
}
