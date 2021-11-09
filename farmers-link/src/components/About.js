import React, { Component } from "react";
import givinginfo from "../images/givinginfo.jpg";
import prunning from "../images/prunning.jpg";
import weedControl from "../images/weedcontrol.jpg";
import seedTesting from "../images/seedtesting.jpg";
import soilfertility from "../images/soilfertility.jpg";
import pestControl from "../images/pestscontrol.jpg";
import "../css/about.css";

export class About extends Component {
  render() {
    return (
      <>
        <div class="about-page">
          <div class="heading">
            <h1>About us</h1>
            <p>
              Farmers Agricultural Officers Link web application was founded on
              19-09-2021 to help provide quality services to farmers and
              validate farmers agricultural link web application{" "}
            </p>
          </div>

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
          </div>
        </div>

        <h2 class="do">What We Do</h2>
        <div >
          <div>
            <h3>
              Seed testing for germination, varietal purity, disease screening.
            </h3>
            <img src={seedTesting} alt="avator" />
            <p class="lorem" id="lorem-toggle">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </p>
          </div>

          <div>
            <h3>Weed control measures.</h3>
            <img src={weedControl} alt="avator" />
            <p class="lorem" id="lorem-weed">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </p>
          </div>

          <div>
            <h3>Checking on farm soil fertility.</h3>
            <img src={soilfertility} alt="avator" />
            <p class="lorem" id="lorem-soil">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </p>
          </div>

          <div class="hide-services" id="hideServices">
            <div>
              <h3>Giving information on various agricultural practices.</h3>
              <img src={givinginfo} alt="avator" />
              <p class="lorem" id="lorem-practice">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </p>
            </div>

            <div>
              <h3>Plants and animals pest and disease control measures.</h3>
              <img src={pestControl} alt="avator" />
              <p class="lorem" id="lorem-disease">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </p>
            </div>

            <div>
              <h3>
                Farm management practices eg prunning, spraying, weeding e.t.c{" "}
              </h3>
              <img src={prunning} alt="avator" />
              <p class="lorem" id="lorem-prun">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
