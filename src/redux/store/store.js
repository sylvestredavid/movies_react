import rootReducer from '../reducers';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const data = {
    films: [],
    film: null,
    loading: false,
    error: null,
    user: null
};

export default function configureStore(initialState = data) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    )
}
