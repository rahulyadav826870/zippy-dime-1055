import React from "react";
import Navbar from '../Navbar/Navbar'

import logo from "../images/logo.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Sliders from "../pages/Sliders";
import { useState, useEffect } from "react";
import axios from "axios";
import { Text,Image, Box, Flex } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";
import { style } from "./packageStyle";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Heading } from "@chakra-ui/react";
import Footer from "../Footer";

const btnImage = [
  {
    img: "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1666081573_flipbook.jpg",
  },
  {
    img: "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643704984_shop.jpg",
  },
  {
    img: "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643966989_sg_web_series_button.jpg",
  },
  {
    img: "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643704774_events.jpg",
  },
  {
    img: "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643705006_whats_new_in_sg.jpg",
  },
  {
    img: "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643967015_sg_for_foodies.jpg",
  },
  {
    img: "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643705019_videos.jpg",
  },
  {
    img: "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643704729_articles.jpg",
  },
];

const headStyle = {
  marginTop: "141px",
  marginBottom: "-138px",
  textAlign: "left",
  marginLeft: "3%",
};

export default function VisitSingapore({
  headingText = "Reimagine Singapore With Tripoto",
  hide = true,
  spanText = "Reimagine Singapore With Tripoto",
}) {
  const [data1, setData1] = useState([]);

  const getData = ({ sort, order }) => {
    return axios.get(`https://trawel-world.onrender.com/data`);
  };

  useEffect(() => {
    getData({ sort: "price", order: "asc" }).then((res) => {
      setData1(res.data.packages);
    });
  }, []);
  return (
    <>
      {hide ? (
        <Navbar url="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643284952_container_3_2.jpg" />
      ) : null}
    
      <Text
        display={"flex"}
        alignItems={"center"}
        mb="-12%"
        mx={{ base: "-7%", md: "-1%", lg: "1%" }}
      >
        <Image src={logo} alt="" style={style.imageStyle} />
        <span style={{ margin: "0 1% 0 -2%" }}>{">"} </span>{" "}
        <span>{spanText}</span>
      </Text>

      <Heading  ml="4%"
        mt="12%"
        mb= "3%" 
        fontSize={{ base: "20px", lg: "28px" }}>{headingText}</Heading>
      <Box mx="2%">
      <Swiper
       
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
       
        navigation={true}
        modules={[Pagination, Navigation]}
        // className="mySwiper"
      >
        {btnImage.map((el) => (
          <SwiperSlide key={el.id}>
            <img key={el.id} style={{ width: "60%" }} src={el.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      </Box>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
   
      >
        <SwiperSlide>
          <img
            style={{ width: "93%", margin: "5%",borderRadius:"5px" }}
            src="https://cdn1.tripoto.com/media/filter/nxxl/img/1516992/Image/1666870699_image_9_1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "93%", margin: "5%",borderRadius:"5px" }}
            src="https://cdn1.tripoto.com/media/transfer/img/1516992/Image/1666013189_horror_banner_web1.gif"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "93%", margin: "5%",borderRadius:"5px" }}
            src="https://cdn1.tripoto.com/media/filter/nxxl/img/1516992/Image/1663838531_flipbook_banner_2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "93%", margin: "5%",borderRadius:"5px" }}
            src="https://cdn1.tripoto.com/media/filter/nxxl/img/1745358/Image/1657185311_baby_shark_banner_web.jpeg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "93%", margin: "5%",borderRadius:"5px" }}
            src="https://cdn1.tripoto.com/media/filter/nxxl/img/1516992/Image/1666870699_image_9_1.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      <Heading    mx="4%"
        // mt="1%"
        mb={{ lg: "1%" }}
        fontSize={{ base: "20px", lg: "28px" }}>
        Shop, Book and Bring Home A Part of Singapore
      </Heading>
      <Text mx="4%"
        fontSize={"16px"}
        mb="2%"
        style={{ textAlign: "left" }}
        lineHeight={"29px"}>
        Everything that comes with the Singapore tag is made with passion. New
        collaborations with Airbnb and Krisshop in India are testament to that.
        Bring the luxurious Singapore shopping experience at home by browsing
        through clothing, food and home decor products. Click on what you like
        and start shopping!
      </Text>

      <Flex mx="2%"
        display={"flex"}
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        justifyContent={"space-between"}
        mb="3%" >
   
   <Box>
          <Image
           display={{ base: "block" }}
           margin={{ base: "auto" }}
           w={{ base: "100%", md: "85%", lg: "85%" }}
           my={{ base: "2%" }}
           borderRadius={"5px"}
            // style={{ width: "80%", borderRadius: "20px" }}
          
            src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643284911_container_3_4.jpg"
            alt=""
          />
          <Text
          textAlign={"left"}
          mx={{lg:"6%"}}
          fontSize={"18px"}
          fontWeight={"700"}
          >
            Wines, self care, gifts and more: shop Singapore-special products on
            Krisshop
          </Text>
          </Box>
      

   <Box>
          <Image
            // style={{ width: "80%", borderRadius: "20px" }}
            display={{ base: "block" }}
          margin={{ base: "auto" }}
          w={{ base: "100%", md: "85%", lg: "85%" }}
          my={{ base: "2%" }}
          borderRadius={"5px"}
            src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643284809_container_3_1.jpg"
            alt=""
          />
          <Text
          textAlign={"left"}
          mx={{lg:"6%"}}

          fontSize={"18px"}
          fontWeight={"700"}
          >
            Explore the Fabnest and Baju by Oniatta fashion line on LBB
          </Text>
          </Box>

          <Box>

       
          <Image
            // style={{ width: "77%", borderRadius: "20px" }}
            display={{ base: "block" }}
          margin={{ base: "auto" }}
          w={{ base: "100%", md: "85%", lg: "85%" }}
          my={{ base: "2%" }}
          borderRadius={"5px"}
            src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643284952_container_3_2.jpg.webp"
            alt=""
          />
          <Text
          textAlign={"left"}
          mx={{lg:"6%"}}

          fontSize={"18px"}
          fontWeight={"700"}
            // style={{
            //   margin: "20px",
            //   textAlign: "left",
            //   marginRight: "84px",
            //   fontSize: "20px",
            // }}
          >
            Airbnb’s Online Experiences: Made with Passion
          </Text>   </Box>
   
        
      </Flex>

      <Sliders
        text="PACKAGE"
        personText=" / person"
        setData={setData1}
        heading="Travel and Learn with Tripoto's Mindful Retreats"
        data={data1}
      />
      <hr style={{marginTop:'4%', border: "1px solid #e4dddd" }} />

      <Footer />
    </>
  );
}
