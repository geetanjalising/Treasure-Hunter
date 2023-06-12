import React, {useState } from 'react'
import "./sign.css"
import pic from "./logo.png";
import {BASE_URL} from "../helper.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    console.log(email, password);
    fetch(`${BASE_URL}/login`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
       
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "logIned");
        if (data.status === "ok") {
          toast.success("Welcome to TreasureHunt", {
            position: "top-center",
          })
      
          window.localStorage.setItem("token",data.data);
          window.localStorage.setItem("loggedIn",true);
          window.localStorage.setItem("email",email);
          window.location.href="./";
        } 
        else 
        toast.warn("Invalid Username or Password", {
          position: "top-center",
        })
         
        }
      );
  }
  return (
    <section>  
         <div className='sign_container'>
     <div className='sign_header'>
          <img src={pic} alt="logo" />
        </div>
        <div className='sign_form1'>
     <form onSubmit={handleSubmit}>


          <h3>Sign In</h3>

          <div className="form_data">
            <label>Email </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form_data">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="signin_btn">
              Submit
            </button>
          
          <div className="create-accountinfo">
          <p>New To TreasureHunt? <a href="/sign-up" style={{ textDecoration:'none' }}>Register Here</a></p>
          
          </div>
          
        </form>
        </div>
        </div>
        <ToastContainer />
    </section>
  )
}

export default SignIn