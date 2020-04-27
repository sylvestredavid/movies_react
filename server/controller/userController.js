import mongoose from 'mongoose'
import { UserSchema } from "../models/userModel";
import bcrypt from 'bcrypt'
import * as jwt from "jsonwebtoken";

const User = mongoose.model('Users', UserSchema)

/*
*enregistrer un nouvel utilisateur, on récupère le body de la requete, on crypt le password et on le sauvegarde dans la bdd
*/
export const register = (req, res) => {
    console.log(req.body)
    let newUser = new User(req.body)
    newUser.password = bcrypt.hashSync(req.body.password, 10)

    newUser.save((err, user) => {
        if (err) {
            res.send(err)
        }
        res.json(user)
    })
}

/*
*se connecter, on récupère l'user depuis son username, si on ne le trouve pas, on renvoi une erreur, sinon on vérifie son
* mot de passe à l'aide de la fonction comparePassword, si les 2 mdp ne sont pas identique, on renvoi une erreur, sinon
* on renvoi un token contenant un objet avec l'username, le role et l'id de l'user
*/
export const sign_in = function(req, res) {
    User.findOne({
      username: req.body.username
    }, function(err, user) {
      if (err) throw err;
      if (!user) {
        res.status(401).json({ message: 'Utilisateur inconnu' });
      } else if (user) {
        if (!user.comparePassword(req.body.password)) {
          res.status(401).json({ message: 'Mauvais mot de passe' });
        } else {
          return res.json({token: jwt.sign({ role: user.role, username: user.username, _id: user._id}, 'RESTFULAPIs')});
        }
      }
    });
  };


/*
*fonction qui bloque l'accès aux personnes non connectés ou n'ayant pas le role ADMIN, on vérifie si la requette contient un
* user (qui aura été créé par la fonction présente dans index.js, si c'est le cas, on vérifie si il a bien le role ADMIN, si
* oui, on passe à la suite avec next(), sinon on retourne une erreur
*/
export const adminRequired = function(req, res, next) {
    if (req.user && req.user.role === "ADMIN") {
      next();
    } else {
      return res.status(401).json({ message: 'Unauthorized user!' });
    }
  };
