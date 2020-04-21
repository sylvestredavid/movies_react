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
        fetch('http://localhost:8080/movies-back/public/index.php/movie/add', {method: 'POST', body: JSON.stringify(this.state.film)})
            .then(res => res.json())
            .then((data) => {
                this.setState({message: 'Le film a bien été ajouté.'})
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
            <div>
                <div>
                    <p>titre: {this.state.film.titre}</p>
                    {
                        this.state.film.img.length > 0 && <img src={this.state.film.img} alt={''}/>
                    }
                </div>
                <form onSubmit={this.submitForm}>
                    <p>{this.state.message}</p>
                    <label>
                        Titre
                        <input type="text" value={this.state.film.titre} onChange={this.changeTitre}/>
                    </label>
                    <label>
                        Image
                        <input type="text" value={this.state.film.img} onChange={this.changeImg}/>
                    </label>
                    <input type="submit" value="Envoyer"/>
                </form>
            </div>
        )
    }

}
