import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const MovieSchema = new Schema({
    titre: String,
    img: String,
    liked: Boolean,
})
