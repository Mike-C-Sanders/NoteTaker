//requiring the fs module for reading and writting the html file
const fs = require('fs');
//express module required for server code.
const express = require('express');
//require the path module for routing the files to the appropriate server
const path = require('path');
//require the util module for returning promisses for the fs module
const util = require('util');

const PORT = process.env.PORT || 3001;
const app = express();

//middleware for parsing JSON urlencoded from data
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static('public'));

//GET /notes returning the notes.html file
app.get('/notes', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/notes.html'));
})

//GET * should return the index.html file
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

// TODO: GET /api/notes should read the db.json file and return all saved notes as JSON
//Promise version of the fs.readfile 
const readFromFile = util.promisify(fs.readFile);
app.get('/api/notes', (req, res) =>{
    console.info(`${req.method} request received for ntoes`);
    readFromFile('./db/db.json').then((data)=> res.json(JSON.parse(data)));
})

//TODO: POST /api/notes should receive a new note to save on the request body and add it to the db.json file, and then return the new note to the client.


//should the application end up not working send to 404 page for routing error
app.use((req, res) => {
    res.status(404).end();
})

//activate the server
app.listen(PORT, () =>{
    console.log(`Server is successfully connected!`)
})