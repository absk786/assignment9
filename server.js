// Dependencies//
const fs = require('fs')
const express = require('express')
const app = express()
const PORT = 3001;
//  this tells the app to use json and utfcharacters
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// use the sycn verysio so no callback req. so that data is loaded before it moves tonext step.s
const data = fs.readFileSync('develop/db/db.json');
const notes = JSON.parse(data)
console.log(notes)
const server = app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})

function addnotes () {

    // need to create a variable for the newNote that will be added
    let newNote = "whatever user adds as the new note"
    // strigify the data so we can write to the jsonfile again
    let newData = JSON.stringify(newNote);
    // function to write to the file with the call back
    fs.writeFile('develop/db/db.json', newData, finished)
    function finished () {
        console.log('new note has been added to json file')
    }
 }