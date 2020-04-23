import {addFilmError, addFilmPending, addFilmSuccess} from "./index";

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

