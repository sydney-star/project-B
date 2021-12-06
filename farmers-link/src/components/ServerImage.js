import axios from "axios";
import React, { Component } from "react";

export default class ImageController extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: "",
      img: this.props.img,
    };
    this.getImage = this.getImage.bind(this);
  }

  componentDidMount() {
    this.getImage();
  }

  getImage() {
    if (this.state.img === "null") {
      console.log("No url");
    } else {
      axios
        .get(`/image/${this.state.img}`, { responseType: "blob" })
        .then((res) => {
          //conerts image to base64
          this.convertBase64(res.data)
            .then((result) => {
              this.setState({ src: result });
            })
            .catch((err) => alert(err.message));
        })
        .catch((err) => alert(err.message));
    }
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
    let v =
      this.state.src === "null" ? (
        <span>No Image</span>
      ) : (
        <img
          src={this.state.src}
          alt="avator"
          style={{ maxHeight: "150px", borderRadius: "10px" }}
        />
      );
    return <>{v}</>;
  }
}
