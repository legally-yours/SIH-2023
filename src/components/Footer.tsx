// import React from 'react'
import logoblack from '../assets/logo-black.png';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="left-footer"><div className="left-footer-element"><h3>Company</h3><p>FAQs</p><p>About us</p><p>Contact us</p></div>
        <div className="left-footer-element"><h3>Services</h3><p>Home</p><p>Find lawyers</p></div></div>
        <img className="right-footer" src={logoblack}></img>
    </footer>
    </>
  )
}

export default Footer;