import {getFilmsError, getFilmsPending, getFilmsSuccess} from "./index";

export const fetchFilmsAction = () => {
    console.log('fetch films')
    return (dispatch) => {
        console.log('fetch films dispatch')
        dispatch(getFilmsPending());
        fetch('http://localhost:8080/movies/')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if(res.error) {
                    throw(res.error);
                }
                dispatch(getFilmsSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(getFilmsError(error));
            })
    }
}

