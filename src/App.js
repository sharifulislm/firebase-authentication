
import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';




const auth = getAuth(app);


function App() {

const [user , setUser] =useState({});



  const googleProvider = new GoogleAuthProvider();
  const gihubprovider = new GithubAuthProvider();

  const HendileClick  =() =>  {

    signInWithPopup(auth,googleProvider)
    .then ((result) => {
      const user = result.user;
      setUser(user);
    })
    .catch(error => {
      console.log(error);
    })

  }
const HandleGihubSignIn =() => {

signInWithPopup(auth, gihubprovider)
.then(result => {
  const user =result.user;
  setUser(user);
  console.log(user);
})
.catch(error => {
  console.log(error);
})

}


const handleSignOut = () => {

signOut(auth)
.then( () => {
  setUser({});
} )
.catch( error => {
  setUser({});
})

};



  return (
    <div className="App">
 
 <h1> google sign in</h1>

 <h3>User Name :{user.displayName} </h3>
 <h4> User Email : {user.email}</h4>
 <img src={user.photoURL} alt="" />

{
  user.email ?   <button onClick={handleSignOut}> SignOut </button> :

  <> <button onClick={HendileClick}> Google sign in </button>

  <button onClick={HandleGihubSignIn}> gitHub sign in</button> </>


}



    </div>
  );
}

export default App;
