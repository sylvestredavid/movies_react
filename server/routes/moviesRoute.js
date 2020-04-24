/**
 * routes de l'api pour travailler sur les films
 * @param app : le server qui va utiliser les routes
 */
import {addMovie, deleteMovie, getMovies, toggleLiked} from "../controller/moviesController";
import {loginRequired} from "../controller/userController";


export const moviesRoute = (app) => {
    app.route('/movies')
        .get(getMovies)

    app.route('/movies/add')
        .post(addMovie)

    app.route('/movie/:id/delete')
        .delete(loginRequired, deleteMovie)

    app.route('/movie/:movieId/toggleLiked')
        .put(toggleLiked)
}
