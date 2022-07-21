import React from 'react'
import "../styles/Education.css"
import school from "../assets/school.png";
import inter from "../assets/inter.png";
import degree from "../assets/degree.png";
import Card from "./Card"
import resume  from "../assets/resume.pdf"
export default function Education() {
  return (
    <div className='education' id='Education'>
        <div className='e-left'>
            <span>Education</span>
            <a href={resume} download><button className='button e-button'>Download resume</button></a>
            
            <div className='blur e-blur1 ' style={{background:"#ABF1FF94"}}></div>

        </div>
        <div className='cards'>
            <div style={{left:'14rem'}}>
                <Card
                emoji={degree}
                heading={"Btech-CSE"}
                detail={"Bennett University(2019-present)"}
                grade={"7.9/10"}
                />
            </div>
            <div style={{left:'32rem',top:'7rem'}}>
                <Card
                emoji={inter}
                heading={"Intermediate-MPC"}
                detail={"Velociity(2017-2019)"}
                grade={"970/1000"}
                />
            </div>
            <div style={{left:'14rem',top:'14rem'}}>
                <Card
                emoji={school}
                heading={"Class X"}
                detail={"Ridge School(2016-2017)(CBSE)"}
                grade={"10/10"}
                />
            </div>
            <div
          className="blur e-blur2"
          style={{ background: "var(--purple)" }}
        ></div>

        </div>
    </div>
  )
}
