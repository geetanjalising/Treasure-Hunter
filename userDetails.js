const mongoose=require("mongoose");

const userDetailsSchema=new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String,
    userType:String,
    score:Number
},
{ 
    Collection:"UserDetails",
});

mongoose.model("UserDetails",userDetailsSchema);