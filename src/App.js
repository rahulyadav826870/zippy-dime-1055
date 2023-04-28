
import AllRoutes from './components/AllRoutes';

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Check from './components/check';

const firebaseConfig = {
  apiKey: "AIzaSyCMFfb6BEugoI_Chx69YeR6pcffat7FpdM",
  authDomain: "travel-world-192be.firebaseapp.com",
  projectId: "travel-world-192be",
  storageBucket: "travel-world-192be.appspot.com",
  messagingSenderId: "995342604703",
  appId: "1:995342604703:web:6b34d0c882b53ecce305aa"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);


function App() {
  return (
    <div className="App">
      <AllRoutes />
{/* <Check />     */}
    </div>
  );
}

export default App;
