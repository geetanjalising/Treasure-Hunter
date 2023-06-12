import React, {useState} from 'react'
import Typical from 'react-typical'
import { Instructions } from './Instructions';
import "./Instructions.css"
import "./Task3.css"
import { NavLink } from "react-router-dom";
import {BASE_URL} from "../../helper.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import qr1 from "./qr1.jpg";
import qr2 from "./qr2.jpg";
import qr3 from "./qr3.jpg";
import qr4 from "./qr4.jpg";

const Task1 = () => {
  const [hideInstructions, setHideInstructions] = useState(true);
  const showInstructions = () => {
    setHideInstructions(false);
  }
  const [score,setScore]=useState(0);
  const [email,setEmail]=useState("");  
  const [clicked, setClick] = useState(false);
 
  function setFunc(e){
    e.preventDefault();  setScore("3");
   
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
      window.location.href="/task4";
    });
}
  return (
    <div className='task3_body'>
       <h4>score:💰💰</h4>
          <div className='readme'><button onClick={setFunc}>Start</button></div>
          <div className="typical3">
       <Typical 
            loop={Infinity}
            steps={[
              "The dragon is waiting for u to fullfill his hunger. U will spared only if u find his lost egg.....",
              1000,
            ]} /></div>
            <button className="Instructions" 
                style={{borderColor: "navy"}}
                onClick={()=>showInstructions()}>Hint</button>
         {
          !hideInstructions && <Instructions onDismiss={()=>setHideInstructions(true)}/>
          }
          
      <div className='key_images'>
      {clicked ? <>
     <NavLink  to="/loose"><img src={qr1} alt="logo" /></NavLink>
     <NavLink  to="/task4" onClick={handleSubmit}><img src={qr2} alt="logo" /></NavLink>
     <NavLink  to="/loose"><img src={qr3} alt="logo" /></NavLink>
     <NavLink  to="/loose"><img src={qr4} alt="logo" /></NavLink></>:null}
      </div>
      <ToastContainer />
    </div>
  )
}

export default Task1