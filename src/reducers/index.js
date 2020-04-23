export default (state, action) => {
    switch (action.type) {
        case 'GET_FILMS_PENDING':
            return {
                ...state,
                loading: true
            }
        case 'GET_FILMS_SUCCESS':
            return {
                ...state,
                loading: false,
                films: action.films
            }
        case 'GET_FILMS_ERROR':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case 'ADD_FILM_PENDING':
            return {
                ...state,
                loading: true
            }
        case 'ADD_FILM_SUCCESS':
            return {
                ...state,
                loading: true,
                films: [...state.films, action.film]
            }
        case 'ADD_FILMS_ERROR':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case 'CHANGE_FILM':
            return {
                ...state,
                film: action.film
            }
        case 'TOGGLE_LIKED_PENDING':
            return {
                ...state,
                loading: true
            }
        case 'TOGGLE_LIKED_SUCCESS':
            return {
                ...state,
                loading: false,
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
        case 'TOGGLE_LIKED_ERROR':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}
