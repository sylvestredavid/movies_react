import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {toggleLikedAction} from "../../redux/actions/toggleLikedAction";

//création d'un composant à état, qui est une class héritant de React.Component
class MovieDetails extends Component {

    //methode pour changer le liked du film, on appel toggleLiked des props avec le film se trouvant des les props
    onToggleLike = () => {
        this.props.toggleLiked(this.props.film)
    }

    //methode obligatoire pour les composants à état, c'est là qu'on va retourner ce qu'on veux afficher: https://fr.reactjs.org/docs/react-component.html#render
    render() {
        return (
            <div className="w-25 border pr-4 pl-4 pb-4">
                {this.props.film ?
                    (<div className="position-sticky sticky-top pt-4">
                        <div className="card">
                            <img alt="film" src={this.props.film.img} className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">{this.props.film.titre}</h5>
                                <div className="favHeart">
                                    <span style={{'color': this.props.film.liked ? 'red' : 'black'}}
                                     onClick={this.onToggleLike}>❤
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>) : <p className="mt-4">Choisissez un film</p>
                }
            </div>
        )
    }
}

//fonction qui envoie le state global de redux aux props du composant.
const mapStateToProps = (state) => {
    return {
        film: state.film
    }
}

//fonction qui envoie les actions de redux aux props du composant (voir plus haut), ici j'ai utilisé bindActionCreators car
//j'utilise des middleware afin d'aller récuperer mes données dans mon backend
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleLiked: toggleLikedAction
    }, dispatch)
}

// exporte le composant en le connectant à redux, en premier parametre on met la fonction qui permet de passer le state global
//aux props et en second, celle qui permet de passer les actions aux props
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
