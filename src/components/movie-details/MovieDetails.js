import React, {Component} from "react";
import PropTypes from "prop-types";

export default class MovieDetails extends Component{

    static propTypes = {
        film: PropTypes.object,
        toggleLike: PropTypes.func.isRequired,
    }

    toggleLike = () => {
        this.props.toggleLike(this.props.film)
    }
    render() {
        return (
            <div className="w-25 border p-4">
                {this.props.film ?
                (<div className="card">
                    <img alt="film" src={this.props.film.img} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.film.titre}</h5>
                        <div className="favHeart" style={{'color': this.props.film.liked ? 'red': 'black'}} onClick={this.toggleLike}>❤</div>
                    </div>
                </div>) : <p>Choisissez un film</p>
                    }
            </div>
        )
    }
}
