import React, {Component} from "react";
import PropTypes from "prop-types";
import {changeFilm} from "../../actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {toggleLikedAction} from "../../actions/toggleLiked";

class MoviesElement extends Component {

    static propTypes = {
        film: PropTypes.object.isRequired,
    };

    onChangeFilm = () => {
        this.props.changeFilm(this.props.film)
    }

    onToggleLike = () => {
        const { toggleLiked } = this.props
        toggleLiked(this.props.film)
    }

    render() {
        return (
            <div className="w-25 p-2">
                <div className="card">
                    <img alt="film" src={this.props.film.img} className="card-img-top" onClick={this.onChangeFilm}/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.film.titre}</h5>
                        <div className="favHeart" style={{'color': this.props.film.liked ? 'red' : 'black'}}
                             onClick={this.onToggleLike}>❤
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleLiked: toggleLikedAction,
        changeFilm: changeFilm
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(MoviesElement)
