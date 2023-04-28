// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";
import { MdLocationOn } from "react-icons/md";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Button } from "bootstrap";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

export default function Sliders({
  data,
  heading,
  setData,
  HighToLow,
  LowToHigh,
  text1,
  text2,
  slide1 = 3,
  slide2 = 3,
  text,
  personText,
  img,
  addText,
  mt,
}) {
  const handleAdd = (data) => {
    console.log(data);
  };

  return (
    <>
      <Box mt={mt}>
        <Heading ml="4%" my="1%" fontSize={{ base: "20px", lg: "28px" }}>
          {" "}
          {heading}{" "}
        </Heading>
      </Box>

     {data.length>0 ? <Box position="relative" mx={"4%"}>
        <Swiper
          spaceBetween={10}
          navigation
          loop
          loopFillGroupWithBlank={true}
         
          modules={[Pagination, Navigation]}
          breakpoints={{
            // when window width is >= 480px
            375: {
              slidesPerView: 1,
              spaceBetween: 20,
              slidesPerGroup: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
              slidesPerGroup: 3,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
              slidesPerGroup: 4,
            },
          }}
          className="mySwiper"
        >
          {  data.map((el) => {
            return (
              <SwiperSlide key={el.id}>
                <Box >
                  <Image borderRadius={"5"} src={el.image} alt="" />

                  <Text textAlign={"left"} fontWeight={"700"}>
                    {el.des}
                  </Text>
                  <Flex justifyContent={"space-between"}>
                   {el.location &&  <Text
                      fontSize={"14px"}
                      color={"#359391"}
                      fontWeight={"400"}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      {" "}
                      <MdLocationOn color="#359391" />{" "}
                      <span style={{ marginLeft: "5px" }}>{el.location}</span>{" "}
                    </Text> }
                    {el.dayNight &&<Text
                      borderRadius="30px"
                      backgroundColor="#359391"
                      padding="4px 8px"
                      color="white"
                      fontSize="12px"
                      fontWeight="500"
                    >
                      {el.dayNight}
                    </Text> }
                  </Flex>

                  <Flex justifyContent={"space-between"} my={"4%"}>
                   {el.price &&<Text fontWeight={"700"}> ₹ {el.price}
                    <span style={{fontWeight:"400",color:"#333" ,fontSize:"14px"}}>{personText}</span> </Text>}
               {el.price &&<Text className="book">Book Now</Text>}
                    </Flex>
              
                </Box>
              </SwiperSlide>
            );
          }) }
        </Swiper>
      </Box> :<CircularProgress mx={"50%"} size={"100px"} isIndeterminate color='green.300' />}
    </>
  );
}
