import React, {Component} from "react";
import {Loading, MovieDetails, MoviesList} from "../index";
import {connect} from "react-redux";

class Home extends Component{

  render() {
    return (
        <div className="d-flex flex-row border flex-fill pt-4 p-2">
            {this.props.loading && <Loading/>}
            <MoviesList/>
            <MovieDetails/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        loading: state.loading
    }
}

export default connect(mapStateToProps)(Home)

