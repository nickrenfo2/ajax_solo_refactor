var express = require('express');
var path = require('path');
var app = express();
var data = require('./data');
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, './public')));

app.get('/',function(req,res) {

    res.sendFile(path.join(__dirname,'./public/views/index.html'));
});

app.get('/colors',function(req,res){
    res.send(JSON.stringify(data));
});


var server = app.listen(3000,function() {
    console.log('Listening on port: ',server.address().port);
});

app.use(bodyParser.json);