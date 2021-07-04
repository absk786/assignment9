
// on the click of get started I want you to get this page and load all the existing data
const app = require('express').Router()
const db = require('../db/db.json')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

app.get('/api/notes', (req, res) => {
     res.json(db)
});

app.post('/api/notes', (req, res) => {
   //this will add the id to the req.body
    req.body.id = uuidv4()
    console.log(req.body)
    db.push(req.body)
    fs.writeFileSync('./db/db.json',JSON.stringify(db,null, 2))
    res.json(db)
})

app.delete('/api/notes/:id', (req, res) =>{
 console.log(req.params.id)
  for (let index = 0; index < db.length; index++) {
        if (db[index].id === req.params.id) {
            db.splice(index,1)
        }
    }
    fs.writeFileSync('./db/db.json',JSON.stringify(db,null, 2))
    res.json(db)    
})


module.exports = app;