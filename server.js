const express = require('express')
const app = express()
const fs = require("fs")
var mysql = require('mysql');

app.use(express.urlencoded({extended:true}));

app.use(express.static('frontend'))

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

//DB Connection
let conn = require("./src/database/connection");

//require("./src/bootstrap")();



app.get('/', (req, res) => {
    var fileContent = fs.readFileSync('frontend/index.html')
    res.type('index.html').send(fileContent);
});

let user_id = 10000;
app.post('/', (req, res) =>{
   const nr = req.body.numar_auto;
   const comm = req.body.com;
   
   const id_u = user_id+1;
   
   conn.comentariis.create({
       id_user: id_u,
       id_transport: nr,
       com: comm
   })
   .then(newComentariu => {
       res.json(newComentariu);
   })
   
});

app.get('/signup', function (req, response) {
   var fileContent = fs.readFileSync('frontend/signup.html')
    response.type('text/html').send(fileContent)
})

app.get('/login', function (req, response) {
   var fileContent = fs.readFileSync('frontend/login.html')
    response.type('text/html').send(fileContent)
})

app.listen(3000)