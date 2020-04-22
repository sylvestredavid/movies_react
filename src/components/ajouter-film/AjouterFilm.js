import React, {Component} from "react";

export default class AjouterFilm extends Component {

    constructor(props) {
        super(props)
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
        fetch('http://localhost:8080/movies-back/public/index.php/movie/add', {
            method: 'POST',
            body: JSON.stringify(this.state.film)
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    film: {
                        titre: '',
                        img: '',
                        liked: false
                    },
                    message: 'Le film a bien été ajouté.'
                })
                setTimeout(() => {
                    this.props.history.push('/')
                }, 500)
            })
            .catch(console.log('error'))
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

    render() {
        return (
            <div className="d-flex flex-row border flex-fill pt-4 p-2 justify-content-around">
                <form onSubmit={this.submitForm} className="w-25 form-group">
                    <label htmlFor="titre">Titre</label>
                    <input type="text" id="titre" value={this.state.film.titre} onChange={this.changeTitre}
                           className="form-control"/>
                    <label htmlFor="image" className="mt-2">Image</label>
                    <input type="text" id="image" value={this.state.film.img} onChange={this.changeImg}
                           className="form-control"/>
                    <input type="submit" value="Envoyer" className="btn btn-primary mt-2"/>
                    <p className="form-text text-muted">{this.state.message}</p>
                </form>
                <div className="w-25 p-2">
                    <div className="card">
                        {
                            this.state.film.img.length > 0 &&
                            <img src={this.state.film.img} alt='' className="card-img-top"/>
                        }
                        <div className="card-body">
                            <h5 className="card-title">{this.state.film.titre}</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
