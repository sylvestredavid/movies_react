import rootReducer from '../reducers';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

//le state initial
const data = {
    films: [],
    film: null,
    loading: false,
    error: null,
    user: null
};

//la création du store, auquel on passe le reducer (rootReducer), l'état initial (initialState), et, si besoin, des middleware.
// les middlewares, ici on utilise thunk, permettent d'appeler une fonction entre le dispatch d'une action et le reducer,
// c'est ça qui nous permet d'appeler addFilmAction par exemple.
export default function configureStore(initialState = data) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    )
}
