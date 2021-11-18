import React, { Component } from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import "../css/contact.css";
import { FaHome, FaTwitter } from "react-icons/fa";
import ContactBackground from '../images/contactUsImage.jpg'

export class Contact extends Component {
  render() {
    return (
      <div className="contact-body" style={{ 'backgroundImage': `url(${ContactBackground})` }}>
        <h1 className="contact-header">Contact Us Here</h1>
        <div className="contact-page">


          {/* <p class="contact-head">Get in touch</p> */}
          <div className="contact-content">
            <div class="contact-div">
              <div class="icon">
                <FaHome />
              </div>
              <div>
                <h3>Address</h3>
                <p>P.O Box 155-40101,</p>
                <p>Nairobi-Kenya</p>
              </div>
            </div>
            <div class="contact-div">
              <div class="icon">
                <FaPhoneAlt />
              </div>
              <div>
                <h3>Phone</h3>
                <p>+254 769461639</p>
                <p>+254 718734910</p>
              </div>
            </div>
            <div class="contact-div">
              <div class="icon">
                <FaEnvelope />
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
        <div className="contact-info">
          <div className="contact-form">
            <form action="contact us" method="post" class="contact-form">
              <input type="text" className="text" placeholder="Email address" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Leave us Message here...">
              </textarea>
              <button class="contact-button">Send</button>
            </form>
          </div>
          <div>
            <h2 className="contact-header">Follow us</h2>
            <div className="follow-links">
              <span> <a href="#"><FaFacebook /><em>Facebook</em> </a></span>
              <span> <a href="#"><FaTwitter />Twitter </a></span>
              <span> <a href="#"><FaInstagram />Instagram </a></span>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Contact;
