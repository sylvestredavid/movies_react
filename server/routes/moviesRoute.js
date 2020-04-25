/**
 * routes de l'api pour travailler sur les films
 * @param app : le server qui va utiliser les routes
 */
import {addMovie, deleteMovie, getMovies, toggleLiked} from "../controller/moviesController";
import {adminRequired} from "../controller/userController";


export const moviesRoute = (app) => {
    //quand on a une route /movies avec la méthode get, on appel la fonction getMovies de moviesController
    app.route('/movies')
        .get(getMovies)

    //quand on a une route /movie/add avec la méthode post, on appel la fonction addMovie de moviesController
    app.route('/movies/add')
        .post(addMovie)

    //quand on a une route /movie/:id/delete :movieId étant l'id du film, avec la méthode delete, on appel la fonction adminRequired de userController
    // et la fonction getMovies de moviesController qui va utiliser :id se trouvant dans request.params. Cette route n'est utilisable que par un user loggé avec
    //le role ADMIN
    app.route('/movie/:movieId/delete')
        .delete(adminRequired, deleteMovie)

    //quand on a une route /movie/:movieId/toggleLiked, :movieId étant l'id du film, avec la méthode put, on appel la fonction toggleLiked de moviesController
    app.route('/movie/:movieId/toggleLiked')
        .put(toggleLiked)
}
