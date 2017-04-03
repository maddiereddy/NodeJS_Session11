//This app was created manually 

const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();

const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app, {});

//Listening on port 8080
//this is a skeleton crud example for developing an app
app.listen(port, () => {
  console.log('We are live on ' + port);
});