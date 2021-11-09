import React, { Component } from "react";
import "../css/login.css";

export class Login extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1>Farmetech Consultancy</h1>
        </div>
        <div class="main-page">
          <div class="info">
            <h3>Our Vision</h3>
            <p>
              our vision is to validate farmers agricultural link web
              application and to make it the best application in the country
            </p>
            <h3>Our Mission</h3>
            <p>
              our Mission is to link farmers with agricultural Officers to allow
              them acquire useful agricultural information for them to achieve
              quality and quantity farm Products
            </p>
            <div class="get-started">
              <h2>
                Login or Register to get started{" "}
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </h2>
            </div>
          </div>

          <div class="login-page">
            <h3>Login Here</h3>
            <div class="form">
              <form
                action="/registration"
                method="POST"
                class="registration-form"
              >
                <input type="text" name="fname" placeholder="First name" />
                <input type="text" name="lname" placeholder="Last name" />
                <input type="password" name="pass" placeholder="Password" />
                <input type="password" name="cpass" placeholder="Confirm password"/>
                <input type="tel" name="phone" placeholder="Phone number" />
                <input type="email" name="email" placeholder="Email" />
                <button value="submit">Register</button>
                <p class="message">
                  Already registerd? <a href="#">Login</a>
                </p>
              </form>

              <form action="/logindetails" method="POST" class="login-form">
                <input type="text" name="username" placeholder="username" />
                <input type="password" name="pass" placeholder="Password" />

                <p class="message">
                  Not registerd? <a href="#">Register</a>
                </p>

                {/* <input type="submit">Login</input> */}
                <button value="submit">Login</button>
                <a href="main.html">login here</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
