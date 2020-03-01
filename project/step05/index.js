// TODO : import pouchdb and add pouchdb-find plugin
var PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));
const app = require("./lib/app");

// TODO : instantiate a PouchDB database and use INITDB_DATABASE environment variable
// TODO : use the info method to ensure that the database instance is ready 
db.info().then(function (result) {
    // handle result
    app.get("/", (req, res) => res.send("DB is ready ! "));
  }).catch(function (err) {
    console.log(err);
  });
// TODO : use PORT environment variable
app.listen(PORT, () => console.log(`App listening on port  ${PORT} !`));
