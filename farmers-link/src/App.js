import React, { Component } from "react";
import Main from "./Main";
import Login from "./components/Login";

export class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      isLoggedIn: false
    }
    this.AllowLogin = this.AllowLogin.bind(this)
  }

  AllowLogin(){
    this.setState({isLoggedIn: true})
  }
  render() {
    return (
      <div>
        {(this.state.isLoggedIn ? 
          <Main />
          :
          <Login action={this.AllowLogin}/>
        )}
        
        
      </div>
    );
  }
}

export default App;
