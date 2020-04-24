import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {AdminElement} from "../index";
import {deleteFilmAction} from "../../redux/actions/deleteFilmAction";

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            filmASupprimer: null
        }
    }

    componentDidMount() {
        if (!this.props.user || this.props.user.role !== "ADMIN") {
            this.props.history.push('/')
        }
    }

    onToggleDeletePopup = (filmASupprimer = null) => {
        this.setState({
            showPopup: !this.state.showPopup,
            filmASupprimer: filmASupprimer
        })
    }

    onDeleteFilm = () => {
        const index = this.props.films.findIndex(film => {return film._id === this.state.filmASupprimer._id})
        console.log(index)
        const { deleteFilm } = this.props
        deleteFilm(this.state.filmASupprimer, index, this.props.user.token);
        this.onToggleDeletePopup()
    }

    render() {
        return (
            <>
                <div className="list-group m-5 w-50 align-self-center">
                    <p>Bienvenue dans l'admin</p>
                    {
                        this.props.films.map(film => <AdminElement film={film} key={film._id}
                                                                   onToggleDeletePopup={this.onToggleDeletePopup}/>)
                    }
                </div>
                {this.state.showPopup && (
                    <div className="popup">
                        <p>Supprimer "{this.state.filmASupprimer.titre}" ?</p>
                        <div className="d-flex flex-row flex-wrap justify-content-between">
                            <button className="btn btn-danger" onClick={this.onToggleDeletePopup}>non</button>
                            <button className="btn btn-success" onClick={this.onDeleteFilm}>oui</button>
                        </div>
                    </div>
                )}
            </>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.user,
        films: state.films
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteFilm: deleteFilmAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
