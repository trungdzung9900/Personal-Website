import React from 'react'
import { Element } from 'react-scroll'
import '../../App.css'
import './Footer.css'
function Footer() {
    return (
        <Element id="my-contact" name = "my-contact">
            <footer className="footer-container">
                <div className="footer-left">
                    <div>
                    <a href="https://github.com/trungdzung9900" target="_blank">
                    <i className="fab fa-github-square"></i>
                    <span>https://github.com/trungdzung9900</span>
                    </a>
                    </div>
                    <div>
                    <a href="https://www.facebook.com/dzung.tr" target="_blank">
                    <i className="fab fa-facebook-square"></i>
                    <span>https://www.facebook.com/dzung.tr</span>
                    </a>
                    </div>
                    <div>
                    <a href="https://github.com/trungdzung9900" target="_blank">
                    <i className="fab fa-instagram-square"></i>
                    <span>https://www.instagram.com/tdzunggg</span>
                    </a>
                    </div>
                    <div>
                    <a href="https://www.linkedin.com/in/ng-trung-dung-496983187/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                    <span>https://www.linkedin.com/in/ng-trung-dung-496983187</span>
                    </a>
                    </div>
                </div>
                <div className="footer-right">
                    
                    <div className="text-right-info">
                    <div>Contact:</div>
                    <div>
                    <i className="fas fa-phone-square-alt"></i>
                    <span>Phone Number: (+84)911781386</span>
                    
                    </div>
                    <div>
                    <i className="fas fa-envelope-square"></i>
                    <span>Email Address: trungdzung9900@gmail.com</span>
                    
                    </div>
                    </div>
                </div>
            </footer> 
        </Element> 
        
    ) 
}
            
export default Footer
