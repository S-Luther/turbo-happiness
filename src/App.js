import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBigw7mJf0KYy4OBJv7Y6QI8nGDuDIXRbY",
  authDomain: "cs-322-0.firebaseapp.com",
  projectId: "cs-322-0",
  storageBucket: "cs-322-0.appspot.com",
  messagingSenderId: "416702487992",
  appId: "1:416702487992:web:45bb3fdfc16dc674cd434d",
  measurementId: "G-3NSQJDVRRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
