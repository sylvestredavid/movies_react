import {addFilmError, addFilmPending, addFilmSuccess} from "./index";

//addFilmAction est un thunk, une fonction qui retourne une fonction. Elle va nous permettre de dispatcher plusieurs actions
// par exemple, ici, on dispatche addFilmPending, on va ajouter un film dans la bdd via l'api avec fetch, puis si l'opération
//a réussis, on dispatche addFilmSuccess en lui passant le film retourner par l'api, sinon on dispatch addFilmError en lui passant l'erreur
export const addFilmAction = (film) => {
    return (dispatch) => {
        dispatch(addFilmPending());
        fetch('http://localhost:8080/movies/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(film)
        })
            .then(res => res.json())
            .then((res) => {
                dispatch(addFilmSuccess(res))
            })
            .catch((error) => {
                dispatch(addFilmError(error))
            })
    }
}

