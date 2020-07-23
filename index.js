<<<<<<< HEAD
var express= require('express');
var app=express();

app.get("/",function(req,res){
res.sendFile(__dirname+"/basic.html");
});

var port=process.env.PORT||3000;
app.listen(port,()=>{console.log("server started....")})
=======
var express= require('express');
var app=express();

app.get("/",function(req,res){
res.send("Hello world !");
});

var port=process.env.PORT||3000;
app.listen(port,()=>{console.log("server started....")})
>>>>>>> cfd225f532c10ab7f4bfa2ecfb11f602986c477d
