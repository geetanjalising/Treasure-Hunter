import React,{useState} from 'react'
import pic from "./logo.png";
import {BASE_URL} from "../helper.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./sign.css";

const SignUp = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType,setUserType]=useState("");
    const [secretKey,setSecretKey]=useState("");
    const [score,setScore]=useState(0);

    const handleSubmit=(e)=>{
        e.preventDefault();
     console.log(fname,lname,email,password,userType,score);
     //console.log(Uscore);
     if(userType==="Admin"&&secretKey!=="Geetanjali")
     {
      toast.warn("Invalid Secret Key", {
        position: "top-center",
      })
    
     }else{
      fetch(`${BASE_URL}/register`, {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            fname,
            lname,
            email,
            password,
            userType,
            score
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userRegister");
            if (data.status === "ok") {
              toast.success("Successfully Registered!", {
                position: "top-center",
              })
              
            
              console.log(score);
            } 
            else if(data.status==="invalid")  {
              toast.warn("Fill required data", {
                position: "top-center",
              })
            }
            else{
              toast.warn("Already Registered", {
                position: "top-center",
              })
            }
          });
     }
       
      }
    
  return (
    <section>
      <div className='sign_container'>
        <div className='sign_header'>
          <img src={pic} alt="logo" />
        </div>
        <div className='sign_form'>

       <form onSubmit={handleSubmit}>
        <h1>Register as</h1>
        <div className='radio'>
        <br/>
      
          <input
          type="radio"
          name="UserType"
          value="User"
          onChange={(e)=>setUserType(e.target.value)}/>
         &nbsp;  User &nbsp; &nbsp; &nbsp; &nbsp;
          <input type="radio"
          name="UserType"
          value="Admin"
          onChange={(e)=>setUserType(e.target.value)}/>
         &nbsp;  Admin
         </div>

          {userType==="Admin"?<div className='form_data
          '>
            <label>Secret Key</label>
            <input
            type="text"
            className='form-control'
            placeholder='Secrret Key'
            onChange={(e)=>setSecretKey(e.target.value)}
            />
          </div>:null}
          
         <div className="form_data">
            <label>First name*</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="form_data
          ">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="form_data
          ">
            <label>Email*</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form_data
          ">
            <label>Password*</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>


            <button type="submit" className="signin_btn ">
              Submit
           </button>
      
          <p className="signin_info">
            Already have an account? <a href="/sign-in" style={{ textDecoration:'none' }}>sign in</a>
          </p>
         
        </form> 
        </div>
        </div>
        <ToastContainer />
      </section>
   
  )
}

export default SignUp