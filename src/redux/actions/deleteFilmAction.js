import {deleteFilmError, deleteFilmSuccess} from "./index";

//deleteFilmAction est un thunk, une fonction qui retourne une fonction. Elle va nous permettre de dispatcher plusieurs actions
// par exemple, on va surrpimer un film via l'api avec fetch, puis si l'opération
//a réussis, on dispatche deleteFilmSuccess en lui passant l'index du film, sinon on dispatch deleteFilmError en lui passant l'erreur
export const deleteFilmAction = (film, index, token) => {
    return (dispatch) => {
        fetch('http://localhost:8080/movie/' + film._id + '/delete', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', 'authorization': 'JWT ' + token } // comme la suppression d'un film necessite d'etre admin, on passe le token de l'user dans le header
        })
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                dispatch(deleteFilmSuccess(index))
            })
            .catch((error) => {
                dispatch(deleteFilmError(error))
            })
    }
}

