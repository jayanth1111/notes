import React from 'react'
import "../styles/Skills.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import kill1 from "../assets/kill1.png"
import kill2 from "../assets/kill2.png"
import kill3 from "../assets/kill3.png"
import kill4 from "../assets/kill4.png"
export default function Skills() {
  return (
    <div className='portfolio' id='Skills'>
         <span>Skills</span>
         <Swiper
        spaceBetween={5}
        slidesPerView={2}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={kill1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={kill2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={kill3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={kill4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
