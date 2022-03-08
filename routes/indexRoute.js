//express module required for server code.
const express = require('express');

//import the notes router
const notesRoute = require('./notesRoute');

const app = express();

app.use('/notes', notesRoute);

module.exports = app;