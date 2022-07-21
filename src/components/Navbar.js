import React from 'react'
import "../styles/Navbar.css"
import { Link } from 'react-scroll';
export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='n-left'>
            <div className='n-left1'>Jayanth Reddy</div>
        </div>
        <div className='n-right'>
            <div className='n-right-list'>
                <ul style={{listStyleType:'none'}}>

                    <li>
                    <Link activeClass="activeClass" to="Navbar" spy={true} smooth={true}>Home</Link></li>
                    <li>
                    <Link  to="Education" spy={true} smooth={true}>Education</Link></li>
                    <li>
                    <Link  to="Skills" spy={true} smooth={true}>Skills</Link></li>
                    <li>
                    <Link  to="Projects" spy={true} smooth={true}>Projects</Link></li>
                    <li>
                    <Link  to="Certificates" spy={true} smooth={true}>Certificates</Link></li>
                </ul>
            </div>
            <Link  to="Contact" spy={true} smooth={true}>
            <button className='button n-button'>Contact</button></Link>
        
        </div>
    </div>
  );
}
