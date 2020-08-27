var express=require("express");
var app=express();
var mongoose=require("mongoose");
var cookieParser=require("cookie-parser")
var session = require("express-session");
var logger=require("morgan");
const MongoStore = require('connect-mongo')(session);

var config=require("./backend/lib/config");
var projects=require("./backend/routers/projects");
var users=require("./backend/routers/users");
var login=require("./backend/controllers/logusers");
var loginusers= require("./backend/models/signupmodel");

const { db_connectionstring } = require("./backend/lib/config");
const { use } = require("./backend/routers/projects");
//----------------------DB CONNNECT-------------------------------
var JSONoption={ useUnifiedTopology: true, useNewUrlParser: true,  useCreateIndex: true};
mongoose.connect(config.db_connectionstring,JSONoption)
.then(()=>{console.log("DB CONNECTED!!!!!!!");})
.catch(err=>console.log(err))
//-------------MIDDLE WARE-----------------------------------
app.use(logger("dev"))
app.use(express.static("frontend"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(session({
      secret:"thi is secret!!!!",
      resave:false,
      saveUninitialized:false,
      cookie:{
          maxAge:60*60*1000
      },
      store: new MongoStore({ mongooseConnection: mongoose.connection })

}))
//----------------------------------------------------------------
var isAuthenticated=(req,res,next)=>{
    if(req.session && req.session.userid)
    next();
    else
   return res.redirect("/login");
}
var isNotAuthenticated=(req,res,next)=>{
    if(!req.session || !req.session.userid)
    next();
    else
   return res.redirect("/home");
}

app.get("/",isAuthenticated,(req,res)=>{
    res.redirect("/home")
})
app.get("/login",isNotAuthenticated,(req,res)=>{
    res.sendFile(__dirname+"/frontend/html/login.html");
})
app.post("/login",(req,res)=>{
           login.checkuser(req.body,(err,userrrr)=>{
            if(userrrr!=null) { req.session.userid=userrrr._id;    console.log(req.session);   res.redirect("/home")}
           else
           res.redirect("/login");
          })
})
app.get("/home",isAuthenticated,(req,res)=>{
    console.log(req.session);
    res.sendFile(__dirname+"/frontend/html/home.html")
})
app.get("/signup",isNotAuthenticated,(req,res)=>{
    res.sendFile(__dirname+"/frontend/html/signup.html");
})
app.post("/signup",(req,res)=>{
        login.createuser(req.body,(err,userrrr)=>{
            if(userrrr!=null)
            res.redirect("/");
            else
            res.redirect("/signup");
        })
})
app.get("/user",isAuthenticated,(req,res)=>{
    res.sendFile(__dirname+"/frontend/html/user.html");
})
app.get("/logout",isAuthenticated,(req,res)=>{
    req.session.destroy(err=>{
        if(err)
       return    res.redirect("/home");
    })
    return res.redirect("/login");

})
app.get("/api/loggeduser",(req,res)=>{
    if(req.session && req.session.userid){
     loginusers.find({_id:req.session.userid},(err,user)=>{
         if(user.length>0)
         {
               res.json({username:user[0].name});
         }
         else
         res.json(null);
     })
    }
})
app.get("/hi",(req,res)=>{
    res.json({username:"hi"});
})

app.use("/home",isAuthenticated, projects);
app.use("/api/users",isAuthenticated, users);

//-------------------------PORT---------------------------------
app.listen(config.port,()=>{
    console.log("SERVER RUNNING ON PORT "+config.port);
})