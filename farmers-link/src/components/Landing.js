import { Link } from "@reach/router";
import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import '../css/landing.css'
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
          <Link to="#">Common agricultural problems</Link>
          <Link to="#">Some solutions to the problems</Link>
          <Link to="#">Google maps</Link>
          <Link to="#">Products reviews</Link>
        </div>
      </div>
    );
  }
}

export default Landing;
