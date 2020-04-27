import React, {Component} from "react";
import {Loading, MovieDetails, MoviesList} from "../index";
import {connect} from "react-redux";

//création d'un composant à état, qui est une class héritant de React.Component
class Home extends Component{

    //methode obligatoire pour les composants à état, c'est là qu'on va retourner ce qu'on veux afficher: https://fr.reactjs.org/docs/react-component.html#render
  render() {
    return (
        <div className="d-flex flex-row border flex-fill pt-4 p-2">
            {this.props.loading && <Loading/>}
            <MoviesList/>
            <MovieDetails/>
        </div>
    )
  }
}

//fonction qui envoie le state global de redux aux props du composant.
const mapStateToProps = (state) => {
    console.log(state)
    return {
        loading: state.loading
    }
}

// exporte le composant en le connectant à redux, en premier parametre on met la fonction qui permet de passer le state global
//aux props et en second, celle qui permet de passer les actions aux props
export default connect(mapStateToProps)(Home)

