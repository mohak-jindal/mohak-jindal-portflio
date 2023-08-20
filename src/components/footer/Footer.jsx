import React from 'react'
import "./FooterStyles.css"
import { FaInstagramSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa"

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="socials">
        <ul>
            <li>
              <a href="https://www.instagram.com/mohak__jindal/" target='_mohakjindal'>
                <FaInstagramSquare  className='icon insta'/>
              </a>
            </li>
            <li><a href="https://www.linkedin.com/in/mohakjindal/" target='_mohakjindal'><FaLinkedin  className='icon linkedin'/></a></li>
            <li><a href="https://github.com/mohak-jindal" target='_mohakjindal'><FaGithubSquare  className='icon git'/></a></li>
        </ul>
        </div>
        <p>&copy; BY MOHAK JINDAL | ALL RIGHTS RESERVED 2023</p>
    </div>
    </>
  )
}

export default Footer