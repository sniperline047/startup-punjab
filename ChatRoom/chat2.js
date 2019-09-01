var app=require('express')();
var http=require('http').Server(app);
var io=require('sockets.io')(http);
app.get('/',function(req,res)
{
  res.sendfile('chat2.html');

})


users=[];
io.on('connection',function(socket)
{
console.log(user connected);
socket.on('setUsername',function()
{

  console.log(data);

})

})
