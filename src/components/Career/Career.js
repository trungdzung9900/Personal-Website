import React from 'react';
import '../../App.js';
import './Career.css';
import timelineElements from './timelineElement';
import { ReactComponent as WorkIcon } from "../../work.svg"
import { ReactComponent as SchoolIcon } from "../../school.svg"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { Element } from 'react-scroll';
function Career() {
  let workIconStyles = { background: "#06D6A0" }
  let schoolIconStyles = { background: "#f9c74f" }
  return (
    <Element id="my-exp" name="my-exp">
    <div>
      <h1 className="title_experience">My Experience</h1>
      <VerticalTimeline>
        {timelineElements.map((element, index) => {
          let isWorkIcon = element.icon === "work";
          let showButton = element.buttonTex && element.buttonTex;
          return (
            
            <VerticalTimelineElement
              key={index}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
        
          );
        })}
      </VerticalTimeline>
    </div>
    </Element>
    
  )
}

export default Career
