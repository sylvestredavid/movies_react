import mongoose from 'mongoose'
import {MovieSchema} from "../models/movies.model";

const Movie = mongoose.model('Movie', MovieSchema)
/**
 * recuperer tout les produits d'un user
 * @param req : l'objet Requete
 * @param res : l'objet Response
 */
export const getMovies = (req, res) => {
    Movie.find({}, (err, movies) => {
        if (err) {
            res.send(err)
        }
        res.json(movies)
    })
}

export const addMovie = (req, res) => {
    let newMovie = new Movie(req.body)

    newMovie.save((err, movie) => {
        if (err) {
            res.send(err)
        }
        res.json(movie)
    })
}

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

export const deleteMovie = (req, res) => {
    Movie.remove({ _id: req.params.id}, (err) => {
        if (err) {
            res.send(err)
        }
        res.json({message: "Effacer film avec succès"})
    })
}
