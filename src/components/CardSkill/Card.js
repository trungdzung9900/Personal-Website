import React from 'react'
import CardItem from './CardItem'
import './Card.css'
import {Element} from 'react-scroll'
function Card() {
    return (
        <Element id="my-skill" name="my-skill">
        
        <div className='cards'>
            <h1> My skills</h1>
            <div className="card_container">
                <ul className="cards_items">
                    <CardItem
                        src="image/javascript.png"
                        text="JavaScript"
                    />
                    <CardItem
                        src="image/typescript.png"
                        text="TypeScript"
                    />
                    <CardItem
                        src="image/NodeJs.png"
                        text="NodeJs"
                    />
                    <CardItem
                        src="image/mongodb.png"
                        text="Mongo DB"
                    />
                    <CardItem
                        src="image/mySql.png"
                        text="My SQL"
                    />
                    <CardItem
                        src="image/css3.svg"
                        text="CSS"
                    />
                    <CardItem
                        src="image/html4.png"
                        text="HTML"
                    />
                    {/* <CardItem
                        src="image/react.png"
                        text="React"
                        path='/services'
                    /> */}
                    <CardItem
                        src="image/Python.png"
                        text="Python"
                    />
                    <CardItem
                        src="image/TensorFlow.png"
                        text="TensorFlow"
                    />
                    <CardItem
                        src="image/Keras.png"
                        text="Keras"
                    />

                </ul>
            </div>
        </div>
        </Element>
    )
}

export default Card
