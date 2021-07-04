// Dependencies//
const express = require('express')
const app = express()
const PORT = 3001;

// this is to make the public the client folder on the url
app.use(express.static('public'))

//  this tells the app to use json and utfcharacters
app.use(express.urlencoded({ extended: true }));
// add support for json
app.use(express.json());

//results after parsing(readable data) will be put in req.body

app.use(require('./routes/htmlroute'))
app.use(require('./routes/apiroutes'))

 
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})



 