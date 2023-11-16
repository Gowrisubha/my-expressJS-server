//jshint esversion:6
const express= require('express');

const app=express();

app.get("/",function(req,res){
  res.send("<h1>Hello there! This is Gowrisubha from server side🤫</h1>");
})

app.get("/contact",function(req,res){
  res.send("Email:gowrisubha44@gmail.com");
})

app.get("/about",function(req,res){
  res.send("This is Gowrisubha from server side. I would like to indrotuce me as the Backend developer now");
})

app.listen(3000,function(){
  console.log("Server started on port 3000");
});
