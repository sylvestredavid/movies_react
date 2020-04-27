import React, {Component} from "react";
import MoviesElement from "../movie-list/MoviesElement";
import {connect} from "react-redux";
import {Loading} from "../index";

//création d'un composant à état, qui est une class héritant de React.Component
class Favoris extends Component{


    //methode obligatoire pour les composants à état, c'est là qu'on va retourner ce qu'on veux afficher: https://fr.reactjs.org/docs/react-component.html#render
  render() {
    return (
        <div className="d-flex flex-row flex-wrap align-content-start pt-4 p-2">
            {this.props.loading && <Loading/>}
            {
                this.props.films.map((film, index) =><MoviesElement key={index} film={film}/>)
            }
        </div>
    )
  }
}

//fonction qui envoie le state global de redux aux props du composant.
const mapStateToProps = (state) => {
    return {
        films: state.films.filter((film) => film.liked),
        loading: state.loading
    }
}

// exporte le composant en le connectant à redux, en premier parametre on met la fonction qui permet de passer le state global
//aux props et en second, celle qui permet de passer les actions aux props
export default connect(mapStateToProps)(Favoris)
