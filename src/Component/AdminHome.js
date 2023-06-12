import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./AdminHome.css"
import {BASE_URL} from "../helper.js"

export default function AdminHome({ userData }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllUser();
    }, []);

    const getAllUser = () => {
        fetch(`${BASE_URL}/getAllUser`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");
                setData(data.data);
            });
    }
    const logout = () => {
        window.localStorage.clear();
        window.location.href = "./sign-in";
    }

    const deleteUser = (id, name) => {
        if (window.confirm(`Are u sure u want to delete ${name}`)) {

            fetch(`${BASE_URL}/deleteUser`, {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    userid: id,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    toast.success(`Deleted Successfully!`, {
                        position: "top-center",
                    })
                    //alert(data.data);
                    getAllUser();
                });
        }
        else {

        }
    };

    return (
        <div className="adminbd">
            <h1>Welcome Admin</h1>
            <table style={{ width: "auto" }}>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>UserType</th>
                    <th>Score</th>
                    <th>Delete</th>
                </tr>
                {data.map((i) => {
                    return (
                        <tr>
                            <td>{i.fname}</td>
                            <td>{i.email}</td>
                            <td>{i.userType}</td>
                            <td>{i.score}</td>
                            <td><FaTrash onClick={() => deleteUser(i._id, i.fname)} /></td>
                        </tr>
                    )
                })}
            </table>
            <button onClick={logout}>LogOut</button>
            <ToastContainer />
        </div>
    );
}