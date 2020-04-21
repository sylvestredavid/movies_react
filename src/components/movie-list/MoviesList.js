import React, {Component} from "react";
import MoviesElement from "./MoviesElement";
import PropTypes from 'prop-types'


export default class MoviesList extends Component {

    static propTypes = {
        films: PropTypes.array.isRequired,
        changeFilm: PropTypes.func.isRequired,
        toggleLike: PropTypes.func.isRequired,
    }

    changeFilm = (f) => {
        this.props.changeFilm(f)
    }

    toggleLike = (f) => {
        this.props.toggleLike(f)
    }

    render() {
        return (
            <div className="w-75 d-flex flex-row flex-wrap align-content-start">
                {
                    this.props.films.map((film, index) => <MoviesElement key={index} film={film} changeFilm={this.changeFilm}
                                                              toggleLike={this.toggleLike}/>)
                }
            </div>
        )
    }
}
