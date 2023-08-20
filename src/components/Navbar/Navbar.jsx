import React, {useState, useEffect} from 'react'
import './NavbarStyles.css'
import { PiHamburgerBold } from "react-icons/pi"
import Logo from "../../assets/logo.png"

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      <div className="logo">
        <a href="/">
        <img src={Logo} alt="logo" className='logoImg' />
        <h1>Mohak Jindal</h1>
        </a>
      </div>
      {(toggleMenu || screenWidth > 1040) && (
      <ul className="list">
      <li className="items"><a href="/">HOME</a></li>
      <li className="items"><a href="/about">ABOUT</a></li>
      <li className="items"><a href="/services">SERVICES</a></li>
      <li className="items"><a href="/contact">CONTACT</a></li>
    </ul>
      )}

      <button onClick={toggleNav} className="btn">
        <PiHamburgerBold className='ham'/>
      </button>
    </nav>
  )
}