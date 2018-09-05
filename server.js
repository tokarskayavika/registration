const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
const Router = require('./api/routes');
const bodyParser = require('body-parser');
const port = 9000;

app.use(bodyParser.json());
app.use('/public', express.static(__dirname + '/dist'));

mongoose.connect('mongodb://localhost:27017/application', { useNewUrlParser: true });

db.once('open', function() {
    console.log('connected');
});

Router(app);

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});
app.listen(port);