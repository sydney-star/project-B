import React, { Component } from "react";
import Main from "./Main";
import Login from "./components/Login";

export class App extends Component {
  render() {
    return (
      <div>
        <Login />
        <Main />
      </div>
    );
  }
}

export default App;
