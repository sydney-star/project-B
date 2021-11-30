import React, { Component } from 'react'

export default class UploadedImage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            src: '',
            img: this.props.img
        }
        this.getImage = this.getImage.bind(this);
    }

    componentDidMount() {
        this.getImage();
        alert(this.state.img);
    }

    getImage() {
        this.convertBase64(this.state.img)
            .then((result) => {
                this.setState({ src: result })
            })
            .catch((err) => alert(err.message));
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
            <img src={this.state.src} alt="avator" style={{ maxHeight: "150px", borderRadius: "10px" }} />
        )
    }
}
