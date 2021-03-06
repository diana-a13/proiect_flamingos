const express = require('express')
//const routes = require('./routes/api');
const app = express()
const fs = require("fs")
var mysql = require('mysql');
const Sequelize = require("sequelize");
var bodyParser = require('body-parser');

//init routes
app.use('/api', require('./routes/api'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('login'));

app.use(express.static('../', {index: 'login.html'}))

const dbConfig = require("./src/database/connection");
var conn = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'FlamingosDB'
});


/*
var pool        = mysql.createPool({
    connectionLimit : 10, // default = 10
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'FlamingosDB'
});
*/
//DB Connection
let seq = require("./src/database/connection");

//require("./src/bootstrap")();



app.get('/', (req, res) => {
    var fileContent = fs.readFileSync('login.html')
    res.type('login.html').send(fileContent);
});

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  /*  conn.query('SELECT * FROM comentariis', function(err, rows) {
        if(err) { console.log(err); }
        else
        {
     res.json(rows);
     console.log(rows); }
   });
   
   conn.connect(function(err) {
  if (err) throw err;
  // if connection is successful
  conn.query("SELECT * FROM comentariis", function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
    // if there is no error, you have the result
    // iterate for all the rows in result
    Object.keys(result).forEach(function(key) {
      var row = result[key];
      console.log(row.id_transport);
      console.log(row.com);
      
      var data=row.id_transport+" - " +row.com;
      //document.getElementById("afisare").innerHTML=data;
      console.log(data);
    });
  });
});*/
});
   



app.get('/login', function (req, res) {
    res.sendFile(__dirname + '/login.html');
});

app.get('/signup', function (req, res) {
    res.sendFile(__dirname + '/signup.html');
});

app.post('/signup', function (req, res) {
    let name = req.body.nume + ' ' + req.body.email + ' ' + req.body.psw;

    res.send(name + ' Submitted Successfully!');

    //router.post('/registerform', function(req, res, next) {
    conn.connect(function(err) {
        if (err) console.log(err);
        console.log("connected");
        var sql = "INSERT INTO users (nume, parola, email)VALUES('"+req.body.nume+"','"+req.body.psw+"','"+req.body.email+"')";
        conn.query(sql, function(err, result)  {
            if(err) console.log(err);
            console.log("Register information saved.");
        });
    });
  //})    
            res.redirect('/index')
});

app.post('/login', function (req, res) {
  var post = req.body;
  console.log(post);
  if (post.unume === 'louis' && post.psw === 'parolaLouis') {
//    req.session.user_id = 3;
    res.send('Bad user/pass');
  } else {
    res.redirect('/index.html');
  }
});


let id = 1111;

app.post('/index', function(req, res) {
    // get data from forms and add to the table called user..
    var id_user = id;
    var id_transport = req.body.numar_auto;
    var comm = req.body.com;
    console.log(id, id_transport, comm);

        console.log("connected");
        var sql = "INSERT INTO comentariis (id_user, id_transport, com)VALUES('"+id+"','"+req.body.numar_auto+"','"+req.body.com+"')";
        conn.query(sql, function(err, result)  {
            if(err) console.log(err);
            console.log("Register information saved.");
        });
 
});

app.listen(3000);