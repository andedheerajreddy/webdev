var express=require('express');
var app=express();
app.use(express.static('frontend'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/frontend/html/home.html");  
})
app.get('/resume',(req,res)=>{
    res.sendFile(__dirname+"/frontend/html/index.html");
})
app.get('/clock',(req,res)=>{
    res.sendFile(__dirname+"/frontend/html/clock.html")
})
app.get('/snake',(req,res)=>{
    res.sendFile(__dirname+"/frontend/html/snake.html")
})
app.listen(process.env.PORT||4000,()=>{console.log("server started running");})