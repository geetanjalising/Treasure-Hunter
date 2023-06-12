import React,{useState} from 'react'
import "./Play.css"
import {BASE_URL} from "../helper.js"


const Play = () => { 
  const [score,setScore]=useState("");
  const [email,setEmail]=useState("");
  

  
  const handleSubmit=(e)=>{ e.preventDefault(); 
    //console.log(window.localStorage.getItem("email"));
    setEmail(window.localStorage.getItem("email"));
    console.log(email);
  
  fetch(`${BASE_URL}/updateScore`, {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
   email,
   score
    })
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "scoreUpdated");
      console.log(data.score);
      setScore(data.score);
    });
}


 return (
    <div className='playbd'>
    
       Enter a number  <input type="text"  
              placeholder="Enter any number"
              onChange={(e)=>setScore(e.target.value)}
             />
             <button onClick={handleSubmit}>Submit</button>
             {/* <SignUp Uscore={score}/> */}
    </div>
  )
}

export default Play