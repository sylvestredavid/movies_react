import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addFilmAction} from "../../redux/actions/addFilmAction";
import {Loading} from "../index";

class AjouterFilm extends Component {

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

    submitForm = (e) => {
        e.preventDefault();
        const { addFilm } = this.props
        addFilm(this.state.film);
        this.setState({
            film: {
                titre: '',
                img: '',
                liked: false
            },
            message: 'Le film a bien été ajouté.'
        })
        // setTimeout(() => {
        //     this.props.history.push('/')
        // }, 500)
    }

    changeTitre = (e) => {
        this.setState({
            film: {
                titre: e.target.value,
                img: this.state.film.img,
                liked: false
            }
        })
    }

    changeImg = (e) => {
        this.setState({
            film: {
                titre: this.state.film.titre,
                img: e.target.value,
                liked: false
            }
        })
    }

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

const mapStateToProps = (state) => {
    console.log(state)
    return {
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    addFilm: addFilmAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AjouterFilm)
