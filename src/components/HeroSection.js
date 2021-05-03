import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'
import { Element } from 'react-scroll'
function HeroSection() {
    return (
        <Element id="my-home" name = "my-home">
        <div className = 'hero-container'>
            {/* <video src="/video/video-2.mp4" autoPlay loop muted/> */}
            <div class="circular_image">
            <img src="./image/profileImage.jpg"/>
            </div>
            
            <h1>Nguyen Trung Dung</h1>
            <p>Love the life you live. Live the life you love </p>
            <div className="hero-btns">
                <Button className = 'btns' buttonStyle='btn--outline'
                buttonSize = 'btn--large'>GET STARTED</Button>
                  {/* <Button className = 'btns' buttonStyle='btn--primary'
                buttonSize = 'btn--large'>WATCH TRAILER<i className='far fa-play-circle'/></Button> */}
            </div>
            
        </div>
        </Element>
    )
}

export default HeroSection
