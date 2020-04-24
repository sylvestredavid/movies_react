import React, {Component} from "react";
import {Admin, AjouterFilm, Favoris, Header, Home, Login} from "./components";
import {Route, Switch} from "react-router-dom";
import {bindActionCreators} from "redux";
import {fetchFilmsAction} from "./redux/actions/fetchFilmsAction";
import {connect} from "react-redux";

class App extends Component {

    componentDidMount() {
        const {fetchFilms} = this.props
        fetchFilms();
    }

    render() {
        return (
            <div className="app d-flex flex-column">
                <Header/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/favoris" component={Favoris}/>
                    <Route path="/create" component={AjouterFilm}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" component={Admin}/>
                </Switch>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchFilms: fetchFilmsAction
}, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(App);
