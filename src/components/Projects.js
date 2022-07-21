import React from 'react'
import "../styles/Projects.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { getprojects } from '../assets/dummy';
export default function Projects() {
    const getproject=getprojects();
  return (
    <div className="t-wrapper" id="Projects">
      <div className="t-heading">
        <span>Projects </span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {getproject.map((project)=>{
            return(
                <SwiperSlide>
              <div className="testimonial">
                
                <span>{project.title}</span>
                <a href={project.link}><button className='button'>Github/url</button></a>
                <span>{project.description}</span>
                <span>Tools used: {project.tools}</span>
              </div>
            </SwiperSlide>
            );
        }

        )}</Swiper></div>
  )
}
