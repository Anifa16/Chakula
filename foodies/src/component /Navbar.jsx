import { useState, useEffect} from 'react'
import{Link} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import logo from '../images/logo.png';
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

import React from 'react'

export default function Navbar() {
  const [authUser, setAuthUser] = useState('')
  const navigate = useNavigate()

 const userSignOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('signed out')
        navigate('/')
      }).catch((error) => {
        // An error happened.
        console.log(error.message)
      });
  }
 useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          setAuthUser(user);
          }
      });
       return () => {
        unsubscribe();
      };
    }, [auth]);
  return (
    <div>
    {authUser && (
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" className="logos" />
        </div>
        <ul className="navbar">
          <li className="nav">
            <Link className="navlink active" to="/">
              Home
            </Link>
          </li>
          <li className="nav">
            <Link className="navlink" to="/Recipes">
              Recipes
            </Link>
          </li>
          <li className="nav">
            <Link className="navlink" to="/Post">
              Post
            </Link>
          </li>
          <li className="nav">
            <Link className="navlink" to="/About">
              About
            </Link>
          </li>
          <div class="dropdown">
            <button class="dropbtn">Profile</button>
            <div class="dropdown-content">
              <a href="/Userprofile">EditProfile</a>
              <a href="/" onClick={userSignOut}>Logout</a>
            </div>
            </div>
        </ul>
      </nav>
    )}
    {!authUser && (
      <ul className="navbar">
        <li className="nav">
          <Link className="navlink" to="/Login">
            Login
          </Link>
        </li>
        <li className="nav">
          <Link className="navlink" to="/Register">
            Register
          </Link>
        </li>
      </ul>
    )}
  </div>
  
  )
}
