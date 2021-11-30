import React, { Component } from "react";
import Main from "./Main";
import Login from "./components/Login";

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {},
      authenticated: false
    }
    this.setUser = this.setUser.bind(this);
    this.rollback = this.rollback.bind(this);
  }

  setUser(obj, value) {
    this.setState({ user: obj, authenticated: value })
  }
  rollback(value) {
    this.setState({ authenticated: value })
  }

  render() {
    let render = this.state.authenticated ? <Main user={this.state.user} /> : <Login setUser={this.setUser} rollback={this.rollback} />;


    return (
      <div>
        {render}
      </div>
    );
  }
}

export default App;
