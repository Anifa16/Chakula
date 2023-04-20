import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';


export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [user, setUser] = useState({})
  const navigate = useNavigate()



  const handleSubmit = (event) => {
    event.preventDefault();
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
        console.log(user)
        // adding user info for our db
        const data = {
          uid: user.uid,
          email: user.email,
        }
        setUser(data)
        setTimeout(() => {
          navigate("/Userprofile");
        }, 1000);
    })
  };

  useEffect(() => {
      // firebase functionality
      const addUserToFirebase = async () => {
        await setDoc(doc(db, "users", user.uid), {
          id: user.uid,
          email: user.email
        })
      }
      if(Object.keys(user).length > 0){
        addUserToFirebase()
      }
  }, [user])
  return (
    <div className='forms'>
      <div>   
        <h2>Update your info</h2>
      </div>
      <form  onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className='btn'>uupdate </button>
      </form>
    </div>
  );
}

