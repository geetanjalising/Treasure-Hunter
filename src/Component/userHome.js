import React from "react";
import "./userHome.css";
import userlogo from "./userlogo.png"


export default function UserHome({ userData }) {
  // window.localStorage.setItem("name",userData.fname);
  const logout = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  }
  return (
    <div className="main">
      <img src={userlogo} />
      <br></br>
      <div className="userBd">

        <div className="userBd2">
          Username <h1>{userData.fname}</h1>
          Email <h1>{userData.email}</h1>
          Score<h1>{userData.score}💰</h1>

          <button onClick={logout}>LogOut</button>

        </div>

      </div>
      </div>

      );
}