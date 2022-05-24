const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

app.use(express.static("public"));

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.get('/register', function (req, res){
    res.sendFile(path.join(__dirname, '/views/register.html'))
});

app.get('/login', function (req, res){
    res.sendFile(path.join(__dirname, '/views/login.html'))
});

app.listen(PORT, function() {console.log('Servidor corriendo en el puerto ${PORT}')});