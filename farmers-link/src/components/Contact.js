import React, { Component } from "react";
import "../css/about.css";

export class Contact extends Component {
  render() {
    return (
        <div class="contact-page">

          <div class="form">
            <form action="contact us" method="post" class="contact-form">
              <input type="text" name="fname" placeholder="First name" />
              <input type="text" name="email" placeholder="Email" />
              <input type="text" name="phone" placeholder="Phone" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Leave us Message here..."
              ></textarea>
              <button class="contact-button">Send</button>
            </form>
          </div>


          <div>
            <p class="contact-head">Get in touch</p>
            <h1>Contact Us</h1>
            <div class="contact-div">
              <div class="icon">
                <i class="fa fa-home"></i>
              </div>
              <div>
                <h3>Address</h3>
                <p>P.O Box 155-40101,</p>
                <p>Nairobi-Kenya</p>
              </div>
            </div>
            <div class="contact-div">
              <div class="icon">
                <i class="fa fa-phone"></i>
              </div>
              <div>
                <h3>Phone</h3>
                <p>+254 769461639</p>
                <p>+254 718734910</p>
              </div>
            </div>
            <div class="contact-div">
              <div class="icon">
                <i class="fa fa-envelope"></i>
              </div>
              <div>
                <h3>Email</h3>
                <a href="">
                  <p>info@sydney.com</p>
                </a>
                <a href="">
                  <p>sydney@gmail.com</p>
                </a>
              </div>
            </div>
          </div>

        </div>
    );
  }
}

export default Contact;
