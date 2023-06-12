import React, { useState } from 'react'
import Typical from 'react-typical'
import { Instructions } from './Instructions';
import "./Instructions.css"
import "./Task2.css"
import { NavLink } from "react-router-dom";
import {BASE_URL} from "../../helper.js"
import forest from "./forest.jpg";
import desert from "./desert.jpg";
import river from "./river.jpg";
import mountain from "./mountain.jpg";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Task2 = () => {
  const [score, setScore] = useState(0);
  const [email, setEmail] = useState("");
  const [clicked, setClick] = useState(false);

  function setFunc(e) {
    e.preventDefault(); setScore("1");

    setEmail(window.localStorage.getItem("email"));

    console.log(email, score);
    setClick(true);
    toast.success("Best of Luck 👍", {
      position: "top-center",
    })
  }

  

  function handleSubmit(e) {
  e.preventDefault();

    console.log(email);
    console.log("Hello");
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
        window.localStorage.setItem("score", score);
        window.location.href = "/task1";
      });
  }

  const [hideInstructions, setHideInstructions] = useState(true);
  const showInstructions = () => {
    setHideInstructions(false);
  }

  return (
    <div className='task2_body'>
       <h4>score:0</h4>
      <div className="typical2">
        <Typical
          loop={Infinity}
          steps={[
            "  There are four paths. But not all will leade u to treasure. The mermaids wil show u the path......",
            1000,
          ]} />
      </div>
      <button className="Instructions"
        style={{ borderColor: "navy" }}
        onClick={() => showInstructions()}>Hint</button>
      {
        !hideInstructions && <Instructions onDismiss={() => setHideInstructions(true)} />
      }
      <div className='readme'><button onClick={setFunc}>Start</button></div>
      <div className='key_images'>
        {clicked ? <>< NavLink to="/loose"><img src={forest} alt="logo" /></NavLink>
      <NavLink to="/loose"><img src={mountain} alt="logo" /></NavLink>

      <NavLink to="/loose"><img src={desert} alt="logo" /></NavLink>

      <NavLink to="/task1" onClick={handleSubmit} ><img src={river} alt="logo" /></NavLink></>:null}

    </div>
    <ToastContainer />
    </div >
  )
}

export default Task2