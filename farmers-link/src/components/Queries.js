import { Link } from "@reach/router";
import axios from "axios";
import React, { Component } from "react";
import ImageController from "./ServerImage";
import { FaSearch } from "react-icons/fa";

export default class Queries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.user.id,
      questions: [],
      searchKey: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.search = this.search.bind(this);
  }
  componentDidMount() {
    this.getMyQueries();
  }

  handleInput(e) {
    this.setState({ searchKey: e.target.value }, () => this.search());
  }

  search() {
    if (this.state.searchKey === "") {
      this.getMyQueries();
    } else {
      axios
        .get(`/search/${this.state.searchKey}`)
        .then((res) => this.setState({ questions: res.data }))
        .catch((err) => alert(err.message));
    }
  }

  getMyQueries() {
    axios
      .get(`/myqueries/${this.state.userId}`)
      .then((res) => this.setState({ questions: res.data }))
      .catch((err) => alert(err.message));
  }

  render() {
    return (
      <div>
        <div class="search-box">
          <input
            className="search-text"
            type="text"
            placeholder="Type here to search"
            value={this.state.searchKey}
            onChange={this.handleInput}
          />
          <br />
          <p>
            <FaSearch />
          </p>
        </div>

        {this.state.questions.map((q, i) => (
          <div className="service" key={i}>
            <h4>Topic: {q.topic}</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <ImageController img={q.imageUrl} />
              <div>
                <b>Query:</b> {q.question}
              </div>
            </div>
            <Link
              to="/reply"
              state={{ questionId: q.id, question: q.question }}
            >
              Give solution
            </Link>
            <h5>Replies</h5>
            <Responses questionId={q.id} />
          </div>
        ))}
      </div>
    );
  }
}

export class Responses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionId: this.props.questionId,
      responses: [],
    };
  }
  componentDidMount() {
    this.getResponses();
  }

  getResponses() {
    axios
      .get(`/responses/${this.state.questionId}`)
      .then((res) => {
        this.setState({ responses: res.data }, () =>
          console.log(this.state.responses)
        );
      })
      .catch((err) => alert(err.message));
  }
  render() {
    return this.state.responses.map((r, i) => (
      <div
        style={{ width: "100%", padding: "20px", backgroundColor: "#0080803b" }}
        key={i}
      >
        <h4>Replied by: {r.userId}</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <ImageController img={r.imageUrl} />
          <p>{r.response}</p>
        </div>
      </div>
    ));
  }
}
