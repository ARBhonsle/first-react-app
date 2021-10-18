import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to First React App!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello from BridgeLabz
        </a>
        <a
          className="App-link"
          href="https://nodejs.org/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn NodeJS
        </a>
      </header>
    </div>
  );
}

export default App;
