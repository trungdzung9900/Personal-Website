import React from 'react'
import CardItem from './CardItem'
import './Card.css'
function Card() {
    return (
        <div className='cards'>
            <h1> My skills</h1>
            <div className="card_container">
                <ul className="cards_items">
                    <CardItem
                        src="image/javascript.png"
                        text="JavaScript"
                        path='/services'
                    />
                    <CardItem
                        src="image/typescript.png"
                        text="TypeScript"
                        path='/services'
                    />
                    <CardItem
                        src="image/NodeJs.png"
                        text="NodeJs"
                        path='/services'
                    />
                    <CardItem
                        src="image/mongodb.png"
                        text="Mongo DB"
                        path='/services'
                    />
                    <CardItem
                        src="image/mySql.png"
                        text="My SQL"
                        path='/services'
                    />
                    <CardItem
                        src="image/css3.svg"
                        text="CSS"
                        path='/services'
                    />
                    <CardItem
                        src="image/html4.png"
                        text="HTML"
                        path='/services'
                    />
                    {/* <CardItem
                        src="image/react.png"
                        text="React"
                        path='/services'
                    /> */}
                    <CardItem
                        src="image/Python.png"
                        text="Python"
                        path='/services'
                    />
                    <CardItem
                        src="image/TensorFlow.png"
                        text="TensorFlow"
                        path='/services'
                    />
                    <CardItem
                        src="image/Keras.png"
                        text="Keras"
                        path='/services'
                    />

                </ul>
            </div>
        </div>
    )
}

export default Card
