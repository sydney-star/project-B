import { Link } from "@reach/router";
import React, { Component } from "react";
import '../css/landing.css'
import Slider from "./Slider";
// import { FaSearch } from 'react-icons/fa';

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show_offices: false,
      showProblems: false,
      showSolutions: false,
      showMaps: false,
      showProducts: false,
    }
    this.showOffices = this.showOffices.bind(this);
    this.problemsToggle = this.problemsToggle.bind(this)
    this.solutionsToggle = this.solutionsToggle.bind(this)
    this.productsToggle = this.productsToggle.bind(this)
  }

  //toggle show offices
  showOffices() {
    (!this.state.show_offices ?
      this.setState({ show_offices: true })
      :
      this.setState({ show_offices: false }))
  }

  //toggle problems
  problemsToggle() {
    (!this.state.showProblems ?
      this.setState({ showProblems: true })
      :
      this.setState({ showProblems: false }))
  }

  //toggle solutions
  solutionsToggle() {
    (!this.state.showSolutions ?
      this.setState({ showSolutions: true })
      :
      this.setState({ showSolutions: false }))
  }

  //toggle products review
  productsToggle() {
    (!this.state.showProducts ?
      this.setState({ showProducts: true })
      :
      this.setState({ showProducts: false }))
  }
  render() {
    return (
      <div className="Landing">
        <div class="maincontent-div">
          <div class="image-content">
            <div class="myimage">
              <Slider />
            </div>
          </div>
        </div>


        <h2 className="landing-links">Quick links</h2>
        <div class="div2">
          <a onClick={this.showOffices} >Official offices</a>
          <a onClick={this.problemsToggle}>Common agricultural problems</a>
          <a onClick={this.solutionsToggle}>Some solutions to the problems</a>
          <a href="#">Google maps</a>
          {/* <a href="#">Upload pictures</a> */}
          <a onClick={this.chemicalToggle}>chemical reviews</a>
          {/* <a href="contact.html">Help desk</a> */}
        </div>

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

        {
          this.state.showProblems ?
            <div>

              <thead>
                <tr>
                  <td>Problem</td>
                  <td>Most affected areas</td>
                  <td>Date posted</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>xxxxx</td>
                  <td>xxxxx</td>
                  <td>xxxxx</td>
                </tr>
              </tbody>
            </div>
            :
            null
        }

        {
          (this.state.showSolutions ?
            <div>

              <thead>
                <tr>
                  <td>Problem</td>
                  <td>Most affected areas</td>
                  <td>Date posted</td>
                  <td>Solution</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>xxxxx</td>
                  <td>xxxxx</td>
                  <td>xxxxx</td>
                  <td>xxxxx</td>
                </tr>
              </tbody>
            </div>
            :
            null)
        }

        {
          this.state.showProducts ?
            <div>

              <thead>
                <tr>
                  <td>Product name</td>
                  <td>Usage</td>
                  <td>Duration</td>
                  <td>Effect</td>
                  <td>Price</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>xxxxx</td>
                  <td>xxxxx</td>
                  <td>xxxxx</td>
                  <td>xxxxx</td>
                  <td>xxxxx</td>
                  <button>Order Now</button>
                </tr>
              </tbody>
            </div>
            :
            null
        }

      </div>


    );
  }
}

export default Landing;
