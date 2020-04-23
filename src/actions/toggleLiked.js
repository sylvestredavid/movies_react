import {toggleLikedError, toggleLikedPending, toggleLikedSuccess} from "./index";

export const toggleLikedAction = (film) => {
    return (dispatch) => {
        console.log('toggle liked')
        dispatch(toggleLikedPending());
        fetch('http://localhost:8080/movies-back/public/index.php/movie/toggleLike', {method: 'PUT', body: JSON.stringify(film)})
                .then(res => res.json())
                .then(() => {
                    dispatch(toggleLikedSuccess(film.id))
                })
                .catch((error) => {
                    dispatch(toggleLikedError(error))
                })
    }
}

