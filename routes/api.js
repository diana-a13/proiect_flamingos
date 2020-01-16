const express = require("express");
const router = express.Router();
const path = require('path');
//const dirPath = path.join(__dirname, '/comentarii');
const Comentariu = require('/home/ubuntu/environment/p/proiect_flamingos/src/modules/comentarii');
const User = require('/home/ubuntu/environment/p/proiect_flamingos/src/modules/users');
const Transport = require('/home/ubuntu/environment/p/proiect_flamingos/src/modules/transport');
let sequelize = require('/home/ubuntu/environment/p/proiect_flamingos/src/database/connection');

sequelize.sync({force : true})
	.then(() => User.bulkCreate([{
		nume : 'john',
		parola : 'parolaJohn',
		email : 'emailJohn@gmail.com'
	},{
		nume : 'jim',
		parola : 'parolaJim',
		email : 'emailJim@gmail.com'
	},{
		nume : 'jane',
		parola : 'parolaJane',
		email : 'emailJane@gmail.com'
	}]))
	

sequelize.sync({force : true})
	.then(() => Comentariu.bulkCreate([{
		id_user: 3,
		id_transport: 300,
		com : 'Soferul a condus foarte bine',
		createdAt: '2020-01-14',
		updatedAt: '2020-01-14'
	},{
		id_user: 4,
		id_transport: 226,
		com : 'A fost cald in cautobuz',
		createdAt: '2020-01-14',
		updatedAt: '2020-01-14'

	}]))
	
	sequelize.sync({force : true})
	.then(() => Transport.bulkCreate([{
		id_statie : 300,
		statie_plecare : 'Soseaua Alexandriei',
		statie_sosire : 'Piata Romana',
		createdAt: '2020-01-14',
		updatedAt: '2020-01-14'
	},{
		id_statie : 226,
		statie_plecare : 'Soseaua Alexandriei',
		statie_sosire : 'Piata Unirii',
		createdAt: '2020-01-14',
		updatedAt: '2020-01-14'
	}
]))
	

//lista comentarii
router.get('/comentarii', async(req,res)=>{
        try{
		let com = await Comentariu.findAll()
		res.status(200).json(com)
	}
	catch(e){
		res.status(500).json({message : 'server error'})
	}
    });

 /* console.log(req.body);
    res.send({type:'POST',
        
        id_transport:req.body.id_transport,
        id_user: req.body.id_user,
        com:req.body.com,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt
    });
    */
    
//adaugare comentariu
router.post('/comentarii', async(req,res)=>{
        try{
            await Comentariu.create(req.body);
            res.send({type:'POST',
            
        id_transport:req.body.id_transport,
        id_user: req.body.id_user,
        com: req.body.com})
        
            res.status(200).json({message: 'created'}
            );
        }catch(err){
            console.warn(err);
         res.status(500).json({message: 'server error'});
        }
});

//update comentariu
router.put('/comentarii/:id', async(req,res)=>{
    try{
		let comentariu = await Comentariu.findByPk(req.params.id)
		if (comentariu){
			await comentariu.update(req.body)
			res.status(202).json({message : 'accepted'})
		}
		else{
			res.status(404).json({message : 'not found'})
		}
	}
	catch(e){
		console.warn(e)
		res.status(500).json({message : 'server error'})
	}
});

//delete
router.delete('/comentarii/:id', async(req,res)=>{
    try{
		let comentariu = await Comentariu.findById(req.params.id)
		if (comentariu){
			await comentariu.destroy()
			res.status(202).json({message : 'accepted'})
		}
		else{
			res.status(404).json({message : 'not found'})
		}
	}
	catch(e){
		console.warn(e)
		res.status(500).json({message : 'server error'})
	}
});


router.get('/trans', async(req,res)=>{
        try{
		let trans = await Transport.findAll()
		res.status(200).json(trans)
	}
	catch(e){
		console.warn(e)
		res.status(500).json({message : 'server error'})
	}
});

router.post('/trans', async(req,res)=>{
        try{
            await Transport.create(req.body);
            res.status(200).json({message: 'created'});
        }catch(err){
            console.warn(err);
         res.status(500).json({message: 'server error'});
            
        }
});



router.get('/trans/:id', async(req,res)=>{
    try{
		let trans = await Transport.findById(req.params.id)
		if (trans){
			res.status(200).json(trans)
		}
		else{
			res.status(404).json({message : 'not found'})
		}
	}
	catch(e){
		console.warn(e)
		res.status(500).json({message : 'server error'})
	}
});
router.put('/transpoturi/:id', async(req,res)=>{
    try{
		let trans = await Transport.findByPk(req.params.id)
		if (trans){
			await trans.update(req.body)
			res.status(202).json({message : 'accepted'})
		}
		else{
			res.status(404).json({message : 'not found'})
		}
	}
	catch(e){
		console.warn(e)
		res.status(500).json({message : 'server error'})
	}
});
router.delete('/transporturi/:id', async(req,res)=>{
    try{
		let trans = await Transport.findById(req.params.id)
		if (trans){
			await trans.destroy()
			res.status(202).json({message : 'accepted'})
		}
		else{
			res.status(404).json({message : 'not found'})
		}
	}
	catch(e){
		console.warn(e)
		res.status(500).json({message : 'server error'})
	}
});




router.get('/users', async(req,res)=>{
        try{
		let users = await User.findAll()
		res.status(200).json(users)
	}
	catch(e){
		console.warn(e)
		res.status(500).json({message : 'server error'})
	}
});

router.post('/users', async(req,res)=>{
        try{
            await User.create(req.body);
            res.status(200).json({message: 'created'});
        }catch(err){
            console.warn(err);
         res.status(500).json({message: 'server error'});
            
        }
});

router.get('/users/:id', async(req,res)=>{
    try{
		let users = await User.findById(req.params.id)
		if (users){
			res.status(200).json(users)
		}
		else{
			res.status(404).json({message : 'not found'})
		}
	}
	catch(e){
		console.warn(e)
		res.status(500).json({message : 'server error'})
	}
});
router.put('/users/:id', async(req,res)=>{
    try{
		let users = await User.findByPk(req.params.id)
		if (users){
			await users.update(req.body)
			res.status(202).json({message : 'accepted'})
		}
		else{
			res.status(404).json({message : 'not found'})
		}
	}
	catch(e){
		console.warn(e)
		res.status(500).json({message : 'server error'})
	}
});
router.delete('/users/:id', async(req,res)=>{
    try{
		let users = await User.findById(req.params.id)
		if (users){
			await users.destroy()
			res.status(202).json({message : 'accepted'})
		}
		else{
			res.status(404).json({message : 'not found'})
		}
	}
	catch(e){
		console.warn(e)
		res.status(500).json({message : 'server error'})
	}
});


module.exports = router;