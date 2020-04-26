import sortArray from "../../utils";
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
} from "../actions/types";

//les reducers sont des fonctions pures, c'est a dire qu'elles ne modifies pas l'état de l'application, et qu'elles ont
//toujours la même valeur de sortie (ici le state). Le reducer va recevoir le state global et une action en paramètres,
// et retournera un nouveau state. On utilisera le type de l'action pour savoir quoi retourner,
export default (state, action) => {
    switch (action.type) {
        case GET_FILMS_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_FILMS_SUCCESS:
            return {
                ...state,
                loading: false,
                films: action.films.sort(sortArray)
            }
        case GET_FILMS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case ADD_FILM_PENDING:
            return {
                ...state,
                loading: true
            }
        case ADD_FILM_SUCCESS:
            return {
                ...state,
                loading: false,
                films: [...state.films, action.film].sort(sortArray)
            }
        case ADD_FILM_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case CHANGE_FILM:
            return {
                ...state,
                film: action.film
            }
        case TOGGLE_LIKED_SUCCESS:
            return {
                ...state,
                films: state.films.map(film => {
                   if (film._id === action.id) {
                       return {
                           ...film,
                           liked: !film.liked
                       }
                   } else {
                       return film
                   }
                }),
                film: state.film && state.film._id === action.id ? {...state.film, liked: !state.film.liked} : state.film
            }
        case TOGGLE_LIKED_ERROR:
            return {
                ...state,
                error: action.error
            }
        case CONNECT_PENDING:
            return {
                ...state,
                loading: true
            }
        case CONNECT_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.user
            }
        case CONNECT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case DELETE_FILM_SUCCESS:
            return {
                ...state,
                loading: false,
                films: [
                    ...state.films.slice(0, action.index),
                    ...state.films.slice(action.index + 1)
                ]
            }
        case DELETE_FILM_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}
