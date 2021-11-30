import React, { Component } from "react";
import "../css/enquiry.css";
import axios from 'axios'

export class Query extends Component {
  constructor(props) {
    super(props)

    this.state = {
      file: '',
      topic: '',
      question: '',
      src: null,
      questions:[],
      userId:this.props.user.id
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.fileInput = this.fileInput.bind(this);
  }

  inputHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  fileInput(e) {
    this.setState({ file: e.target.files[0] }, () => {
      this.convertBase64(this.state.file)
        .then((result) => this.setState({ src: result }))
        .catch((err) => alert(err.message));
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('imageAttached', this.state.file);
    formData.set('topic', this.state.topic);
    formData.set('question', this.state.question);
    formData.set('userId', this.state.userId);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    }
    axios.post(`/query`, formData, config)
      .then((res) => {
        alert("Image uploaded");
      })
      .catch((err) => alert(err.message))
  }

  getImage =(img)=> {
    axios.get(`/image/${img}`, { responseType: "blob" })
      .then((res) => {
        //conerts image to base64
        this.convertBase64(res.data)
          .then((result)=>{
            this.setState({src:result})
          })
          .catch((err) => alert(err.message));
      })
      .catch((err) => alert(err.message))
  }

  convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
    });
  };

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

            <form class="query-form" onSubmit={this.onSubmit}>
              <input type="text" placeholder="Topic" onChange={this.inputHandler} value={this.state.topic} name="topic" />

              <textarea
                name="question"
                cols="50"
                rows="10"
                onChange={this.inputHandler} value={this.state.question}
                placeholder="Question here..."
              />

              <br />
              <p>Please upload image, if any (for elaboration)</p>
              <div style={{display:"flex",flexDirection:"row",width:"100%",padding:"10px"}}>
                <input type="file" accept="images/*" onChange={this.fileInput} style={{padding:"40px"}} />
                <img src={this.state.src} alt="avator" style={{ maxHeight: "150px",padding:"10px",width:"30%" }} />
              </div>
              <br />
              {/* {this.state.src} */}

              <input type="submit" value="send" className="query-button" />
              <input type="reset" value="clear" className="query-button" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Query;
