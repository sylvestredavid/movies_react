import {
    ADD_FILM_ERROR,
    ADD_FILM_PENDING,
    ADD_FILM_SUCCESS,
    CHANGE_FILM,
    CONNECT_ERROR,
    CONNECT_PENDING,
    CONNECT_SUCCESS,
    DELETE_FILM_ERROR,
    DELETE_FILM_SUCCESS,
    GET_FILMS_ERROR,
    GET_FILMS_PENDING,
    GET_FILMS_SUCCESS,
    TOGGLE_LIKED_ERROR,
    TOGGLE_LIKED_SUCCESS
} from "./types";

//Les actions sont les éléments déclencheurs de redux, elles retournent un objet avec le type de l'action et le payload,
// comme par exemple un film ou une erreur ou un id etc...
export const getFilmsPending = () => {
    return {
        type: GET_FILMS_PENDING
    }
};

export const getFilmsSuccess = (films) => {
    return {
        type: GET_FILMS_SUCCESS,
        films
    }
};

export const getFilmsError = (error) => {
    return {
        type: GET_FILMS_ERROR,
        error
    }
};

export const addFilmPending = () => {
    return {
        type: ADD_FILM_PENDING,
    }
};

export const addFilmSuccess = (film) => {
    return {
        type: ADD_FILM_SUCCESS,
        film
    }
};

export const addFilmError = (error) => {
    return {
        type: ADD_FILM_ERROR,
        error
    }
};

export const changeFilm = (film) => {
    return {
        type: CHANGE_FILM,
        film
    }
};

export const toggleLikedSuccess = (id) => {
    return {
        type: TOGGLE_LIKED_SUCCESS,
        id
    }
};

export const toggleLikedError = (error) => {
    return {
        type: TOGGLE_LIKED_ERROR,
        error
    }
};

export const connectPending = () => {
    return {
        type: CONNECT_PENDING
    }
};

export const connectSuccess = (user) => {
    return {
        type: CONNECT_SUCCESS,
        user
    }
};

export const connectError = (error) => {
    return {
        type: CONNECT_ERROR,
        error
    }
};

export const deleteFilmSuccess = (index) => {
    return {
        type: DELETE_FILM_SUCCESS,
        index
    }
};

export const deleteFilmError = (error) => {
    return {
        type: DELETE_FILM_ERROR,
        error
    }
};
