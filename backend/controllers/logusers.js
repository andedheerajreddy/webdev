var loginusers= require("../models/signupmodel");
var bcrypt=require("bcrypt");
module.exports={
    checkuser:(obj,cb)=>{
        loginusers.find({email:obj.email},(err,user)=>{
                if(err)
                cb(err,null);
                else{
                      if(user.length>0)
                      {
                        // bcrypt.compare(obj.password, user[0].password, function(err, result) {
                        //    if(err)
                        //    cb(err,null)
                        //    else if(result)
                        //    cb(null,result)
                        //    else cb(null,null);  
                        // });
                        if(obj.password==user[0].password)
                        cb(null,"true");
                        else cb(null,null);  
                      }
                      else
                      cb(err,null);
                }
        })
    },
    createuser:(obj,cb)=>{
        // bcrypt.hash(obj.password,10, function(err, hash) {
        //   if(err)
        //   cb(err,null);
        //   else{
        //        obj.password=hash;
               var user= new loginusers(obj);
               user.save((err,users)=>{
                   if(err)
                   cb(err,null);
                   else
                   cb(null,users);
               })
          }

        // });
       
    // }
}