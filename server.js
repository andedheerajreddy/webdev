var express=require('express');
const { json } = require('express');
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
app.get('/tambola',(req,res)=>{
    res.sendFile(__dirname+"/frontend/html/tambola.html")
})

var jsonArray=[{
    name:"dheeraj",
    age:24
},
{
    name:"NIKHIL",
    age:55
}];
app.get("/ajax",(req,res)=>{
    res.sendFile(__dirname+"/frontend/html/ajax.html")

})
app.get("/api/data",(req,res)=>{
  res.json(jsonArray);
});
app.listen(process.env.PORT||4000,()=>{console.log("server started running");})