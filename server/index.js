import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from "cors";
import {moviesRoute} from "./routes/moviesRoute";
import * as jsonWebToken from "jsonwebtoken";
import {userRoutes} from "./routes/userRoutes";
const { exec } = require('child_process');

const app = express();
const PORT = 8080;

//connexion mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://david:Myriam24@cluster0-gaxim.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

//body parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//cross origins
app.use(cors({
    origin: '*'
}));

//vérification de la précense d'un header authorization et si c'est le cas, on vérifie le token et on le decode en un objet
app.use((req, res, next) => {
    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0]==='JWT') {
        jsonWebToken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', (err, decode) => {
            if (err) req.user = undefined
            req.user = decode
            next()
        })
    } else {
        req.user = undefined
        next()
    }
})

moviesRoute(app)
userRoutes(app)

app.listen(PORT, () => {
    console.log(`Server listen port ${PORT}`);

    exec('npm run start');
})

