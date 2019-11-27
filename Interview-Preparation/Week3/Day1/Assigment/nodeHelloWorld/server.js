var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<h1>Hello World From Aman</h1>');
});

app.listen(3001, function () {

});
