const express = require('express')
const app = express()
const fs = require("fs")

var mysql = require('mysql');





//adaugat de mine

//require('dotenv').config();




app.use(express.urlencoded({extended:true}));

app.use(express.static('frontend'))

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

//DB Connection
require("./src/database/connection");

require("./src/bootstrap")();

/*
var connection = mysql.createConnection({

  host     : 'localhost',
  user     : 'flamingos',
  password : 'parolaflamingi',
  database : 'FlamingoDB'

});

connection.connect();
*/
//get auth

//post comentariu
app.get('/signup', (req, res) => {
    var fileContent = fs.readFileSync('frontend/signup.html')
    res.type('signup.html').send(fileContent);
})

app.get('/login', (req, res) => {
    var fileContent = fs.readFileSync('frontend/login.html')
    res.type('login.html').send(fileContent);
})

//app.post('/login', (req,res) => {
//    res.redirect('');
//})

app.post('/login', function(req, res) {

    var subject = req.body.subject;
    var message = req.body.message;
    var fileContent = fs.readFileSync('frontend/index.html')
    res.type('index.html').send(fileContent);
    
});



app.post('/signup', (req,res) => {
    successRedirect : '/index' 
    failureRedirect : '/signup' 
    failureFlash : true
})




/*
//ce am adaugat eu
app.post('/signup',function(req,res,next)
{
    console.log(req.body.email);
    res.render('/signup',{title: 'SignUp Complete'});
})
*/






app.post('/signup', (req, res) => {
 // var username=req.body.name;
    connection.query(("INSERT INTO `users` (id, email, password) VALUES (?)",1, req.body.email, req.body.password), function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
        });
     var fileContent = fs.readFileSync('frontend/index.html')
    res.type('index.html').send(fileContent);
   
});

app.get('/home', function(request, res) {
    var fileContent = fs.readFileSync('frontend/index.html')
    res.type('index.html').send(fileContent);
});

app.listen(3000)