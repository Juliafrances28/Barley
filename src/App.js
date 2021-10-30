import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I love Barley Barley is great!!!</p>
        <a
          className="App-link"
          href="http://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Barley
        </a>
      </header>
    </div>
  );
}

export default App;
