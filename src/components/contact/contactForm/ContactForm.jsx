import React from 'react'
import "./ContactFormStyles.css"
import { FaLocationArrow } from "react-icons/fa"
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai"

const ContactForm = () => {
  return (
    <>
    <div className="contact-form">
        <div className="left-form">
            <h1>React Me!</h1>
            <ul><AiOutlinePhone className='i'/>
                <li> +91 70180 87740</li>
                <AiOutlineMail className='i'/>
                <li> themohakjindal@gmail.com</li>
                <FaLocationArrow className='i'/>
                <li> Shimla, Himachal Pradesh, India, 171009</li>
            </ul>
        </div>
        <div className="right-form">
            <form action="https://formspree.io/f/xgejvryo"
  method="POST">
                <h1>Send Me a Message!</h1>
                <input name="name" type="text" placeholder='Name'/>
                <input name="number" type="number" placeholder='Number' />
                <input name="email" type="email" placeholder='Email' />
                <textarea name="message" placeholder='Message' id="" cols="30" rows="10"></textarea>
                <button type='submit' className='anchor b' formTarget='_mohakjindal'>SEND</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default ContactForm