import React from "react";
import Navbar from "../components/Navbar";

import logo from "../images/logo.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Sliders from "../pages/Sliders";
import { useState, useEffect } from "react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style.css";
import { style } from "./packageStyle";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Heading } from "@chakra-ui/react";

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
    <div>
      {hide ? (
        <Navbar url="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643284952_container_3_2.jpg" />
      ) : null}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "-156px",
        }}
      >
        <img src={logo} alt="" style={style.imageStyle} />
        <span style={style.sigh}>{">"} </span>{" "}
        <span style={style.heading}>{spanText}</span>
      </div>
      <Heading style={headStyle}>{headingText}</Heading>
      <Swiper
        style={{ marginTop: "165px" }}
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {btnImage.map((el) => (
          <SwiperSlide>
            <img style={{ width: "60%" }} src={el.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            style={{ width: "90%", margin: "10%" }}
            src="https://cdn1.tripoto.com/media/filter/nxxl/img/1516992/Image/1666870699_image_9_1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "90%", margin: "10%" }}
            src="https://cdn1.tripoto.com/media/transfer/img/1516992/Image/1666013189_horror_banner_web1.gif"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "90%", margin: "10%" }}
            src="https://cdn1.tripoto.com/media/filter/nxxl/img/1516992/Image/1663838531_flipbook_banner_2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "90%", margin: "10%" }}
            src="https://cdn1.tripoto.com/media/filter/nxxl/img/1745358/Image/1657185311_baby_shark_banner_web.jpeg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "90%", margin: "10%" }}
            src="https://cdn1.tripoto.com/media/filter/nxxl/img/1516992/Image/1666870699_image_9_1.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      <Heading style={{ textAlign: "left", marginLeft: "3%" }}>
        Shop, Book and Bring Home A Part of Singapore
      </Heading>
      <h2 style={{ textAlign: "left", marginLeft: "3%", fontSize: "19px" }}>
        Everything that comes with the Singapore tag is made with passion. New
        collaborations with Airbnb and Krisshop in India are testament to that.
        Bring the luxurious Singapore shopping experience at home by browsing
        through clothing, food and home decor products. Click on what you like
        and start shopping!
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "30px 26px",
          marginBottom: "-112px",
        }}
      >
        <div>
          <img
            style={{ width: "80%", borderRadius: "20px" }}
            src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643284911_container_3_4.jpg"
            alt=""
          />
          <h2
            style={{
              margin: "20px",
              textAlign: "left",
              marginRight: "84px",
              fontSize: "20px",
            }}
          >
            Wines, self care, gifts and more: shop Singapore-special products on
            Krisshop
          </h2>
        </div>

        <div>
          <img
            style={{ width: "80%", borderRadius: "20px" }}
            src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643284809_container_3_1.jpg"
            alt=""
          />
          <h2
            style={{
              margin: "20px",
              textAlign: "left",
              marginRight: "84px",
              fontSize: "20px",
            }}
          >
            Explore the Fabnest and Baju by Oniatta fashion line on LBB
          </h2>
        </div>
        <div>
          <img
            style={{ width: "77%", borderRadius: "20px" }}
            src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643355480_container_13_2.jpg"
            alt=""
          />
          <h2
            style={{
              margin: "20px",
              textAlign: "left",
              marginRight: "84px",
              fontSize: "20px",
            }}
          >
            Airbnb’s Online Experiences: Made with Passion
          </h2>
        </div>
      </div>

      <Sliders
        text="PACKAGE"
        personText=" / person"
        setData={setData1}
        heading="Travel and Learn with Tripoto's Mindful Retreats"
        data={data1}
      />
    </div>
  );
}
