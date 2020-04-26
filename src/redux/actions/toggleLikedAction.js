import {toggleLikedError, toggleLikedSuccess} from "./index";

//toggleLikedAction est un thunk, une fonction qui retourne une fonction. Elle va nous permettre de dispatcher plusieurs actions
// par exemple, on va envoyer une requette à l'api afin de changer la valeur de liked via l'api avec fetch, puis si l'opération
//a réussis, on dispatche toggleLikedSuccess en lui passant l'id du film, sinon on dispatch toggleLikedError en lui passant l'erreur
export const toggleLikedAction = (film) => {
    return (dispatch) => {
        fetch('http://localhost:8080/movie/'+film._id+'/toggleLiked', {method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(film)})
                .then(res => res.json())
                .then(() => {
                    dispatch(toggleLikedSuccess(film._id))
                })
                .catch((error) => {
                    dispatch(toggleLikedError(error))
                })
    }
}

