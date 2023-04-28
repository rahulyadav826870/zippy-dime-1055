import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";

import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { style } from "./packageStyle";

import Sliders from "./Sliders";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import Footer from "../Footer";

export default function Packages() {
  const [data, setData] = useState([]);
  const [tradingData, setTradingData] = useState([]);

  const getData = ({ sort, order }) => {
    return axios.get(`https://trawel-world.onrender.com/data`, {
      params: {
        _sort: sort,
        _order: order,
      },
    });
  };

  useEffect(() => {
    getData({ sort: "price", order: "asc" }).then((res) => {
      setData(res.data.packages);
      setTradingData(res.data.treading);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <Navbar url="https://cdn1.tripoto.com/media/filter/nxxl/img/311219/Image/1573737581_screen_shot_2019_11_14_at_6_46_59_pm.jpg" />

      <Text
        display={"flex"}
        alignItems={"center"}
        mb="-12%"
        mx={{ base: "-7%", md: "-1%", lg: "1%" }}
      >
        <Image src={logo} alt="" style={style.imageStyle} />
        <span style={{ margin: "0 1% 0 -2%" }}>{">"} </span>{" "}
        <span>Exclusive Tours & Holiday Packages</span>
      </Text>

      <Sliders
        text="PACKAGE"
        personText=" / person"
        setData={setData}
        heading="Tripoto's Mindful Retreats"
        data={data}
        mt="12%"
      />
      <Sliders
        text="PACKAGE"
        personText=" onward"
        heading="Trending Domestic Packages"
        data={tradingData}
      />

      <Heading
        ml="4%"
        mt="4%"
        mb={{ lg: "1%" }}
        fontSize={{ base: "20px", lg: "28px" }}
      >
        Customizable Tour Packages
      </Heading>
      <Text ml="4%" fontSize={"16px"}>
        Need help in getting a perfect travel experience according to your need?
        Tripoto has curated several travel packages covering some of the most
        popular holiday destinations for you!
      </Text>
      <Flex
        mx="2%"
        display={"flex"}
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        justifyContent={"space-between"}
      >
        <Image
          display={{ base: "block" }}
          margin={{ base: "auto" }}
          w={{ base: "100%", md: "30%", lg: "30%" }}
          my={{ base: "2%" }}
          borderRadius={"5px"}
          src="https://cdn1.tripoto.com/media/filter/tst/img/1789711/Image/1597313001_coup.jpg"
          alt=""
        />
        <Image
          display={"block"}
          margin={"auto"}
          w={{ base: "100%", md: "30%", lg: "30%" }}
          my={{ base: "2%" }}
          borderRadius={"5px"}
          src="https://cdn1.tripoto.com/media/filter/tst/img/1789711/Image/1597742263_f.jpg"
          alt=""
        />
        <Image
          display={"block"}
          margin={"auto"}
          w={{ base: "100%", md: "30%", lg: "30%" }}
          my={{ base: "2%" }}
          borderRadius={"5px"}
          src="https://cdn1.tripoto.com/media/filter/tst/img/1789711/Image/1597312306_budget.jpg"
          alt=""
        />
      </Flex>

      <Heading
        ml="4%"
        mt="1%"
        mb={{ lg: "1%" }}
        fontSize={{ base: "20px", lg: "28px" }}
      >
        Discover the best tour packages on TrawelWorld
      </Heading>
      <Text
        mx="4%"
        fontSize={"16px"}
        mb="2%"
        style={{ textAlign: "left" }}
        lineHeight={"29px"}
      >
        We all need to get out of our routine and hit the road every once in a
        while to experience the magic of travel. TrawelWorld offers some of the
        best tour packages and customised holidays in India and abroad to help
        you unwind and discover the world. On offer are a range of travel
        destinations which are perfect for a trip with family or friends. Solo
        travellers can chose from a range of treks and tour packages in budget
        friendly destinations in India and around the world. Holiday packages on
        TrawelWorld are handpicked to cater to a variety of travel styles and
        requirements.
      </Text>

      <Heading
        ml="4%"
        mt="1%"
        mb={{ lg: "1%" }}
        fontSize={{ base: "20px", lg: "28px" }}
      >
        Pick from hundreds of holiday packages
      </Heading>
      <Text
        mx="4%"
        fontSize={"16px"}
        mb="2%"
        style={{ textAlign: "left" }}
        lineHeight={"29px"}
      >
        There is something for everyone who visits on TrawelWorld platform.
        Whether you wish to get a taste of India's rich heritage in Rajasthan,
        or pay a visit to the Himalayas to heal your senses; it's all included.
        Also, on offer are international holiday packages, specially curated for
        Indian travellers. Witness the breathtaking beaches of Thailand or
        stroll through the bustling cities in Australia. Newlyweds can chose
        from some of the most sought after honeymoon destinations like Maldives
        or Iceland, or go off the beaten path in destinations like China or
        Egypt. If you are looking for a quick break, plan a weekend getaway to
        some of the top hideouts near your city. Business travellers and group
        tours are in the mix as well - popular packages include trips to places
        like Dubai and Malaysia. If you are seeking some serious adventure,
        select from trekking packages through some of the most scenic
        mountainous ranges in the world and capture moments for a lifetime.
        Skydiving, scuba diving, adventure biking, and much more on TrawelWorld
        - it's a one of the most dynamic selection of trips and activities for
        Indian travellers.
      </Text>

      <Heading
        ml="4%"
        mt="1%"
        mb={{ lg: "1%" }}
        fontSize={{ base: "20px", lg: "28px" }}
      >
        How to book holidays with TrawelWorld?
      </Heading>
      <Text
        mx="4%"
        fontSize={"16px"}
        mb="2%"
        style={{ textAlign: "left" }}
        lineHeight={"29px"}
      >
        Booking holidays on TrawelWorld is as easy as it gets. Pick from
        hundreds of packages. We will then connect you with your choices of
        travel providers via email and/or phone. TrawelWorld partners with
        leading travel companies in India, like MakeMyTrip, Thomas Cook, SOTC,
        Yatra, to name a few, to help you plan the perfect vacation.
        <br />
        <br />
        Here is the step-by-step guide to booking domestic or international
        packages on TrawelWorld.
        <br />
        <b>Step 1:</b> Click on the 'Book Holidays' button on the top right
        corner of any page on TrawelWorld. <br /> <b>Step 2:</b> You will be
        taken to a page with different categories of packages. <br />{" "}
        <b>Step 3:</b> Click on any package to submit your requirements. We will
        attend to your query and put you in touch with a representative from our
        travel partners within 48 hours.
      </Text>

      <Heading
        ml="4%"
        mt="1%"
        mb={{ lg: "1%" }}
        fontSize={{ base: "20px", lg: "28px" }}
      >
        Why book holidays with TrawelWorld?
      </Heading>
      <Text
        mx="4%"
        fontSize={"16px"}
        mb="2%"
        style={{ textAlign: "left" }}
        lineHeight={"29px"}
      >
        <span style={{ color: "#2f9bdb" }}>TrawelWorld's</span> travel partners
        provide some of the best India tour packages and International tour
        packages. We are passionate about travel and strive to offer experiences
        that matter. We have a team of experienced travellers who can help you
        curate & plan the ideal getaway!
      </Text>
      <hr style={{ border: "1px solid #e4dddd" }} />
      <Footer />
    </>
  );
}
// ₹
