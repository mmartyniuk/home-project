var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
    res.sendFile('./dist/index.html', { root: __dirname });
});
app.get('/about', function(req, res) {
  res.sendFile('./dist/index.html', { root: __dirname });
});

app.listen(3001);
