import React, { Component } from "react";
import "../css/login.css";
import LoginImage from '../images/loginImage.png'
import {FaArrowAltCircleRight, FaArrowRight} from 'react-icons/fa'
export class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showLogin: true,
      btnText: 'New user? Register'
    }

    this.toggleForm = this.toggleForm.bind(this)
  }

  toggleForm() {
    if (this.state.showLogin === true) {
      this.setState({ showLogin: false, btnText: 'New user? Register' }, () => {
        document.getElementById('loginform').style.display = 'block'
        document.getElementById('registerform').style.display = 'none'
      })
    } else {
      this.setState({ showLogin: true, btnText: 'Login' }, () => {
        document.getElementById('registerform').style.display = "block"
        document.getElementById('loginform').style.display = "none"
      })
    }
  }
  render() {
    return (
      <div>
        <div class="main-page">
          <div class="info">
            <div className="header">
              <h1>Farmtech Consultancy</h1>
              <h4>Where farmers get quality services</h4>
            </div>
            <div className="login-image">
              <img src={LoginImage} />
            </div>
            <div class="get-started">
              <h2>
                Login or Register to get started <FaArrowAltCircleRight />
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </h2>
            </div>
          </div>

          <div class="login-page">
            <div className="toggleBox">
              <button id="loginBtn" className="active toggle-btn" onClick={this.toggleForm}>{this.state.btnText}</button>
            </div>
            <div class="form">
              <form
                action="/registration"
                method="POST"
                className="registration-form"
                id="registerform"
              >
                <div className="loginReg-input">
                  <input type="text" name="fname" placeholder="First name" />
                  <input type="text" name="lname" placeholder="Last name" />
                  <input type="password" name="pass" placeholder="Password" />
                  <input type="password" name="cpass" placeholder="Confirm password" />
                  <input type="tel" name="phone" placeholder="Phone number" />
                  <input type="email" name="email" placeholder="Email" />
                  <button value="submit">Register</button>
                  {/* <p class="message">
                  Already registerd? <a href="#">Login</a>
                </p> */}
                </div>
              </form>

              <form action="/logindetails" method="POST" className="login-form" id="loginform">
                <div className="loginReg-input">

                  <input type="text" name="username" placeholder="username" />
                  <input type="password" name="pass" placeholder="Password" />
                </div>

                {/* <p class="message">
                  Not registerd? <a href="#">Register</a>
                </p> */}

                {/* <input type="submit">Login</input> */}
                <button value="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
