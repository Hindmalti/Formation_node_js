var express = require('express')
const bodyParser = require('body-parser');
var app = express()


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//bodyParser renvoie un middleware 
const table = [];

app.get('/', (req, res) => res.send(table));

app.post('/', (req, res) => {
  table.push(req.body);
  res.sendStatus(201);
});



app.get('/', function (req, res) {
    res.send('Hello, Sfeir School !')
  })
  app.listen(3000 , () => console.log('App ready to listen on port 3000!'));

