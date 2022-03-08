const fs = require('fs');

const router = require('express').Router();

//route for retrieving all of the notes
router.get('/', (req, res) =>{
    fs.readFile('./db/db.json', (err, data) =>{
        if(err){
            console.log(err);
        }else{
            res.json(JSON.parse(data));
        }
    })
})

module.exports = router;