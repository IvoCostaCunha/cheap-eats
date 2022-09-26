import express  from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';




// 2/ import des routes

import postRoutes from './routes/posts.js'





// Comme toute express application , nous allons initailiser l'app


const app = express();

// route numero 1

app.use('/posts', postRoutes);

app.get('/posts', function (req, res) {
    res.send('posts');
});

// route numero 2

app.get('/postss', function (req, res) {
    res.send('postsssss');
});

// generale setup


app.use(bodyParser.json({limit: "30mb" , extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb" , extended: true}));
app.use(cors());

// connecter le server avec la BDD mongo

// gets start with mongo -> creer compte + utilisation gratuite -> create a clauster -> Database Access -> Add a new database users
// Mettre id + mdp et creer l'utilisteur

// par la suite aller dans Network adress et appuyer sur add IP adress , mettre ladress IP courante pour avoir acces a la BD de l'ip du pc.

// Aller voir les clusters et attendre que le cluster soit deployer avant de pouvoir le connecter
// une fois le cluster deployer , appuyer sur connecter fin de connecter l'application a la BDD mongo via le lien.

const CONNECTION_URL = 'mongodb+srv://cheapeats:cheapeats12AA@cluster0.fcsgvx0.mongodb.net/?retryWrites=true&w=majority';

// init le port etant localhost 5001 ou process.enc.port une fois déployé sur heroku.

const PORT = process.env.PORT || 5001;

// enfin, connecter la BDD

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Serveur est lancé dans le port : ${PORT}`)))
    .catch((error) => console.log("Connexion au serveur échoué"));

// dernier setup de mongo pour sasurrer qu'il ya pas de warning au niveau de la console

// mongoose.set('UseFindAndModify' , false)

// Maintenant que le serveur est préparé , et est connecté a la BD , on peut commencer a creer les routes de notre back end