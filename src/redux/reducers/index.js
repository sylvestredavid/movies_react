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
                ...state, //...state veux dire qu'on met les attributs de state dans notre objet en retour
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
                films: [...state.films, action.film].sort(sortArray) // [...state.films, action.film] ici on crée un array, dans lequel on met l'array state.films plus action.film
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
                films: state.films.map(film => { //.map va créer un nouveau tableau par rapport au retour de la fonction passé en paramètre: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map
                   if (film._id === action.id) { // si film (film etant l'entrée actuelle du tableau)._id est égal a action.id
                       return {
                           ...film,             //on retourne un objet avec tout les attributs de film
                           liked: !film.liked   // sauf liked qui sera le contraire de film.liked
                       }
                   } else { // sinon on retourne film
                       return film
                   }
                }),
                //ici afin de changer egalement le liked du film dans la partie movieDetail, on vérifie si film n'est pas null, dans
                //ce cas, on vérifie si les 2 id sont identiques, si c'est le cas on retourne un objet avec les attributs de film
                //sauf liked qui sera le contraire de film.liked, sinon on retourne state.film
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
                films: [ //ici, afin de ne pas modifier state, ce qui est interdit, on crée un nouveau tableau
                    ...state.films.slice(0, action.index), //auquel on ajoute une copie de state.film du début jusqu'a l'index (exclu) du film a supprimer
                    ...state.films.slice(action.index + 1) // puis une copie de l'index+1 du film a supprimer jusqu'a la fin du tableau
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
