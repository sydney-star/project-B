import React, { Component } from "react";
import Landing from "./components/Landing";
import Services from "./components/Services";
import About from "./components/About";
import Query from "./components/Query";
import Footer from "./components/Footer";
import { Router } from "@reach/router";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact"
import Queries, { Responses } from "./components/Queries";
import Reply from "./components/Reply";
export class Main extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Router>
          <Landing path="/" user={this.props.user} />
          <About path="/about" user={this.props.user} />
          <Services path="/services" user={this.props.user} />
          <Query path="/make-query" user={this.props.user} />
          <Contact path="/contact" user={this.props.user} />
          <Queries path="/question-answers" user={this.props.user} />
          <Reply path="/reply" user={this.props.user} />
        </Router>
        <Footer />
      </>
    );
  }
}

export default Main;
