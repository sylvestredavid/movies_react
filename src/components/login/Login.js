import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {connectAction} from "../../redux/actions/connectAction";

//création d'un composant à état, qui est une class héritant de React.Component
class Login extends Component {

    //Methode d'envoi du formulaire, e.preventDefault permet de supprimer le comportement par défaut du formulaire,
    //ensuite on utilise la fonction login des props pour envoyer les données de connexion récupéré des champs et mises dans un objet,
    // avec le set interval, on va vérifier si on a bien récupéré l'user, si c'est le cas, on redirige vers admin
    submitForm = (e) => {
        e.preventDefault();
        const user = {
            username: this.username.value,
            password: this.password.value
        }
        this.props.login(user);
        const interval = setInterval(() => {
            if(this.props.user) {
                clearInterval(interval)
                this.props.history.push('/admin')
            }
        },50)
    }

    //methode obligatoire pour les composants à état, c'est là qu'on va retourner ce qu'on veux afficher: https://fr.reactjs.org/docs/react-component.html#render
    render() {
        return (
                <form onSubmit={this.submitForm} className="w-25 form-group align-self-center mt-3">
                    <small className="form-text text-muted">admin et adminpass</small>
                    <label htmlFor="titre">username</label>
                    <input type="text" id="titre" ref={input => this.username = input}
                           className="form-control"/>
                    <label htmlFor="image" className="mt-2">password</label>
                    <input type="password" id="image" ref={input => this.password = input}
                           className="form-control"/>
                    <input type="submit" value="Envoyer" className="btn btn-primary mt-2"/>
                    {
                        this.props.error && <p className="form-text text-muted">Mauvais username ou mot de pass</p>
                    }
                </form>
        )
    }

}

//fonction qui envoie le state global de redux aux props du composant.
const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.user,
        error: state.error
    }
}

//fonction qui envoie les actions de redux aux props du composant (voir plus haut), ici j'ai utilisé bindActionCreators car
//j'utilise des middleware afin d'aller récuperer mes données dans mon backend
const mapDispatchToProps = dispatch => bindActionCreators({
    login: connectAction
}, dispatch)

// exporte le composant en le connectant à redux, en premier parametre on met la fonction qui permet de passer le state global
//aux props et en second, celle qui permet de passer les actions aux props
export default connect(mapStateToProps, mapDispatchToProps)(Login)
