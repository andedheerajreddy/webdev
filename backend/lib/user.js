var  usermodel =require("../models/usermodel");
module.exports={
    getallusers:(cb)=>{
     usermodel.find({},(err,user)=>{
        if(err){
            cb("ERROR"+err,null);
        }
        else
        cb(null,user);
     })
    },
    getuser:(i_d,cb)=>{
        usermodel.find({id :i_d},(err,user)=>{
            if(err){
                cb("ERROR"+err,null);
            }
            else
            cb(null,user);
        })

    },
    createuser:(obj,cb)=>{
         var newuser= new usermodel(obj);
         newuser.save((err,user)=>{
               if(err){
                   cb("ERROR"+err,null);
               }
               else
               cb(null,user);
         });
    },
    updateuser:(i_d,obj)=>{
    //    usermodel.deleteOne(i_d,(err,data)=>{
          
    //    })
    },
    deleteuser:(id)=>{

    }
}