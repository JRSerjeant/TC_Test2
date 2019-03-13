const express = require('express');
var app = express();
var upload = require('express-fileupload');
const http = require('http');
http.Server(app).listen(8080);
app.use(upload());

console.log("Server Started at port 8080");
app.post('/md5',function(req,res){
  console.log(req.files.file.md5());
  res.send(req.files.file.md5())
})
