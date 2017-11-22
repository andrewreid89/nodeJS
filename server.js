var http = require("http");
var todolist = require("./todolist.js");

//var item = todolist;

console.log(todolist);

http.createServer(function(request, response){
    response.writeHead(200, { "Content-type": "text/plain"});
    response.write(todolist[Math.floor(Math.random() *todolist.length)]);
    response.end();
}).listen(3000);
