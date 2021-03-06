const express = require('express')
const path = require('path')

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '8c27a50a657848d59ac6ff37c82496c3',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')



app = express()
app.use(express.static(path.join(__dirname, "./public")));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, './public/index.html'));
})

const port = process.env.PORT || 5000

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
})