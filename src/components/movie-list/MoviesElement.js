import React, {Component} from "react";
import PropTypes from "prop-types";

export default class MoviesElement extends Component{

    constructor(props) {
        super(props);
        this.state = {
            film: this.props.film
        }
    }

    static propTypes = {
        film: PropTypes.object.isRequired,
        changeFilm: PropTypes.func,
        toggleLike: PropTypes.func.isRequired,
    }

    changeFilm = () => {
        if(this.props.changeFilm) this.props.changeFilm(this.props.film)
    }
    toggleLike = () => {
        this.props.toggleLike(this.props.film)
    }
    render() {
        return (
            <div className="w-25 p-2">
                <div className="card">
                    <img alt="film" src={this.props.film.img} className="card-img-top" onClick={this.changeFilm} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.film.titre}</h5>
                        <div className="favHeart" style={{'color': this.props.film.liked ? 'red': 'black'}} onClick={this.toggleLike}>❤</div>
                    </div>
                </div>
            </div>
        )
    }
}
