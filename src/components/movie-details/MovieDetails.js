import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {toggleLikedAction} from "../../actions/toggleLiked";

class MovieDetails extends Component {

    onToggleLike = () => {
        const {toggleLiked} = this.props
        toggleLiked(this.props.film)
    }

    render() {
        return (
            <div className="w-25 border pr-4 pl-4 pb-4">
                {this.props.film ?
                    (<div className="position-sticky sticky-top pt-4">
                        <div className="card">
                            <img alt="film" src={this.props.film.img} className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">{this.props.film.titre}</h5>
                                <div className="favHeart" style={{'color': this.props.film.liked ? 'red' : 'black'}}
                                     onClick={this.onToggleLike}>❤
                                </div>
                            </div>
                        </div>
                    </div>) : <p className="mt-4">Choisissez un film</p>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        film: state.film
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleLiked: toggleLikedAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
