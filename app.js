const express=require("express");
const app=express();

const cors=require("cors");
app.use(cors());

app.use(express.json());
const PORT=process.env.PORT||8005;

app.listen(PORT,()=>{
    console.log("Server Started");
})



const mongoose = require("mongoose");
const mongoUrl="mongodb+srv://geetanjalisingh1815:Geetanjali1815@cluster0.hjiwwmm.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{console.log("Connected to database")}).catch(e=>console.log(e));

require("./userDetails");

const User=mongoose.model("UserDetails");


const bcrypt=require("bcryptjs");

const jwt=require("jsonwebtoken");
const JWT_SECRET="1234567890-][poiuytqasdfghjkl;.,mnbvcdty\'/.,';l!@$%^&*()"

app.post("/register", async (req, res) => {
    const { fname, lname, email, password, userType,score } = req.body;
  
    if (!fname || !email || !password )
    return res.send({error:"Fill the required data",status:"invalid"});

    const oldUser=await User.findOne({email});
    if(oldUser)
    return res.send({error:"User exit",status:"exit"});

 const encrptdPass=await bcrypt.hash(password,10);
 console.log(encrptdPass);
    try {
    await User.create({
            fname,
            lname,
            email,
            password:encrptdPass,
            userType,
            score
        });
        //console.log("no problem")
        res.send({ status: "ok" });
    } catch (error) {
       // console.log("problem h")
        res.send({ status: "errrrror" });
    }
});

app.post("/login",async(req,res)=>{
     const {email,password}=req.body;

     if ( !email || !password )
     return res.send({error:"Fill the required data",status:"invalid"});
     
     const olduser=await User.findOne({email});
     if(!olduser) return res.send({error:"User Not found",status:"notFound"});

     if(await bcrypt.compare(password,olduser.password)){
        const token=jwt.sign({email:olduser.email},JWT_SECRET,{expiresIn:200});
        if(res.status(201)){
            return res.send({status:"ok",data:token});
        }
        else{ 
            return res.send({error:"error"});
        }
     }
     res.send({status:"error",error:"Invalid Password"});
});

app.post("/userData",async(req,res)=>{
   const {token}=req.body;

   try{
     const user=jwt.verify(token,JWT_SECRET,(err,res)=>{
        if(err){
            return "token expired";
        }
        return res;
     });
     if(user=="token expired")
     {
        return res.send({status:"error",data:"token expired"});
     }
     const useremail=user.email;
     User.findOne({email:useremail})
     .then((data)=>{
        res.send({status:"ok",data:data})
     })
     .catch((error)=>{
        res.send({status:"error",data:error});
     });
   }catch(error){

   }
});

app.get("/getAllUser",async(req,res)=>{
    // const {userid}=req.body;
     try{
       const allUser=await User.find({});
       res.send({status:"ok",data:allUser})
     }catch(error){
         console.log( error);
     }
 })
 
 app.post("/deleteUser",async(req,res)=>{
     const {userid}=req.body;
     console.log("start");
     try{console.log("done");
         User.deleteOne({_id: userid}).then(result => {
             console.log(result)
         });
          res.send({status:"ok",data:"Deleted"});
      }
     catch(error){
         console.log("not done");
         console.log(error);
     }
 });

//  app.post("/updateScore", async (req, res) => {
//     console.log("Hello");
//     const email = req.body.email;
//     console.log(email);
//     const score = req.body.score;
//     const oldUser=await User.findOne({email});
//     if(oldUser){
//      await User.updateOne({email:email},{$set:{score}},(err,res)=>{
//         if(err) return console.log(err);
//         return res;
//      });
//      return res.json({error:"Please Login"});
// }
// });
 app.post("/updateScore", async (req, res) => {
    const { email, score } = req.body;
    console.log("email",email,"score",score);
    const oldUser = await User.findOne({ email });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  try {
    await User.updateOne(
      {
        email: email,
      },
      {
        $set: {
          score
        },
      }
    );
    console.log(score,"Done");
    res.send({status:"ok",score});
  } catch (error) {
    console.log(error);
    res.json({ status: "Something Went Wrong" });
  }
});
