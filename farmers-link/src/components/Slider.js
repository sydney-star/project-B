import React, { Component } from 'react'
import { Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import "../css/Slider.css"

import Img0 from '../images/givinginfo.jpg'
import Img1 from '../images/soilfertility.jpg'
import Img2 from  '../images/seedtesting.jpg'
import Img3 from '../images/weedcontrol.jpg'


export class Slider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            slideImages: [
                // "../images/givinginfo.jpg",
                // "images/seedtesting.jpg",
                // "images/soilfertility.jpg",
                // "images/weedcontrol.jpg",
                Img0,
                Img1,
                Img2,
                Img3,
            ]
        }
    }

    render() {
        
        const { slideImages } = this.state;
           
        const properties = {
            duration: 3000,
            transitionDuration: 2000,
            infinite: true,
            indicators: true,
            arrows: true
        }
        
        return (
            <div className="slide-container">
                <Slide {...properties}>

                    <div className="each-slide">
                        <div className="background" style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                            <span>Giving farmers information</span>
                        </div>
                    </div>

                    <div className="each-slide">
                        <div className="background" style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                            <span>Checking soil fertility</span>
                        </div>
                    </div>
                    
                    <div className="each-slide">
                        <div className="background" style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                            <span>Seed testing</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div className="background" style={{ 'backgroundImage': `url(${slideImages[3]})` }}>
                            <span>Weed control</span>
                        </div>
                    </div>
                </Slide>
            </div>
        )
    }
}

export default Slider