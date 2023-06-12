import React, {useState} from 'react'
import Typical from 'react-typical'
import { Instructions } from './Instructions';
import "./Instructions.css"
import "./Task1.css"
import { NavLink } from "react-router-dom";
import {BASE_URL} from "../../helper.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Key2 from "./key2.jpg";
import Key3 from "./key3.jpg";
import Key4 from "./key4.jpg";
import Key5 from "./key5.jpg";

const Task1 = () => {
    const [score,setScore]=useState(0);
   const [email,setEmail]=useState("");  
   const [clicked, setClick] = useState(false);
   
  const [hideInstructions, setHideInstructions] = useState(true);
  const showInstructions = () => {
    setHideInstructions(false);
  }

  function setFunc(e){
    e.preventDefault(); 
     setScore("2");
   
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
      window.location.href="/task3";
    });
}
  
  return (
    <div className='task1_body'>
        <h4>score:💰</h4>
          <div className="typical1">
       <Typical 
            loop={Infinity}
            steps={[
              "Holla!! The monster has just snatched the key and kept in one of these places. Find the key  to enter the treasure hunt arena.....",
              1000,
            ]} /></div>
            <button className="Instructions" 
                style={{borderColor: "navy"}}
                onClick={()=>showInstructions()}>Hint</button>
         {
          !hideInstructions && <Instructions onDismiss={()=>setHideInstructions(true)}/>
          }
          <div className='readme'><button onClick={setFunc}>Start</button></div>
            
      <div className='key_images'>
      {clicked ? <>
     <NavLink  to="/loose"><img src={Key4} alt="logo" /></NavLink>
     <NavLink  to="/loose"><img src={Key3} alt="logo" /></NavLink>
     <NavLink  to="/task3" onClick={handleSubmit}><img src={Key2} alt="logo" /></NavLink>
     
     <NavLink  to="/loose"><img src={Key5} alt="logo" /></NavLink></>:null}
      </div>
      <ToastContainer />
    </div>
  )
}

export default Task1