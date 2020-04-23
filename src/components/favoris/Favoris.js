import React, {Component} from "react";
import MoviesElement from "../movie-list/MoviesElement";
import {connect} from "react-redux";
import {Loading} from "../index";

class Favoris extends Component{

  render() {
    return (
        <div className="d-flex flex-row flex-wrap align-content-start pt-4 p-2">
            {this.props.loading && <Loading/>}
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
        loading: state.loading
    }
}

export default connect(mapStateToProps)(Favoris)
