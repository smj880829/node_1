var express = require('express')
var app = express()
var bodyParser = require('body-parser');

function start(){
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(__dirname + '/public'));


  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/Helloangular.html');
    console.log(req.route);
  })


  app.listen(3000, function () {
    console.log('EX server start');
  });

}

exports.start = start;
