import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Heading } from '@chakra-ui/react'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Sliders({ data,heading,setData }) {

    
    const HighToLow = () => {

        // const data1 = data.sort(
        //   function (a, b) {
        //     return a.price - b.price
        //   }

        // )
        // // console.log("Click")
        // setData(data1)
        // // getData({ sort: "price", order: "asc" })
    }

    const LowToHigh = () => {

        const data1 = data.sort(
          function (a, b) {
            // let numPrice=Number(a.price)
            // let numPrice1=Number(b.price)
            // console.log(typeof(numPrice))
            // return numPrice -numPrice1
            return a.price - b.price
          }
        )
        console.log(data1)
        setData(data1)
        // console.log("Click")
    }

    return (
        <>

            <div style={{ display: "flex", justifyContent: "space-around",marginTop:"160px" }}>
                <Heading> {heading} </Heading>
                <button onClick={HighToLow}>High To Low</button>
                <button onClick={LowToHigh}>Low To High</button>

            </div>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {data.map(el => {

                    return <SwiperSlide><img src={el.image} alt="" />
                      <p>{"PACKAGE"}</p>
                            <p>{el.des}</p>
                            <div>
                                <p>{el.location}</p>
                                <p>{el.dayNight}</p>
                            </div>
                            <p>{el.price}{"/"}{"person"}</p>

                    </SwiperSlide>
                }


                )}
                {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </>
    );
}
