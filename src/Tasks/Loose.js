import React from 'react'
import "./Loose.css"
import { NavLink } from "react-router-dom";

const Loose = () => {


  return (
  <>
    <div className='loose_body'>
      <h1>U loose the Game!</h1>
      <NavLink  to="/task2">
    <button>Play Again</button>
    </NavLink>
    </div>
   
    
    </>
  ) 
}

export default Loose