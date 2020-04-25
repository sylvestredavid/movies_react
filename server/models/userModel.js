import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema;

/**
 * création d'un schémas d'user avec en attribut un username, un password et un role
 */
export const UserSchema = new Schema({
    username: {
        type: String, //le type de l'attibut (String, Boolean, ect)
        trim: true, //trim est une fonction qui supprime les espace au début et à la fin de la chaine
        unique: true, //unique pour ne pas avoir plusieurs users avec le même username
        required: 'Entrez un username' // required car l'username est requis, avec le message au cas où l'attribut serait manquant
    },
    password: {
        type: String,
        required: 'Entrez un password'
    },
    role: String
})

// on attache une methode pour comparer les mdp au schémas, comme le mdp en bdd sera crypté, on utilise le module bcrypt
// qui propose une fonction pour comparer une mdp crypté à un non crypté
UserSchema.methods.comparePassword = function(mdp) {
    return bcrypt.compareSync(mdp, this.password)
}
