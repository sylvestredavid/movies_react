import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {AdminElement} from "../index";
import {deleteFilmAction} from "../../redux/actions/deleteFilmAction";


//création d'un composant à état, qui est une class héritant de React.Component
class Admin extends Component {

    //constructeur, avec super(props), on appel le constructeur de la class mère. ensuite on définit notre state locale
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            filmASupprimer: null
        }
    }

    //methode qui va etre lancée quand le composant est injecté dans le DOM : https://fr.reactjs.org/docs/react-component.html#componentdidmount
    componentDidMount() {
        if (!this.props.user || this.props.user.role !== "ADMIN") {
            this.props.history.push('/') // si l'user est null ou si il n'a pas le rôle ADMIN, on le redirige vers la page d'accueil
        }
    }

    //setState permet de changer l'etat local et met à jour le rendu du composant
    onToggleDeletePopup = (filmASupprimer = null) => {
        this.setState({
            showPopup: !this.state.showPopup,
            filmASupprimer: filmASupprimer
        })
    }

    //methode pour supprimer un film, on cherche l'index du film dans l'array films, on passe deleteFilm dans les props,
    //on appel la fonction qui est en fait deleteFilmAction de redux, en lui passant les arguments nécessaires, et on ferme le popup
    onDeleteFilm = () => {
        const index = this.props.films.findIndex(film => {return film._id === this.state.filmASupprimer._id})
        console.log(index)
        this.props.deleteFilm(this.state.filmASupprimer, index, this.props.user.token);
        this.onToggleDeletePopup()
    }

    //methode obligatoire pour les composants à état, c'est là qu'on va retourner ce qu'on veux afficher: https://fr.reactjs.org/docs/react-component.html#render
    render() {
        return (
            <>
                <div className="list-group m-5 w-50 align-self-center">
                    <p>Bienvenue dans l'admin</p>
                    {
                        this.props.films.map(film => <AdminElement film={film} key={film._id}
                                                                   onToggleDeletePopup={this.onToggleDeletePopup}/>)
                    }
                </div>
                {this.state.showPopup && ( // on affiche le code suivant seulement si state.showPopup est à true
                    <div className="popup">
                        <p>Supprimer "{this.state.filmASupprimer.titre}" ?</p>
                        <div className="d-flex flex-row flex-wrap justify-content-between">
                            <button className="btn btn-danger" onClick={this.onToggleDeletePopup}>non</button>
                            <button className="btn btn-success" onClick={this.onDeleteFilm}>oui</button>
                        </div>
                    </div>
                )}
            </>
        )
    }

}

//fonction qui envoie le state global de redux aux props du composant.
const mapStateToProps = (state) => {
    return {
        user: state.user,
        films: state.films
    }
}

//fonction qui envoie les actions de redux aux props du composant (voir plus haut), ici j'ai utilisé bindActionCreators car
//j'utilise des middleware afin d'aller récuperer mes données dans mon backend
const mapDispatchToProps = dispatch => bindActionCreators({
    deleteFilm: deleteFilmAction
}, dispatch)

// exporte le composant en le connectant à redux, en premier parametre on met la fonction qui permet de passer le state global
//aux props et en second, celle qui permet de passer les actions aux props
export default connect(mapStateToProps, mapDispatchToProps)(Admin)
