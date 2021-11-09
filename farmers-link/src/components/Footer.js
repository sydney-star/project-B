import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div class="footer">
          <div class="footer-content">
            <div class="footer-section about">
              <h3>Farmers Agricultural Officers Link</h3>
              <p>
                <em>
                  Farmers Agricultural Officers Link web application was founded
                  on 19-09-2021 to help provide quality services to farmers and
                  validate farmers agricultural link web application
                </em>
              </p>
              <p>
                <em>
                  Please you are free to reach us any time. We operate 24 hours
                </em>
              </p>
              <p>
                <em>+254769 461639</em>
              </p>
              <p>
                <em>info@sydney.co.ke</em>
              </p>
            </div>
            <div class="footer-section links">
              <h3>Quick Links</h3>
              <ul class="footer-links">
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
                <li>
                  <a href="">Galleries</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>
            <div class="footer-section contact-forms">
              <h3>Leave a Message/Report</h3>
              <textarea
                type="text"
                name="message"
                id="message"
                cols="30"
                rows="5"
              ></textarea>
              <br />
              <button>SEND</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
