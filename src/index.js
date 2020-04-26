import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "./redux/store/store";

//création du store pour redux, à l'aide de configureStore
const store = configureStore()

//affiche un element react passé en premier parametre dans le noeud DOM passé en second parametre: https://fr.reactjs.org/docs/react-dom.html
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
