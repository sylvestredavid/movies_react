import React, {Component} from "react";
import MoviesElement from "./MoviesElement";
import {connect} from "react-redux";


class MoviesList extends Component {

    render() {
        return (
            <div className="w-75 d-flex flex-row flex-wrap align-content-start">
                {
                    this.props.films.map((film, index) => <MoviesElement key={index} film={film}/>)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        films: state.films
    }
}

export default connect(mapStateToProps)(MoviesList)
