var users= require("../lib/user");
module.exports={
     allusers:(req,res)=>{   
        users.getallusers((err,data)=>{
            if(err)
            console.log("error");
            res.json(data);
        })
        },
    oneuser:(req,res)=>{
        users.getuser(req.params.id,(err,data)=>{
             if(err){
                 console.log("FAILED TO FIND USER");
             }
             else
             res.json(data);
        })  
        },
    create:(req,res)=>{
        console.log(req.body);
           users.createuser(req.body,(err,da)=>{
              if(err)
              da={};        
           
                     console.log(JSON.stringify(da));
                      
                
                  if(err){
                    da.errmssg=err;
                    da.duplicatekey=err.includes('duplicate key') ;
                  console.log("FAILED TO ADD USER"+err);
                }
                  else{
                      da.errmssg=null;
                  console.log("USER ADDED"+JSON.stringify(da));}
    
            res.json(da);
           })
          
    }

    

}