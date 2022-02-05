// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { options } = require("request");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})

app.post("/",function(req,res){
    const f_name=req.body.fname;
    const l_name=req.body.lname;
    const email=req.body.email;
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: f_name,
                    LNAME: l_name
                } 
            }
        ]
    };
    const jsonData=JSON.stringify(data);
    const url = "https://us14.api.mailchimp.com/3.0/lists/3d0ce7a328";
    const options = {
        method: "POST",
        auth: "Arshdeep:daf48eb8ad083bf2b8e15a28d13f751f-us14"
    }
    
    const request = https.request(url,options,function(response){
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
    request.end();

})

app.listen(3000,function(){
    console.log("server running on port 3000")
})


// daf48eb8ad083bf2b8e15a28d13f751f-us14
// 3d0ce7a328

