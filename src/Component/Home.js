import React, { useEffect, useState } from 'react'
import "./Home.css"
import Typical from 'react-typical'
import { Instructions } from './Instructions';
import {BASE_URL} from "../helper.js"
import { NavLink } from "react-router-dom";

const Home = () => {
 const [score,setscore]=useState("");
 const [hideInstructions, setHideInstructions] = useState(true);
  const showInstructions = () => {
    setHideInstructions(false);
  }

 function vis(){
  
  if(score===1)
  {
   window.location.href = "/task1";
  }
  else if(score===2)
  {
   window.location.href = "/task3";
  }
  else  if(score===3)
  {
   window.location.href = "/task4";
  }
  else if(score===4)
  {
   window.location.href = "/task5";
  }
  else  if(score===5)
  {
   window.location.href = "/result";
  }
  else{
   window.location.href = "/task2";
  }
 }
  useEffect(() => {
    fetch(`${BASE_URL}/userData`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        window.localStorage.setItem("score",data.data.score)
     setscore(data.data.score);
      console.log(data.data);
   
     
 
      });
  }, []);

  return (
    <>
    <div className='bg'>
       <div className='content'>
        <h1> 
           <Typical className="typical"
            loop={Infinity}
            steps={[
              "A treasure hunt is all about looking for something and then finding it. It may involve following a series of clues to find objects or a single prize in a particular order......",
              1000,
            ]} />
            </h1>

            <button className="Instructions" 
                // style={{borderColor: "navy"}}
                onClick={()=>showInstructions()}>Must Read</button>
         {
          !hideInstructions && <Instructions onDismiss={()=>setHideInstructions(true)}/>
          }
         <NavLink  to="/task2">
        <button className='start' onClick={vis}>Start Hunting<span> {'> > > >'}</span></button>
          </NavLink>
    </div>
   </div>
    </>
  );
}

export default Home