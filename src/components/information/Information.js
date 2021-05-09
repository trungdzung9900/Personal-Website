import React from 'react'
import { Element } from 'react-scroll'
import '../../App.css'
import './Information.css'
function Career() {
    return (
        <Element id='my-inf' name= 'my-inf'>
        <h1 className="title"> About me </h1>
        <div className="information">
            <div className="left-content">
                <img src="./image/678.svg" />
            </div>
            <div className="right-content" >
                <div className="text-information">
                    My name is Nguyen Trung Dung, I come from Ha Noi, Viet Nam, I am 22 years old.<br/>
                    I am passionate about music, photography, sports and programming. I am working as a back end development <br/>
                    This is my website, hope you will have an interesting experience.
                </div>
            </div>
        </div>
        </Element>
    )
}

export default Career
