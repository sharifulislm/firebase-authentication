
import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";




const auth = getAuth(app);


function App() {
  const provider = new GoogleAuthProvider();

  const HendileClick  =() =>  {
    signInWithPopup(auth,provider)
    .then ((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
      console.log(error);
    })

  }
  return (
    <div className="App">
 
 <h1> google sign in</h1>

<button onClick={HendileClick}> Google sign in </button>


    </div>
  );
}

export default App;
