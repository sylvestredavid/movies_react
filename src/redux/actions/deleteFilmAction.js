import {deleteFilmError, deleteFilmSuccess} from "./index";

export const deleteFilmAction = (film, index, token) => {
    return (dispatch) => {
        fetch('http://localhost:8080/movie/' + film._id + '/delete', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', 'authorization': 'JWT ' + token }
        })
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                dispatch(deleteFilmSuccess(index))
            })
            .catch((error) => {
                console.log(error)
                dispatch(deleteFilmError(error))
            })
    }
}

