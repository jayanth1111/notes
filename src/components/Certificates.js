import React from 'react'
import "../styles/Certificates.css"
import { getcertificates } from '../assets/dummy'
export default function Certificates() {
    const getcertificate=getcertificates();
  return (
    <div className='certificates' id='Certificates'>
        <div className='c-wrap'>
            <span>Certificates</span>
            <ui>
                {getcertificate.map((certificate)=>{
                    return(
                        <li>{certificate.title}</li>
                    );
                })}
            </ui>
            <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
            <div className="blur c-blur2" style={{ background: "skyblue" }}></div>
        </div>
    </div>
  )
}
