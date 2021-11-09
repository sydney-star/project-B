import React, { Component } from "react";
import "../css/enquiry.css";

export class Query extends Component {
  render() {
    return (
      <div>
        <div class="form">
          <h1>Feel free to enquire</h1>
          <h3>Leave us a Message here</h3>
          <form action="/query.html" method="post" class="query-form">
            <input
              type="text"
              name="fname"
              placeholder="First name"
              class="text"
            />
            <input type="text" name="email" placeholder="Email" class="text" />
            <br />
            <textarea
              name=""
              id=""
              cols="50"
              rows="10"
              placeholder="Message here..."
            ></textarea>
            <br />
            <input type="button" value="send Message" class="query-button" />
            <input type="button" value="clear Message" class="query-button" />
          </form>
        </div>
      </div>
    );
  }
}

export default Query;
