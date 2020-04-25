import mongoose from 'mongoose'
import {MovieSchema} from "../models/movies.model";

//on crée une variable qui est un model mongoose, à l'aide du schémas MovieSchema, le premier argument est le nom de la collection
// chose intérressante: mongoose va chercher les collections au plurielles est est inssenssible à la casse, par exemple, ici j'ai mis Movie,
// mais ma collection s'appelle movies... cool non?^^
const Movie = mongoose.model('Movie', MovieSchema)

/**
 * recuperer tout les films
 * @param req : l'objet Requete
 * @param res : l'objet Response
 */
export const getMovies = (req, res) => {
    Movie.find({}, (err, movies) => {
        if (err) {
            // si on a une erreur, on la retourne
            res.send(err)
        }
        // sinon on retourne les films sous forme de json
        res.json(movies)
    })
}

/**
 *Créer un nouveau film
 * @param req : l'objet Requete
 * @param res : l'objet Response
 */
export const addMovie = (req, res) => {
    // on crée un nouvel objet suivant le model Movie auquel on passe le body de notre requette, biensur le body devra etre
    //constitué de tout les attributs présents dans notre schémas MovieSchema
    let newMovie = new Movie(req.body)

    //puis on le sauvegarde directement
    newMovie.save((err, movie) => {
        if (err) {
            res.send(err)
        }
        res.json(movie)
    })
}

/**
 * change la valeur de liked a false si elle etait a true et inversement, on commence par récuperer le film dans le body
 * on change la valeur de liked, on utilise l'id dans les params pour le trouver dans la bdd et l'updater
 * @param req
 * @param res
 */
export const toggleLiked = (req, res) => {
    const film = req.body;
    film.liked = !film.liked;
    Movie.findOneAndUpdate({ _id: req.params.movieId}, film, {new: true}, (err, movie) => {
        if (err) {
            res.send(err)
        }
        res.json(movie)
    })
}

/**
 * supprime le film de la bdd grâce à son id
 * @param req
 * @param res
 */
export const deleteMovie = (req, res) => {
    Movie.remove({ _id: req.params.movieId}, (err) => {
        if (err) {
            res.send(err)
        }
        res.json({message: "Effacer film avec succès"})
    })
}
