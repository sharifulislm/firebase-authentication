
import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from 'react';




const auth = getAuth(app);


function App() {

const [user , setUser] =useState({});



  const provider = new GoogleAuthProvider();

  const HendileClick  =() =>  {

    signInWithPopup(auth,provider)
    .then ((result) => {
      const user = result.user;
      setUser(user);
    })
    .catch(error => {
      console.log(error);
    })

  }
  return (
    <div className="App">
 
 <h1> google sign in</h1>

 <h3>User Name :{user.displayName} </h3>
 <h4> User Email : {user.email}</h4>
 <img src={user.photoURL} alt="" />

<button onClick={HendileClick}> Google sign in </button>


    </div>
  );
}

export default App;
