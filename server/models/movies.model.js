import mongoose from 'mongoose'

const Schema = mongoose.Schema;

/**
 * création d'un schémas de film avec en attribut un titre, une img et liked qui est un boolean (vrai ou faux)
 */
export const MovieSchema = new Schema({
    titre: String,
    img: String,
    liked: Boolean,
})
