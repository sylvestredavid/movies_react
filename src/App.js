import React, {Component} from "react";
import {AjouterFilm, Favoris, Header, Home} from "./components";
import {Route, Switch} from "react-router-dom";

export default class App extends Component{
  render() {
    return (
        <div className="app d-flex flex-column">
        <Header/>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/favoris" component={Favoris} />
                <Route path="/create" component={AjouterFilm} />
            </Switch>
        </div>
    )
  }
}
