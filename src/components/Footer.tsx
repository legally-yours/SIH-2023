// import React from 'react'
import logoblack from '../assets/logo-black.png';
import '../styles/Footer.css'
import TransalateButton from './TransalateButton';


const Footer = () => {
  return (
    <>

      <footer>
        <div className="left-footer">
          <div className="left-footer-element">
            <h3>Company</h3>
            <p>• FAQs</p>
            <p>• About us</p>
            <p>• Contact us</p>
          </div>
          <div className="left-footer-element">
            <h3>Services</h3>
            <p>• Home</p>
            <p>• Find lawyers</p>
          </div>
          <div className="left-footer-element">
            <h3>Legal</h3>
            <p>• Terms and conditions</p>
            <p>• Privacy policy</p>
          </div>
          <div className="left-footer-element"><TransalateButton></TransalateButton></div></div>
        </div>
        <img className="right-footer" src={logoblack}></img>
      </footer>
    </>
  );
};

export default Footer;