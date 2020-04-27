import React, {Component} from "react";
import PropTypes from "prop-types";
import {changeFilm} from "../../redux/actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {toggleLikedAction} from "../../redux/actions/toggleLikedAction";

//création d'un composant à état, qui est une class héritant de React.Component
class MoviesElement extends Component {

    // les propType permet de définir les props attendus: https://openclassrooms.com/fr/courses/4664381-realisez-une-application-web-avec-react-js/4664851-definissez-formellement-vos-props-avec-proptypes
    static propTypes = {
        film: PropTypes.object.isRequired,
    };

    //methode pour changer le film dans MovieDetails on appel changeFilm se trouvant des les props en lui passant le film des props
    onChangeFilm = () => {
        this.props.changeFilm(this.props.film)
    }

    //methode pour changer le liked du film
    onToggleLike = () => {
        this.props.toggleLiked(this.props.film)
    }

    //methode obligatoire pour les composants à état, c'est là qu'on va retourner ce qu'on veux afficher: https://fr.reactjs.org/docs/react-component.html#render
    render() {
        return (
            <div className="w-25 p-2">
                <div className="cards">
                    <img alt="film" src={this.props.film.img} className="card-img-top" onClick={this.onChangeFilm}/>
                    <div className="favHeart">
                            <span style={{'color': this.props.film.liked ? 'red' : 'black'}}
                                  onClick={this.onToggleLike}>❤
                            </span>
                    </div>
                </div>
            </div>
        )
    }
}

//fonction qui envoie les actions de redux aux props du composant (voir plus haut), ici j'ai utilisé bindActionCreators car
//j'utilise des middleware afin d'aller récuperer mes données dans mon backend
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleLiked: toggleLikedAction,
        changeFilm: changeFilm
    }, dispatch)
}

// exporte le composant en le connectant à redux, en premier parametre on met la fonction qui permet de passer le state global
//aux props et en second, celle qui permet de passer les actions aux props
export default connect(null, mapDispatchToProps)(MoviesElement)
