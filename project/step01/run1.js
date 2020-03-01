var express = require('express')
var app = express()
app.get('/', function (req, res) {
  res.send('Hello, Sfeir School !')
})
app.listen(3000 , () => console.log('App ready to listen on port 3000!'));