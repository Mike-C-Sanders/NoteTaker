const fs = require('fs');
//random id generator
const {v4:uuidv4} = require('uuid');
const router = require('express').Router();

//write to the notes db.json file
const writeToFile = (destination, content) =>{
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err)=> {
        if(err){
            console.log(err);
        }else{
            console.log(`Data written to: ${destination}`);
        }
    })
}

//read the current db json file, parse the data and append the new note used in post route
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if(err){
            console.log(err);
        }else{
            const praseData = JSON.parse(data);
            praseData.push(content);
            writeToFile(file, praseData);
        }
    })
}

//route for retrieving all of the notes
router.get('/', (req, res) =>{
    fs.readFile('./db/db.json', (err, data) =>{
        if(err){
            console.log(err);
        }else{
            // console.log(JSON.parse(data))
            res.json(JSON.parse(data));
        }
    })
})

//Post Route for new notes
router.post('/', (req, res) =>{
    //create an object with the submitted note
    const {title, text} = req.body;

    //check that all required properties are present

    if(title && text){
        //create a new note
        const newNote = {
            title,
            text,
            //create a unique id for each new note
            note_id: uuidv4()
        }
        
        readAndAppend(newNote, './db/db.json');
        res.json(`Note successfully added!!`);
    }else{
        res.error(`Error adding a new note`);
    }

})


router.delete('/:id', (req, res) =>{
    const deletedNote = req.params.id;

    fs.readFile('./db/db.json', (err, data) =>{
        if(err){
            console.log(err);
        }else{
            
        }
    })
})
module.exports = router;