import React, { Component } from "react";
import Landing from "./components/Landing";
import Services from "./components/Services";
import About from "./components/About";
import Query from "./components/Query";
import Footer from "./components/Footer";
import { Router} from "@reach/router";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact"
export class Main extends Component {
  render() {
    return (
      <>
        <Navigation/>
        <Router>
          <Landing path="/" />
          <About path="/about" />
          <Services path="/services" />
          <Query path="/query-response" />
          <Contact path="/contact"/>
        </Router>
        <Footer />
      </>
    );
  }
}

export default Main;
