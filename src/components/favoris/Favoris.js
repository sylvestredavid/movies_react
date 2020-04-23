import React, {Component} from "react";
import MoviesElement from "../movie-list/MoviesElement";
import {connect} from "react-redux";

class Favoris extends Component{

  render() {
    return (
        <div className="d-flex flex-row flex-wrap align-content-start pt-4 p-2">
            {
                this.props.films.map((film, index) =><MoviesElement key={index} film={film}/>)
            }
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        films: state.films.filter((film) => film.liked),
    }
}

export default connect(mapStateToProps)(Favoris)
