import React from 'react'
import { Element } from 'react-scroll'
import '../App.css'
import './Information.css'
function Career() {
    return (
        <Element id='my-inf' name= 'my-inf'>
        <div className="information">
            <div className="left-content">
                <img src="./image/678.svg" />
            </div>
            <div className="right-content" >
                <h1 className="title"> About me </h1>
                <div className="text-information">
                    My name is Nguyen Trung Dung , I am a back end development.<br/>
                    This is my website, hope you will have an interesting experience with this website
                </div>
            </div>
        </div>
        </Element>
    )
}

export default Career
