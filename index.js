var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'client')));

app.get('/', function (req, res) {
    res.sendFile('./dist/index.html', { root: __dirname });
});
 
app.listen(3000);