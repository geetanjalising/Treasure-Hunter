import React, { useEffect, useState } from "react";

import AdminHome from "./AdminHome";
import UserHome from "./userHome";
import {BASE_URL} from "../helper.js"

export default function UserDetails() {
  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);

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
       // console.log(data.data);
       // console.log("Hello");
       if (data.data.userType === "Admin") {
        setAdmin(true);
      }

       setUserData(data.data);
      console.log(data.data);
      //window.localStorage.setItem("name",data.data.fname)
        if (data.data === "token expired") {
          alert("Token expired login again");
          window.localStorage.clear();
          window.location.href = "./sign-in";
        }
      });
  }, []);

  return admin ? <AdminHome/> : <UserHome userData={userData} />
}

