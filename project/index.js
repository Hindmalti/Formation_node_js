const fs = require('fs');
const path = require('path');

const log = require('./logger')();

const monexpress = require('./monexpress/monexpress');
const pkg = require('./package.json');

const app = monexpress();
const port = process.env.MONEXPRESS_PORT || 9000;

module.exports = app;

app.get('/', (req, res) => {
  log.debug('Called GET /');
  res.writeHead(200, {"Content-Type": "application/json"});
  res.write(JSON.stringify({
    message: 'coucou.js'
  }));
  res.end();
});

app.get('/version', (req, res) => {
  log.debug('Called GET /version');
  res.end(pkg.version);
});

app.get('/tenacious', (req, res) => {
  log.debug('Called GET /tenacious');

  fs.createReadStream(path.resolve('./tend2001-10-21d1t03.mp3'))
    .pipe(res);
});

app.get('/crash', () => {
  throw new Error('Nope');
});

// TODO: implement a POST http call that returns
// "Hello {{name}} !" given in the body an object with a name property
app.post('/', (req, res, body) => {
  log.debug('Called POST /');
  if (body.name) {
    res.end(`Hello ${body.name} !`);
  } else {
    res.end(body);
  }
});

app.listen(port, () => {
  log.info(`Le serveur tourne sur le port ${port}`);
});
