import React from "react";
import logo from "./logo.svg";
import "./App.css";

//components
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Banner />
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
