export const getFilmsPending = () => {
    return {
        type: 'GET_FILMS_PENDING'
    }
};

export const getFilmsSuccess = (films) => {
    return {
        type: 'GET_FILMS_SUCCESS',
        films
    }
};

export const getFilmsError = (error) => {
    return {
        type: 'GET_FILMS_ERROR',
        error
    }
};

export const addFilmPending = () => {
    return {
        type: 'ADD_FILM_PENDING',
    }
};

export const addFilmSuccess = (film) => {
    return {
        type: 'ADD_FILM_SUCCESS',
        film
    }
};

export const addFilmError = (error) => {
    return {
        type: 'ADD_FILM_ERROR',
        error
    }
};

export const changeFilm = (film) => {
    return {
        type: 'CHANGE_FILM',
        film
    }
};

export const toggleLikedSuccess = (id) => {
    return {
        type: 'TOGGLE_LIKED_SUCCESS',
        id
    }
};

export const toggleLikedError = (error) => {
    return {
        type: 'TOGGLE_LIKED_ERROR',
        error
    }
};
