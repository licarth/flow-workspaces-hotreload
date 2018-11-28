import React, { Component } from "react";
import "./App.css";
import { computeSquare } from "tools";

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>2²={computeSquare(2)}</p>
          <p>2²={computeSquare("oo")}</p>
        </header>
      </div>
    );
  }
}

export default App;
