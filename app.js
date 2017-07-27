var express = require("express");
var app     = express();
var path    = require("path");

var http_port = 8080;

//app.use('/css', express.static(path.join(__dirname,'/public/css/')));
//app.use('/images', express.static(path.join(__dirname,'/public/images')));

app.use( express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
  //res.sendFile(path.join(__dirname+'/public/css/styles.css'));
  res.sendFile(path.join(__dirname+'/index.html'));

  //__dirname : It will resolve to your project folder.
});

app.listen(http_port);

console.log("Running at Port" + http_port.toString());
