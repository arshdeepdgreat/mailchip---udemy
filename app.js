// jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})

app.post("/",function(req,res){
    var f_name=req.body.fname;
    var l_name=req.body.lname;
    var email=req.body.email;

    console.log(f_name + l_name + email);
})

app.listen(3000,function(){
    console.log("server running on port 3000")
})


