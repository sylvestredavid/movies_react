import React, {Component} from "react";
import MoviesElement from "../movie-list/MoviesElement";

export default class Favoris extends Component{

    constructor(props) {
        super(props)
        this.state = {
            films: []
        };
    }
    componentDidMount = () => {
        fetch('http://localhost:8080/movies-back/public/index.php/movie/')
            .then(res => res.json())
            .then((data) => {
                this.setState({films: data.filter(d => d.liked)})
            })
            .catch(console.log('error'))
    }

    toggleLike = (film) =>{
        let films = this.state.films;
        const index = films.findIndex(f => {return f.titre === film.titre})
        let body = films[index];
        body.liked = !body.liked;
        fetch('http://localhost:8080/movies-back/public/index.php/movie/toggleLike', {method: 'PUT', body: JSON.stringify(body)})
            .then(res => res.json())
            .then((data) => {
                films.splice(index, 1)
                this.setState({films: films})
            })
            .catch(console.log('error'))
    }
  render() {
    return (
        <div className="d-flex flex-row flex-wrap align-content-start pt-4 p-2">
            {
                this.state.films.map((film, index) =><MoviesElement key={index} film={film} toggleLike={this.toggleLike}/>)
            }
        </div>
    )
  }
}
