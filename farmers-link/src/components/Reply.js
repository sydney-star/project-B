import { navigate } from '@reach/router'
import axios from 'axios'
import React, { Component } from 'react'
// import UploadedImage from './UploadedImage'

export default class Reply extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: this.props.user.id,
            questionId: this.props.location.state.questionId,
            response: "",
            file: ""
        }
        this.sendReply = this.sendReply.bind(this);
    }
    sendReply() {
        const formData = new FormData();
        formData.append("imageAttached", this.state.file);
        formData.set("userId", this.state.userId);
        formData.set("questionId", this.state.questionId);
        formData.set("solution", this.state.response);
        const config = {
            headers: {
                "content-type": "multipart/form-data",
            },
        }
        axios.post(`/solution`, formData, config)
            .then(res => navigate("/question-answers"))
            .catch(err => alert(err.message))
    }

    render() {
        return (
            <div style={{ width: "80%", margin: "10px auto", padding: "20px", borderRadius: "10px" }} className="service">
                <div>QueryID: {this.props.location.state.questionId}</div>
                <div>Problem: {this.props.location.state.question}</div>
                <h4>Solution</h4>
                <textarea
                    name="response"
                    cols="50"
                    rows="5"
                    placeholder="solution here ..."
                    onChange={(e) => this.setState({ response: e.target.value })}
                />
                <input type="file" accept="images/*" name="file" onChange={(e) => this.setState({ file: e.target.files[0] })} />
                <input type="submit" value="submit" onClick={this.sendReply} />
            </div>
        )
    }
}
