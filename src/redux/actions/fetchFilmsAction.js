import {getFilmsError, getFilmsPending, getFilmsSuccess} from "./index";

//fetchFilmsAction est un thunk, une fonction qui retourne une fonction. Elle va nous permettre de dispatcher plusieurs actions
// par exemple, on dispatch getFilmsPending, on va récuperer les films via l'api avec fetch, puis si l'opération
//a réussis, on dispatche getFilmsSuccess en lui passant la liste de films, sinon on dispatch getFilmsError en lui passant l'erreur
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

