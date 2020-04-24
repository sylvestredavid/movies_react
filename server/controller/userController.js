import mongoose from 'mongoose'
import { UserSchema } from "../models/userModel";
import bcrypt from 'bcrypt'
import * as jwt from "jsonwebtoken";

const User = mongoose.model('Users', UserSchema)

/*
*enregistrer un nouvel utilisateur
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
*se connecter
*/
export const sign_in = function(req, res) {
    User.findOne({
      username: req.body.username
    }, function(err, user) {
      if (err) throw err;
      if (!user) {
        res.status(401).json({ message: 'Authentication failed. User not found.' });
      } else if (user) {
        if (!user.comparePassword(req.body.password)) {
          res.status(401).json({ message: 'Authentication failed. Wrong password.' });
        } else {
          return res.json({token: jwt.sign({ role: user.role, username: user.username, _id: user._id}, 'RESTFULAPIs')});
        }
      }
    });
  };


/*
*fonction qui bloque l'accès aux personnes non connectés
*/
export const loginRequired = function(req, res, next) {
    if (req.user && req.user.role === "ADMIN") {
      next();
    } else {
      return res.status(401).json({ message: 'Unauthorized user!' });
    }
  };
