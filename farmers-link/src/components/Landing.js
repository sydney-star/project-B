import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import '../css/landing.css'
import LandingImage from '../images/givinginfo.jpg'
import Slider from "./Slider";
// import { FaSearch } from 'react-icons/fa';

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show_offices : false,
    }
    this.showOffices = this.showOffices.bind(this);
  }

  //toggle show offices
  showOffices(){
    (!this.state.show_offices ?
      this.setState({show_offices: true})
      :
      this.setState({show_offices: false}))
  }
  render() {
    return (
      <div className="Landing">
        <div class="maincontent-div">
          <div class="search-box">

            <input className="search-text" type="text" name="" placeholder="Type here to search" /><br />
            <p><FaSearch /></p>

          </div>
          <div class="image-content">
            <div class="myimage">
              <Slider />
            </div>
          </div>
        </div>


        <h2 className="landing-links">Quick links</h2>
        <div class="div2">
          <a onClick={this.showOffices} >Official offices</a>
          {
            this.state.show_offices ?
            <div className="offices-toggle">
              <div>In Nairobi, We are Located at Wakulima House, along Haile Salassie Avenue, First Floor</div>
              <div>Call us on: 0713627939/0769123456</div>
              <div></div>
            </div>
            :
            null
          }
          <a href="#">Common agricultural problems</a>
          <a href="#">Some solutions to the problems</a>
          <a href="#">Google maps</a>
          {/* <a href="#">Upload pictures</a> */}
          <a href="#">Products reviews</a>
          {/* <a href="contact.html">Help desk</a> */}
        </div>

        {/* <div class="subscribe-mail">
          <form action="" class="my-form">
            <h3>Enter your email and get the very latest news</h3>
            <input type="text" className="text" placeholder="Email address" />
            <input type="button" value="Subscribe!" class="subscribe-button" />
          </form>
        </div> */}
      </div>
    );
  }
}

export default Landing;
