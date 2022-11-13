// import logo from './logo.svg';
import './App.css';

import AllRoutes from './components/AllRoutes';
import Sliders from './pages/Sliders';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// import { initializeApp } from "firebase/app";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMFfb6BEugoI_Chx69YeR6pcffat7FpdM",
  authDomain: "travel-world-192be.firebaseapp.com",
  projectId: "travel-world-192be",
  storageBucket: "travel-world-192be.appspot.com",
  messagingSenderId: "995342604703",
  appId: "1:995342604703:web:6b34d0c882b53ecce305aa"
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


function App() {
  return (
    <div className="App">
      <AllRoutes />
      {/* <Sliders/> */}
      {/* <h1>This is home page</h1> */}
    </div>
  );
}

export default App;
