const fs = require('fs');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static('public'));

//should the application end up not working send to 404 page for routing error
app.use((res, req) => {
    res.status(404).end();
})

//activate the server
app.listen(PORT, () =>{
    console.log(`Server is successfully connected!`)
})