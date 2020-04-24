import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import {string} from "prop-types";


const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: 'Entrez un username'
    },
    password: {
        type: String,
        required: 'Entrez un password'
    },
    role: String
})

UserSchema.methods.comparePassword = function(mdp) {
    return bcrypt.compareSync(mdp, this.password)
}
