var router=require("express").Router();
var path=require("path")

router.get("/:projectname",(req,res)=>{
     if(req.params.projectname=="clock"){
         res.sendFile(path.resolve(__dirname+"/../../frontend/html/clock.html"));
     }
     else if(req.params.projectname=="resume"){
        res.sendFile(path.resolve(__dirname+"/../../frontend/html/resume.html"));
     }
     else if(req.params.projectname=="snake"){
        res.sendFile(path.resolve(__dirname+"/../../frontend/html/snake.html"));
     }
     else if(req.params.projectname=="tambola"){
        res.sendFile(path.resolve(__dirname+"/../../frontend/html/tambola.html"));
     }
})

module.exports=router;