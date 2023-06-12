import React, {useState} from 'react'
import Typical from 'react-typical'
import { Instructions } from './Instructions';
import "./Instructions.css"
import "./Task4.css"
import { NavLink } from "react-router-dom";
import {BASE_URL} from "../../helper.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import door1 from "./door1.jpg";
import door2 from "./door2.jpg";
import door3 from "./download.jpg";
import therightdoor from "./therightdoor.jpg";

const Task1 = () => {
  const [hideInstructions, setHideInstructions] = useState(true);
  const showInstructions = () => {
    setHideInstructions(false);
  }

  const [score,setScore]=useState(0);
  const [email,setEmail]=useState("");  
  const [clicked, setClick] = useState(false);

  function setFunc(e){
    e.preventDefault();  setScore("4");
   
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
      window.location.href="/task5";
    });
}

  
  return (
    <div className='task4_body'>
       <h4>score:💰💰💰</h4>
          <div className='readme'><button onClick={setFunc}>Start</button></div>
          <div className="typical4">
       <Typical 
            loop={Infinity}
            steps={[
              "A man builds a house with all 4 sides facing south. A bear walks past the house. The right door is the number of letters in the color of beer......",
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
     <NavLink  to="/task5" onClick={handleSubmit}><img src={therightdoor} alt="logo" /></NavLink>
     <NavLink  to="/loose"><img src={door1} alt="logo" /></NavLink>
     <NavLink  to="/loose"><img src={door2} alt="logo" /></NavLink>
     
      <NavLink  to="/loose"><img src={door3} alt="logo" /></NavLink></>:null}
      </div>
      <ToastContainer />
    </div>
  )
}

export default Task1