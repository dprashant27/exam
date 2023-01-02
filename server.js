var express=require("express");
const app=express();

app.get("/",(req,resp)=>{
    resp.sendFile(__dirname + "/index.html");

});

app.listen(4000);
console.log("server is running at 4000");