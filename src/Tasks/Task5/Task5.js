import React, {useState} from 'react'
import Typical from 'react-typical'
import { Instructions } from './Instructions';
import "./Instructions.css"
import "./Task5.css"
import {BASE_URL} from "../../helper.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Task1 = () => {
  const [ans,setans]=useState("");
  const [hideInstructions, setHideInstructions] = useState(true);

  const showInstructions = () => {
    setHideInstructions(false);
  }
  const [score,setScore]=useState(0);
  const [email,setEmail]=useState("");  
  const [clicked, setClick] = useState(false); 

  function setFunc(e){
    e.preventDefault();  setScore("5");
   
    setEmail(window.localStorage.getItem("email"));
    
    console.log(email,score);
    setClick(true);
    toast.success("Best of Luck 👍", {
      position: "top-center",
    })
    
   }
  
    function handleSubmit(e) {
      //e.preventDefault();
    
      //console.log(window.localStorage.getItem("email"));
     // const em=window.localStorage.getItem("email");
     // setEmail(em);
    //  console.log(window.localStorage.getItem("email"));
  
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
      window.localStorage.setItem("score",score);
      if(ans==="")
      {
        alert("Please enter the password");
      }
      else if(ans==="EGYPT"){
        window.location.href = "/result";
      }
      else{
        window.location.href = "/loose";
      }
    });
}

  // function handleSubmit(e){
  //   e.preventDefault();
  //   if(ans==="PYRAMID"){
  //     window.location.href = "/result";
  //   }
  //   else{
  //     window.location.href = "/result";
  //   }
  // }
  
  return (
    <div className='task5_body'>
       <h4>score:💰💰💰💰</h4>
       <div className='readme'><button onClick={setFunc}>Start</button></div>
          <div className="typical5">
       <Typical 
            loop={Infinity}
            steps={[
              "Holla! u find treasure, but teasure is password protected,find the password....",
              1000,
            ]} /></div>
            <button className="Instructions" 
                style={{borderColor: "navy"}}
                onClick={()=>showInstructions()}>Hint</button>
         {
          !hideInstructions && <Instructions onDismiss={()=>setHideInstructions(true)}/>
          }
          
          {clicked ? <>  <input placeholder="Enter the password"   onChange={(e) => setans(e.target.value)}></input>

   <button onClick={handleSubmit}>Submit</button></>:null}
   <ToastContainer />
      </div>

  )
}

export default Task1