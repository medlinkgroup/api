var express = require('express');
var mongoose = require('mongoose');
var myRouter = require("./routes")
// different schema

const app = express();
var port = process.env.PORT || 8080;


var bodyParser = require("body-parser"); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// database connection
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

//ton url mongodb avec la clef
// ex : mongodb://xxxx-mongodb.services.clever-cloud.com:27017/xxx
var urlmongo = "mongodb+srv://cylia:Boukhiba123@medlink-3exsn.mongodb.net/test?retryWrites=true&w=majority"; 
mongoose.connect(urlmongo, options);

var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'Erreur lors de la connexion')); 
db.once('open', function (){
    console.log("Connexion à la base OK"); 
}); 


app.use(myRouter);   
app.listen(port, function(){console.log("Server is running  ");
});


// git push heroku master