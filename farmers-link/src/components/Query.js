import React, { Component } from "react";
import "../css/enquiry.css";

export class Query extends Component {
  render() {
    return (
      <div className="query-body">
        <div class="query-part">
          <div>
            <h1>Feel free to enquire</h1>
            <h2>
              We give a reply as soon as possible
            </h2>
          </div>
          <div className="query-message">
            <h3>Leave us your question here</h3>
            <form class="query-form">
              <input type="text" placeholder="Topic"/>
              <textarea
                name=""
                id=""
                cols="50"
                rows="10"
                placeholder="Question here..."
              ></textarea>
              <br />
              <p>Please upload image, if any (for elaboration)</p>
              <input type="file" accept="images/*" /> <br />
              <input type="button" value="send" class="query-button" />
              <input type="button" value="clear" class="query-button" />
            </form>

          </div>
        </div>
        <div className="queryResponse-buttons">
          <button>My Queries</button> <br />
          <button>Responses</button>
        </div>
      </div>
    );
  }
}

export default Query;
