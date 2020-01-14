const express = require('express')
const app = express()
const fs = require("fs")
var mysql = require('mysql');

app.use(express.urlencoded({extended:true}));

app.use(express.static('login'))

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('../', {index: 'login.html'}))

const dbConfig = require("./src/database/connection");
var conn = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database        : 'FlamingosDB'
});
//conn.connect();
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
//let conn = require("./src/database/connection");

//require("./src/bootstrap")();



app.get('/', (req, res) => {
    var fileContent = fs.readFileSync('login.html')
    res.type('login.html').send(fileContent);
});

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/index.html');
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
/*
app.post('/index', function (req, res) {
  var post = req.body;
  console.log(post);
  var sql = 'INSERT INTO comentariis (id_user, id_transport, com) VALUES (?), (?), (?)' [id, post.numar_auto, post.com];
//    var sql = "INSERT INTO comentariis (id_user, id_transport, com)VALUES('"+id+"','"+parseInt(post.numar_auto)+"','"+post.com+"')";
        conn.query(sql, function(err, result)  {
            if(err) console.log(err);
        });
        id+1;
        res.redirect('/index');
});
*/
/*
app.post('/login', function(request, response) {
	var username = request.body.uname;
	var password = request.body.psw;
	if (username && password) {
		conn.query('SELECT * FROM users WHERE nume = ? AND parola = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.nume = username;
				response.redirect('/index');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});
*/

app.listen(3000)