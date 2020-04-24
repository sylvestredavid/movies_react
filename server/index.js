import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from "cors";
import {moviesRoute} from "./routes/moviesRoute";
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

moviesRoute(app)

app.listen(PORT, () => {
    console.log(`Server listen port ${PORT}`);

    exec('npm run start');
})

