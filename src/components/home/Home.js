import React, {Component} from "react";
import {MovieDetails, MoviesList} from "../index";

export default class Home extends Component{

    constructor(props) {
        super(props)
        this.state = {
            film: null,
            films: []
        }
    }

    componentDidMount = () => {
        fetch('http://localhost:8080/movies-back/public/index.php/movie/')
            .then(res => res.json())
            .then((data) => {
                this.setState({films: data})
            })
            .catch(console.log('error'))
    }

    showFilm = (f) =>{
        this.setState({
            film: f
        })
    }

    toggleLike = (film) =>{
        let films = this.state.films;
        const index = films.findIndex(f => {return f.titre === film.titre})
        let body = films[index];
        body.liked = !body.liked;
        fetch('http://localhost:8080/movies-back/public/index.php/movie/toggleLike', {method: 'PUT', body: JSON.stringify(body)})
            .then(res => res.json())
            .then((data) => {
                this.setState({})
            })
            .catch(console.log('error'))
    }
  render() {
    return (
        <div className="d-flex flex-row border flex-fill pt-4 p-2">
            <MoviesList films={this.state.films} changeFilm={this.showFilm} toggleLike={this.toggleLike}/>
            <MovieDetails film={this.state.film} toggleLike={this.toggleLike}/>
        </div>
    )
  }
}
