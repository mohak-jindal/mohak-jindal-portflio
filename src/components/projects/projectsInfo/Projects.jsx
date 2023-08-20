import React from 'react'
import "./ProjectStyles.css"
import Ecom from "../../../assets/ecommerce.png"
import Blog from "../../../assets/blog.png"
import Rest from "../../../assets/restaurant.png"

const Projects = () => {
  return (
    <>
    <div className="container">
    <h1 className="heading">PROJECTS CREATED</h1>
    <div className="project project-1">
        <div className="project-img">
            <img src={Ecom} alt="ecom" className=''/>
        </div>
        <div className="project-text">
            <h1>E-commerce Website</h1>
            <a href="/services" className="anchor">Learn More</a>
        </div>  
    </div>

    <div className="project project-2">
    <div className="project-text">
            <h1>Blogging Website</h1>
            <a href="/services" className="anchor">Learn More</a>
        </div> 
        <div className="project-img">
            <img src={Blog} alt="blog" className=''/>
        </div> 
    </div>

    <div className="project project-3">
        <div className="project-img">
            <img src={Rest} alt="restaurant" className=''/>
        </div>
        <div className="project-text">
            <h1>Table Booking Restaurant Website</h1>
            <a href="/services" className="anchor">Learn More</a>
        </div>  
    </div>
    </div>
    </>
  )
}

export default Projects