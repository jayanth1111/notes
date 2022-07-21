import React from 'react'
import "../styles/Home.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import jayanth from "../assets/jayanth.jpg"
export default function Home() {
  return (
    <div className='home'>
        <div className='h-left'>
            <div className='h-left1'>
                <span>Hii! I am </span>
                <span>Jayanth Reddy Aluru</span>
                <span>Descriptionxcfgvb vgbn bjjcfvghbcvgbycvbtvbh
                    v bn ncvb n
                </span>
            </div>
            <div className='h-icons'>
                <a href='https://github.com/jayanth1111?tab=repositories'><GitHubIcon/></a>
                <a href='https://www.linkedin.com/in/aluru-jayanth-reddy-08393218b/'><LinkedInIcon/></a>
                <a href='https://instagram.com/mr__ajr?igshid=YmMyMTA2M2Y='><InstagramIcon/></a>
            </div>
            
        </div>
        <div className='h-right'>
            
            <img  src={jayanth} alt=""/>
            <div className='blur' ></div>
            <div className='blur' style={{
                background:"#C1F5FF",
                top:"17rem",
                width:'21rem',
                height:'11rem',
                left:"-9rem"}}></div>
        </div>
    </div>
  )
}
