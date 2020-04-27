import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addFilmAction} from "../../redux/actions/addFilmAction";
import {Loading} from "../index";

//création d'un composant à état, qui est une class héritant de React.Component
class AjouterFilm extends Component {


    //constructeur, avec super(props), on appel le constructeur de la class mère. ensuite on définit notre state locale
    constructor(props) {
        super(props);
        this.state = {
            film: {
                titre: '',
                img: '',
                liked: false
            },
            message: ''
        }
    }

    //Methode d'envoi du formulaire, e.preventDefault permet de supprimer le comportement par défaut du formulaire,
    //ensuite on passe addFilm aux props, on l'utilise pour envoyer le film qui se trouve dans le tate local, on vide
    //le film du state global et on change le message du state local, la fonction setState va mettre à jour le rendu
    submitForm = (e) => {
        e.preventDefault();
        this.props.addFilm(this.state.film);
        this.setState({
            film: {
                titre: '',
                img: '',
                liked: false
            },
            message: 'Le film a bien été ajouté.'
        })
    }

    //cette méthode va permettre de voir le titre du film s'inscrire dans le preview au fur et a mesure qu'on le rentre dans l'input
    changeTitre = (e) => {
        this.setState({
            film: {
                titre: e.target.value,
                img: this.state.film.img,
                liked: false
            }
        })
    }

    //cette méthode va permettre de voir l'image du film dans le preview
    changeImg = (e) => {
        this.setState({
            film: {
                titre: this.state.film.titre,
                img: e.target.value,
                liked: false
            }
        })
    }

    //cette méthode va permettre de voir le coeur dans le preview passer en rouge ou en noir suivant si la checkbox est cochée
    changeLiked = (e) => {
        this.setState({
            film: {
                titre: this.state.film.titre,
                img: this.state.film.img,
                liked: e.target.checked
            }
        })
    }

    render() {
        return (
            <div className="d-flex flex-row border flex-fill pt-4 p-2 justify-content-around">
                {this.props.loading && <Loading/>}
                <form onSubmit={this.submitForm} className="w-25 form-group">
                    <label htmlFor="titre">Titre</label>
                    <input type="text" id="titre" value={this.state.film.titre} onChange={this.changeTitre}
                           className="form-control"/>
                    <label htmlFor="image" className="mt-2">Image (url)</label>
                    <input type="text" id="image" value={this.state.film.img} onChange={this.changeImg}
                           className="form-control"/>
                    <div className="form-check mt-2">
                        <input className="form-check-input"  type="checkbox" value={this.state.film.liked} onChange={this.changeLiked} id="liked"/>
                        <label className="form-check-label" htmlFor="liked">J'aime</label>
                    </div>
                    <input type="submit" value="Envoyer" className="btn btn-primary mt-2"/>
                    <p className="form-text text-muted">{this.state.message}</p>
                </form>
                <div className="w-25 p-2">
                    <div className="card">
                        <img src={this.state.film.img.length > 0 ? this.state.film.img : 'https://www.karriere-jet.de/skin/images/hints/no-preview-available.jpg'} alt='' className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.film.titre.length > 0 ? this.state.film.titre : 'Titre'}</h5>
                            <div className="favHeart" style={{'color': this.state.film.liked ? 'red': 'black'}}>❤</div>
                        </div>
                    </div>
                </div>
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

//fonction qui envoie les actions de redux aux props du composant (voir plus haut), ici j'ai utilisé bindActionCreators car
//j'utilise des middleware afin d'aller récuperer mes données dans mon backend
const mapDispatchToProps = dispatch => bindActionCreators({
    addFilm: addFilmAction
}, dispatch)

// exporte le composant en le connectant à redux, en premier parametre on met la fonction qui permet de passer le state global
//aux props et en second, celle qui permet de passer les actions aux props
export default connect(mapStateToProps, mapDispatchToProps)(AjouterFilm)
