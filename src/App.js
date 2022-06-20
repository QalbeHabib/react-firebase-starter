import "./App.css";
import "./lib/firebase.js";
import { auth } from "./lib/firebase.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React with tailwindcss <br /> Firebase Setup 😎
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
