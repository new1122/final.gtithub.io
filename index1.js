const http = require('http');
var mongoose = require('mongoose');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');

  var Schema = mongoose.Schema,
  
ObjectId = Schema.ObjectId;

var myuser = new Schema({
user_name :String,
user_email :String,
user_mobile :String
});

module.exports = mongoose.model('users', myuser);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



// 
