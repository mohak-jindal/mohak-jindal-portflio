import React from 'react'
import "./ContactBannerStyles.css"
import Logo from "../../../assets/logo.png"

const ContactBanner = () => {
  return (
    <>
    <div className="contact-banner">
        <div className="contact-banner-content">
            <img src={Logo} alt="img" className=''/>
            <p>Feel Free To Contact Me!</p>
            <br />
            <a href="/contact" className="link">CONTACT ME</a>
        </div>
    </div>
    </>
  )
}

export default ContactBanner