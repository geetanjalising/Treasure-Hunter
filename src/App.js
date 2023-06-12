import React, {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Component/Home'
import SignIn from './Component/SignIn'
import SignUp from './Component/SignUp'
import Play from './Component/Play'
import { GiHamburgerMenu } from "react-icons/gi";
import UserDetails from './Component/userDetails'
import Task1 from './Tasks/Task1/Task1'
import Task2 from './Tasks/Task2/Task2'
import Task3 from './Tasks/Task3/Task3'
import Task4 from './Tasks/Task4/Task4'
import Task5 from './Tasks/Task5/Task5'
import Loose from './Tasks/Loose'
import Result from './Tasks/Result'


function App() {
  const [showHamb, setHamb] = useState(false);
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>

      <nav className="navbar">
        <div className='leftnav'> 
        <Link className="nav-link" id="elm" to={'/'}>
         <h1>Treasure Hunt</h1> 
        </Link>
        </div>
       
        <div className={ showHamb ? "mobileview":"xyz" }>
        <Link className="nav-link"  id="elm" to={'/sign-in'}>
          Login
        </Link>

          <Link className="nav-link"   id="elm"to={'/sign-up'}>
            Register
          </Link>


          <Link className="nav-link"  id="elm" to={'/account'}>
           { isLoggedIn==="true"?window.localStorage.getItem("email").split('@')[0]:"Account"}
          </Link>
          </div>
          
        <div className='rightnav'>
          <Link className="nav-link"  id="elm" to={'/sign-in'}>
          Login
        </Link>

          <Link className="nav-link"   id="elm"to={'/sign-up'}>
            Register
          </Link>


          <Link className="nav-link"  id="elm" to={'/account'}>
           { isLoggedIn==="true"?window.localStorage.getItem("email").split('@')[0]:"Account"}
          </Link></div>
 <div className="Hamburger">
          <a href="#" onClick={() => setHamb(!showHamb)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </nav>
     

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/userDetails" element={<UserDetails />} />
        <Route path="/account" element={isLoggedIn === "true" ? <UserDetails /> : <SignIn />} />
        <Route path="/play" element={isLoggedIn === "true" ? <Play /> : <SignIn />} />
        <Route path="/task1" element={isLoggedIn === "true"?<Task1/>: <SignIn />} />
        <Route path="/task2" element={<Task2/>} />
        <Route path="/task3" element={<Task3/>} />
        <Route path="/task4" element={<Task4/>} />
        <Route path="/task5" element={<Task5/>} />
        <Route path="/result" element={<Result/>} />
        <Route path="/loose" element={<Loose/>} />
      </Routes>


    </Router>
  )
}

export default App
