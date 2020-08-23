var express=require("express");
var app=express();
var mongoose=require("mongoose");

var config=require("./backend/lib/config");
var projects=require("./backend/routers/projects");
var users=require("./backend/routers/users");
const { db_connectionstring } = require("./backend/lib/config");
//-------------MIDDLE WARE-----------------------------------
app.use(express.static("frontend"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//----------------------DB CONNNECT-------------------------------
var JSONoption={ useUnifiedTopology: true, useNewUrlParser: true,  useCreateIndex: true};
mongoose.connect(config.db_connectionstring,JSONoption)
.then(()=>{console.log("DB CONNECTED!!!!!!!");})
.catch(err=>console.log(err))
//----------------------------------------------------------------
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/frontend/html/home.html");
})
app.get("/user",(req,res)=>{
    res.sendFile(__dirname+"/frontend/html/user.html");
})

app.use("/home",projects);
app.use("/api/users",users);

//-------------------------PORT---------------------------------
app.listen(config.port,()=>{
    console.log("SERVER RUNNING ON PORT "+config.port);
})