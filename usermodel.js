const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/mongoPractice`)
.then(()=>{consle.log("Mongodb connected succesfully")})
.catch((err)=>{console.log("you got an error",err)})

const userSchema = mongoose.Schema({
    name : String,
    username: String,
    email: String
});

module.exports = mongoose.model("user", userSchema);