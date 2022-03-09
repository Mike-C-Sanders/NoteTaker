const express = require('express');

const api = require('./routes/index')
//requiring the fs module for reading and writting the html file
const fs = require('fs');

//require the path module for routing the files to the appropriate server
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

//middleware for parsing JSON urlencoded from data
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('api', api);

//Main page get route
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/notes.html')).catch((err)=>{
        res.json(err);
    });
});

//GET /notes returning the notes.html file
app.get('/notes', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/notes.html')).catch((err)=>{
        res.json(err);
    });
});

//Wildcard get* should return the index.html file main page
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/index.html')).catch((err)=>{
        res.json(err);
    });
});

//should the application end up not working send to 404 page for routing error
app.use((req, res) => {
    res.status(404).end();
})

//activate the server
app.listen(PORT, () =>{
    console.log(`Server is successfully connected!`)
})