import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";

//création d'un composant à état, qui est une class héritant de React.Component
class Header extends Component{

    //méthode qui permet de diriger l'user vers l'admin si il est loggé, sinon vers le login
    routingAdmin = () => {
        if(this.props.user) {
            return "/admin";
        }
        return "/login";
    }

    //methode obligatoire pour les composants à état, c'est là qu'on va retourner ce qu'on veux afficher: https://fr.reactjs.org/docs/react-component.html#render
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

//fonction qui envoie le state global de redux aux props du composant.
const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.user
    }
}

// exporte le composant en le connectant à redux, en premier parametre on met la fonction qui permet de passer le state global
//aux props et en second, celle qui permet de passer les actions aux props
export default connect(mapStateToProps)(Header)
