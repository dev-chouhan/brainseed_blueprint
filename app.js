<<<<<<< HEAD
const ejs = require ("ejs");
//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

// Get requests
app.get("/", function(req, res){
    res.render("home");
})


// Post requests


// Serving listening on Port
let port = process.env.PORT;
if(port == null || port == ""){
    port = 3000;
}

app.listen(port , function () {
    console.log("Server started Successfully on port: " + port);
=======
const ejs = require ("ejs");
//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

// Get requests
app.get("/", function(req, res){
    res.render("home");
})


// Post requests


// Serving listening on Port
let port = process.env.PORT;
if(port == null || port == ""){
    port = 3000;
}

app.listen(port , function () {
    console.log("Server started Successfully on port: " + port);
>>>>>>> 5261e4aa6f1c44975ad2ef9fc7749b0608cb690f
});