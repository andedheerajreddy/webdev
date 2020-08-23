var router=require("express").Router();
var path=require("path");
var users= require("../lib/user");
const { oneuser, allusers ,create} = require("../controllers/user");

router.get("/",allusers);
router.get("/:id",oneuser)
router.post('/create',create);

module.exports =router;

