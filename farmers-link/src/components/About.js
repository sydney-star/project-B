import React, { Component } from "react";
import "../css/about.css";

export class About extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="about-heading">
          <div className="first-div">
            <h1>Get to know us</h1>
            <p>
              Farmers Agricultural Officers Link web application was founded on
              19-09-2021 to help provide quality services to farmers and
              validate farmers agricultural link web application{" "}
            </p>
          </div>

          <div class="mission-vision">
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

        <div className="what-we-do">
          <h2 class="do">What We Do</h2>
          <div>
            <h3>
              Seed testing for germination, varietal purity, disease screening.
            </h3>
            <p class="lorem" id="lorem-toggle">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </p>
          </div>

          <div>
            <h3>Weed control measures.</h3>
            <p class="lorem" id="lorem-weed">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </p>
          </div>

          <div>
            <h3>Checking on farm soil fertility.</h3>
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
              <p class="lorem" id="lorem-practice">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </p>
            </div>

            <div>
              <h3>Plants and animals pest and disease control measures.</h3>
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
              <p class="lorem" id="lorem-prun">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
