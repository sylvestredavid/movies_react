import React, {Component} from "react";
import {Admin, AjouterFilm, Favoris, Header, Home, Login} from "./components";
import {Route, Switch} from "react-router-dom";
import {bindActionCreators} from "redux";
import {fetchFilmsAction} from "./redux/actions/fetchFilmsAction";
import {connect} from "react-redux";

//création d'un composant à état, qui est une class héritant de React.Component
class App extends Component {

    //methode qui va etre lancée quand le composant est injecté dans le DOM : https://fr.reactjs.org/docs/react-component.html#componentdidmount
    componentDidMount() {
        this.props.fetchFilms();
    }

    //methode obligatoire pour les composants à état, c'est là qu'on va retourner ce qu'on veux afficher: https://fr.reactjs.org/docs/react-component.html#render
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

//fonction qui envoie les actions de redux aux props du composant (voir plus haut), ici j'ai utilisé bindActionCreators car
//j'utilise des middleware afin d'aller récuperer mes données dans mon backend, sans ça, on aurais pus faire simplement:
//const mapDispatchToProps = dispatch => {
//   return {
//     leNomDeLaMethodeQueJeVeuxDansMesProps: attributAPasser => dispatch(nomDeMonAction(attributAPasser))
//   }
// }
const mapDispatchToProps = dispatch => bindActionCreators({
    fetchFilms: fetchFilmsAction
}, dispatch)

// exporte le composant en le connectant à redux, en premier parametre on met la fonction qui permet de passer le state global
//aux props et en second, celle qui permet de passer les actions aux props
export default connect(
    null,
    mapDispatchToProps
)(App);
