const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get("/",(req,res)=>{
  res.send("hey");
})

app.get("/create", async(req,res)=>{
  let createuser = await userModel.create({
    name:"Amandeep New",
    email:"Amandeepnew@gmail.com",
    username: "Aman"
  })
  
  res.send(createuser);
})

app.get("/update",async (req,res)=>{

let updated = await userModel.findOneAndUpdate({username: "Aman"}, {username: "Amandeep Yadav"}, {new:true})

  res.send(updated);
})

app.get("/read",async (req,res)=>{
 let users = await userModel.find({name:"Amandeep"});
 res.send(users);
});

app.get("/delete", async (req,res)=>{
 let deleteD = await userModel.deleteOne({name:"Amandeep New"});
 res.send(deleteD);
})

app.listen(3000);