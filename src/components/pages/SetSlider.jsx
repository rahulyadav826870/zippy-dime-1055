import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SetSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
       
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{marginTop:"3%"}}
      >
        <SwiperSlide  >
            <img style={{width:"92%",  borderRadius: "5px"}} src="https://cdn1.tripoto.com/media/filter/nxxl/img/30751/Image/1665394736_homepage_banner_singapore_copy.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide> 
            <img style={{width:"92%",borderRadius: "5px"}} src="https://cdn1.tripoto.com/media/transfer/img/2224454/Image/1665126895_67098315_6056_4dc2_976b_45c23888b05f.gif" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
