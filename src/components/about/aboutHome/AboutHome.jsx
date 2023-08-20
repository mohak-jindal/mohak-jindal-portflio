import React from 'react'
import "./AboutHomeStyle.css"
// import Me from "../../../assets/aboutHome.jpg"

const AboutHome = () => {
  return (
    <>
    <h1 className="heading">ABOUT-ME</h1>
    <div className="about-me">
        <div className="about-img"></div>
        <div className="text">
            <p>I'm Mohak Jindal, a web developer from Shimla, Himachal Pradesh, India. I have a rich experience in website building and designing and customization of websites. I am also good with WordPress, Shopify and Wix. 
            <a href="/about" className='anchor'>LEARN MORE</a>
            </p>
        </div>
    </div>
    </>
  )
}

export default AboutHome