import React, { Component } from "react";
import "./App.css";
import { computeSquare } from "tools";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>2²={computeSquare(2)}</p>
          <p>2²={computeSquare("2")}</p>
        </header>
      </div>
    );
  }
}

export default App;
