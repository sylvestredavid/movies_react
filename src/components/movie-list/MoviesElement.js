import React, {Component} from "react";
import PropTypes from "prop-types";
import {changeFilm} from "../../redux/actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {toggleLikedAction} from "../../redux/actions/toggleLikedAction";

class MoviesElement extends Component {

    static propTypes = {
        film: PropTypes.object.isRequired,
    };

    onChangeFilm = () => {
        this.props.changeFilm(this.props.film)
    }

    onToggleLike = () => {
        const {toggleLiked} = this.props
        toggleLiked(this.props.film)
    }

    render() {
        return (
            <div className="w-25 p-2">
                <div className="cards">
                    <img alt="film" src={this.props.film.img} className="card-img-top" onClick={this.onChangeFilm}/>
                    <div className="favHeart">
                            <span style={{'color': this.props.film.liked ? 'red' : 'black'}}
                                  onClick={this.onToggleLike}>❤
                            </span>
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
