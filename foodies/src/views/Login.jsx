import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    
    setTimeout(() => {
      navigate("/Recipes");
    }, 1000);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log({
      error: errorCode,
      message: errorMessage
    })
  });
  };

  return (
    <div className='login'>
      <br />
      <br />
      <div>   
        <h1>Login</h1>
      </div>
      <form  onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className='btn'>Login</button>
      </form>
      <br />
      <h4>If you don't have an account, you can register for one by clicking <br/><strong><Link className="navlink" to="/Register">here</Link></strong> to register.</h4>
    </div>
  );
};
