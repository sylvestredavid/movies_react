import {addFilmError, addFilmPending, addFilmSuccess} from "./index";

export const addhFilmAction = (film) => {
    return (dispatch) => {
        console.log('add films dispatch')
        dispatch(addFilmPending());
        fetch('http://localhost:8080/movies-back/public/index.php/movie/add', {
            method: 'POST',
            body: JSON.stringify(film)
        })
            .then(() => {
                dispatch(addFilmSuccess(film))
            })
            .catch((error) => {
                dispatch(addFilmError(error))
            })
    }
}

