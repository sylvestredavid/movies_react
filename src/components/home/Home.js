import React, {Component} from "react";
import {MovieDetails, MoviesList} from "../index";

export default class Home extends Component{

  render() {
    return (
        <div className="d-flex flex-row border flex-fill pt-4 p-2">
            <MoviesList/>
            <MovieDetails/>
        </div>
    )
  }
}
