import React, { Component } from "react";
import '../css/Footer.css'
import {FaEnvelope, FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter, FaWhatsapp} from 'react-icons/fa'
export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <section>
            <div>
              <h3>Farmers Link</h3>
              <p>This is a web application which links farmers and agricultural officers</p>
            </div>
            <div className="footer-contacts">
              <h3>Contact us</h3>
              <p> <a href="#" > <FaEnvelope /><em>email </em></a></p>
              <p> <a href="#"><FaPhoneAlt /><em>call </em></a></p>
              <p> <a href="#"><FaWhatsapp /><em>whatsApp </em></a></p>
            </div>
            <div className="footer-services">
              <h3>Links</h3>
              <p><a href="#">services </a></p>
              <p><a href="#">google map</a></p>
              <p><a href="#">products review</a></p>
              <p><a href="#"></a></p>
            </div>
          </section>
          <div className="socials">
            <em><a href="#"><FaFacebook /> </a></em>
            <em><a href="#"><FaInstagram /> </a></em> 
            <em><a href="#"><FaTwitter /></a></em>
          </div>
        </div>
        <div className="footer-bottom">
          @copy; 2021 Farmers Link platform | Designed and Developed by Sydney Nangulu | 0769123939 Email-nagulusimiti@gmail.com
        </div>
      </div>
    );
  }
}

export default Footer;
