import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";

class Header extends Component{

    routingAdmin = () => {
        if(this.props.user) {
            return "/admin";
        }
        return "/login";
    }

    render() {
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
                        <li className="nav-item"><NavLink className="nav-link" to={this.routingAdmin}>Admin</NavLink></li>
                    </ul>
                </div>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Header)
