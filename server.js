const express = require('express')
const app = express()
const fs = require("fs")
app.use('/', express.static('frontend'))

//get auth

//post comentariu
app.post('/comentarii', function(request,response){
    console.log(request)
    console.log(request.body)
    response.send('This is POST/ comentarii')
})

//get transport
app.get('/transport', function(req,response){
    //sa citesc fisierul frontend/transport.html de pe disc
    var fileContent = fs.readFileSync('frontend/transport.html')
    //sa ii returnez continutul in response
    response.type('text/html').send(fileContent)
}) 


//GET/ messages/:id
app.get('/transport/:id', (req, res)=>{
    res.send('This is GET/transport/'+req.params.id)
})

app.listen(3000)