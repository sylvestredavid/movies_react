import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {connectAction} from "../../redux/actions/connectAction";

class Login extends Component {

    submitForm = (e) => {
        e.preventDefault();
        const user = {
            username: this.username.value,
            password: this.password.value
        }
        const { login } = this.props
        login(user);
        const interval = setInterval(() => {
            if(this.props.user) {
                clearInterval(interval)
                this.props.history.push('/admin')
            }
        },50)
    }

    render() {
        return (
                <form onSubmit={this.submitForm} className="w-25 form-group align-self-center mt-3">
                    <label htmlFor="titre">username</label>
                    <input type="text" id="titre" ref={input => this.username = input}
                           className="form-control"/>
                    <label htmlFor="image" className="mt-2">password</label>
                    <input type="password" id="image" ref={input => this.password = input}
                           className="form-control"/>
                    <input type="submit" value="Envoyer" className="btn btn-primary mt-2"/>
                </form>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    login: connectAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
