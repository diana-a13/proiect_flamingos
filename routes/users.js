const express = require("express")
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
var path = require('path');
const User = require("./src/modules/users");
users.use(cors());



process.env.SECRET_KEY = 'secret';

users.post('register', (req,res)=>{
    const today = new Date();
    const userData = {
        nume: req.body.nume_utilizator,
        parola: req.body.psw,
        email: req.body.email
    }
    //verificam daca utilizatorul exista deja 
    User.findOne({
        where:{
            email:req.body.email
        }
    })
    .then(user => {
        if(!user){
            const hash = bcrypt.hashSync(userData.parola, 10)
            userData.parola = hash;
            User.create(userData)
                .then(user => {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, { expiresIn:1440 })
                    res.json({ token: token })
                })
                .catch(err=>{
                res.send('error: '+err)
                    
                })
        }
        else{
            res.json({error: 'Utilizator existent'})
        }
    }    )
    .catch(err => {
        res.send('error ' + err)
    })
})

//LOGIN
users.post('/login', (req, res) => {
    User.findOne({
        where: {
            email:req.body.email
        }
    })
    .then(user => {
        if(bcrypt.compareSync(req.body.psw, user.parola)){
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {expiresIn: 1440})
            res.json({ token: token })
        }
        else {
            res.send('Utilizator inexistent')
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

module.exports = users;