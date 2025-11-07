const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get("/",(req,res)=>{
  res.send("hey");
})

app.get("/create", async(req,res)=>{
  let createuser = await userModel.create({
    name:"Amandeep1",
    email:"Amandeep@gmail.com",
    username: "Aman"
  })
  
  res.send(createuser);
})

app.listen(3000);