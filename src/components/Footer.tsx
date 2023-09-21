// import React from 'react'
import logowhite from '../assets/logo-white.png';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="left-footer"><div className="left-footer-element"><p>FAQs</p><p>About us</p><p>Contact us</p></div>
        <div className="left-footer-element"><p>Home</p><p>Find lawyers</p></div></div>
        <img className="right-footer" src={logowhite}></img>
    </footer>
    </>
  )
}

export default Footer;