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

export default function Sliders({ data,heading,setData,HighToLow,LowToHigh,text1,text2,slide1=3,slide2=3 ,text,personText,img}) {

    
    // const HighToLow = () => {

    //     // const data1 = data.sort(
    //     //   function (a, b) {
    //     //     return a.price - b.price
    //     //   }

    //     // )
    //     // // console.log("Click")
    //     // setData(data1)
    //     // // getData({ sort: "price", order: "asc" })
    // }

    // const LowToHigh = () => {

    //     const data1 = data.sort(
    //       function (a, b) {
    //         // let numPrice=Number(a.price)
    //         // let numPrice1=Number(b.price)
    //         // console.log(typeof(numPrice))
    //         // return numPrice -numPrice1
    //         return a.price - b.price
    //       }
    //     )
    //     console.log(data1)
    //     setData(data1)
    //     // console.log("Click")
    // }

    return (
        <>

            <div style={{ display: "flex", justifyContent: "space-around",marginTop:"160px" }}>
                <Heading> {heading} </Heading>
                <button onClick={HighToLow} style={{display:"none"}}>{text1}</button>
                <button onClick={LowToHigh}>{text2}</button>

            </div>

            <Swiper
                slidesPerView={slide1}
                spaceBetween={30}
                slidesPerGroup={slide2}
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

                    return <SwiperSlide><img style={{borderRadius: "20px"}} src={el.image} alt="" />
                      <p>{text}</p>
                            <p>{el.des}</p>
                            <div>
                                <p>{el.location}</p>
                                <p>{el.dayNight}</p>
                            </div>
                            <p>{el.price}{personText}</p>

                    </SwiperSlide>
                }


                )}
            </Swiper>
        </>
    );
}
