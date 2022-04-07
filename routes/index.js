//express module required for server code.
const express = require('express');

//import the notes router
const notesRoute = require('./api/notesRoute');
const homeRoutes = require('./api/homeRoutes');

const app = express();

app.use('/notes', notesRoute);
app.use('/', homeRoutes);

module.exports = app;