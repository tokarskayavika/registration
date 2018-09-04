const express = require('express');
const app = express();
const port = 9000;

app.use('/public', express.static(__dirname + '/dist'));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.listen(port);