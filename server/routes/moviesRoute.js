/**
 * routes de l'api pour travailler sur les films
 * @param app : le server qui va utiliser les routes
 */
import {addMovie, getMovieByTitle, getMovies, toggleLiked} from "../controller/moviesController";


export const moviesRoute = (app) => {
    app.route('/movies')
        .get(getMovies)

    app.route('/movies/add')
        .post(addMovie)

    app.route('/movie/:movieId/toggleLiked')
        .put(toggleLiked)
}
