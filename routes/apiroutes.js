
// on the click of get started I want you to get this page and load all the existing data
const app = require('express').Router()
const db = require('../db/db.json')

app.get('/api/notes', (req, res) => {
     res.json(db)
});

app.post('/api/notes', (req, res) => {
    let newNote = "whatever user  as e new note"
    console.log(newNote)
    newNote.push(req.body)
    res.json(newNote)
})
// function addNotes () {
//     // need to create a variable for the newNote that will be added
//     // strigify the data so we can write to the jsonfile again
//     let newData = JSON.stringify(newNote);
//     // function to write to the file with the call back
//     fs.writeFile('develop/db/db.json', newData, finished)
//     function finished () {
//         console.log('new note s been added to  file')
//     }
//  }

module.exports = app;