import React from 'react'
import "./ServiceStyle.css"

const Service = () => {
  return (
    <>
    <h1 className='heading'>SERVICES I OFFER</h1>
    <div className="s">
        <a href="/services">
        <div className="s-card card-1">
            <p>UI/UX DESIGN</p>
        </div>
        </a>
        <a href="/services">
        <div className="s-card card-2">
            <p>WEB DEVELOPMENT</p>
        </div>
        </a>
        <a href="/services">
        <div className="s-card card-3">
            <p>APP DEVELOPMENT</p>
        </div>
        </a>
    </div>
    </>
  )
}

export default Service