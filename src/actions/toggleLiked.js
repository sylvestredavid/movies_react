import {toggleLikedError, toggleLikedPending, toggleLikedSuccess} from "./index";

export const toggleLikedAction = (film) => {
    return (dispatch) => {
        dispatch(toggleLikedPending());
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

