const Sequelize = require("sequelize");
const app = express();
app.use(bodyParser.json());

const express = require('express'),
			bodyParser = require('body-parser')
		
module.exports = sequelize.define("user",{
     id: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nume: {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
    parola: {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(30),
        allowNull: false,
    }
});  



const Users = require("./modules/users");

app.get('/:users', async (req, res, next) => {

  Users.getUserByUsername(function(err, user) {

    if(err) {
        res.send('error');
        next();
    }

    const vm = user;
    res.render('user', vm);

  });

/*	try{
		let users = await Users.findAll()
		res.status(200).json(users)
	}
	catch(e){
		next(e)
	}
	*/
})
