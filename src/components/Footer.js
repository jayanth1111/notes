import React from 'react'
import "../styles/Footer.css"
import wave from "../assets/wave.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Footer() {
  return (
    <div className='footer'>
        <img src={wave} alt="" style={{width:'100%',height:'300px'}}/>
        <div className="f-content">
        <span>e19cse092@bennett.edu.in</span>
        <div className="f-icons">
          <a href='https://github.com/jayanth1111?tab=repositories'><GitHubIcon color="white" size={"3rem"} /></a>
          <a href='https://www.linkedin.com/in/aluru-jayanth-reddy-08393218b/'><LinkedInIcon color="white" size={"3rem"} /></a>
          <a href='https://instagram.com/mr__ajr?igshid=YmMyMTA2M2Y='><InstagramIcon color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  )
}
