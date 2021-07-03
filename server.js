// Dependencies//
const fs = require('fs')
const express = require('express')
const app = express()
const PORT = 3001;
const HTML = fs.readFileSync('Develop/public/index.html')
//  this tells the app to use json and utfcharacters
app.use(express.urlencoded({ extended: true }));
// add support for json
app.use(express.json());
// use the sycn verysio so no callback req. so that data is loaded before it moves tonext step.s
const data = fs.readFileSync('develop/db/db.json');
const notes = JSON.parse(data)
// let getStartedBtn = getElementById("#getStartedBtn")
console.log(notes)
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})

// on the click of get started I want you to get this page and load all the existing data
function getStarted () { 
console.log ("started")
}
app.get('/', (req, res) => {
    res.send(HTML);
  });


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

//  getStartedBtn.onclick = getStarted();