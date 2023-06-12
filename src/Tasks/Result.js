import React from 'react'
import { NavLink } from "react-router-dom";
import "./Result.css"
const Result = () => {
  return (
    <div className='bd'>
        <div className='bd1'>
       <h1>Congratulations! You found the treasure.</h1>
       <h2> Your score: 💰💰💰💰💰</h2>
       <NavLink to="/"><button >Go to home</button></NavLink>
       <NavLink to="/task2"><button>Play Again</button></NavLink>
       </div>
       </div>
  )
}

export default Result