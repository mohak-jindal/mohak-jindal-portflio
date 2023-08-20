import React from 'react'
import "./ProjectBannerStyles.css"
import ProjB from "../../../assets/responsive.png"

const ProjectBanner = () => {
  return (
    <>
    <div className="project-banner">
        <div className="project-banner-text">
            <p>RESPONSIVE DESIGNS FOR ALL   THE  DEVICES</p>
        </div>
        <div className="project-banner-img">
            <img src={ProjB} alt="banner" className='banner'/>
        </div>
    </div>
    </>
  )
}

export default ProjectBanner