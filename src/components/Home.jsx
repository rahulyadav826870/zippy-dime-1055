import {
  Flex,
  Text,
  Slider,
  Image,
  Grid,
  GridItem,
  Heading,
  Box,
} from "@chakra-ui/react";
import React from "react";

import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar/Navbar";
import Sliders from "./pages/Sliders";
import SetSlider from "./pages/SetSlider";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  const [gridData, setGridData] = useState([]);
  const [data1, setData1] = useState([]);
  const [tradingData, setTradingData] = useState([]);
  const [place, setPlace] = useState([]);
  // const [state,dispatch] =useReducer(reducer,initial)
  // const []

  const getData = ({ sort, order }) => {
    return axios.get(`https://trawel-world.onrender.com/data`);
  };

  useEffect(() => {
    getData({ sort: "price", order: "asc" }).then((res) => {
      setData(res.data.home1);
      setGridData(res.data.home2);
      setData1(res.data.packages);
      setTradingData(res.data.treading);
      setPlace(res.data.placeData);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <Navbar />

      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
        my={"4%"}
        mx="4%"
      >
        <GridItem>
          <Link to={"/packages"}>
          <Image
            w="100%"
            src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png"
            alt="img"
          />
          </Link>
        </GridItem>

        <GridItem>
        <Link to={"/packages"}>
          <Image
            w="100%"
            src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png"
            alt="img"
          />
          </Link>
        </GridItem>
        <GridItem>
        <Link to={"/packages"}>
          <Image
            w="100%"
            src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192273_bb.png"
            alt="Dan Abramov"
          />
          </Link>
        </GridItem>
        <GridItem>
        <Link to={"/packages"}>
          <Image
            w="100%"
            src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192344_dd.png"
            alt="al"
          />
          </Link>
        </GridItem>
      </Grid>

      <Sliders
        slide1={4}
        slide2={4}
        heading="In the Spotlight: Partnerships"
        data={data}
      />

      <SetSlider />

      <Heading
        ml="4%"
        mt="4%"
        mb={{ base: "-4%", md: "0%", lg: "1%" }}
        fontSize={{ base: "20px", lg: "28px" }}
      >
        Find Best Places to Visit in India in April & May
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        mx={"4%"}
        gap={10}
      >
        {gridData.map((el) => (
          <GridItem my={{ base: "34%", md: "12%", lg: "2%" }} key={el.id}>
            <Image
              h="75%"
              borderRadius={"5px"}
              src={el.image}
              alt="travel img"
            />
            <Text textAlign={"left"} fontWeight="700" fontSize={"17px"}>
              {el.des}
            </Text>
            <p style={{ fontSize: "14px", textAlign: "left" }}>
              By <span style={{ color: "#2f9bdb" }}>{el.name}</span>
            </p>
          </GridItem>
        ))}
      </Grid>

      <Box mt={"8%"} mb="4%">
        <Image
          display={"block"}
          m={"auto"}
          width={"92%"}
          borderRadius={"5px"}
          src="https://cdn1.tripoto.com/media/filter/nxxl/img/2215463/Image/1666956480_rajasthan_1.jpg"
          alt=""
        />
      </Box>

      <Sliders
        text="PACKAGE"
        personText=" / person"
        setData={setData1}
        heading="Travel and Learn with Tripoto's Mindful Retreats"
        data={data1}
      />
      <Sliders
        text="PACKAGE"
        personText=" onward"
        heading="Book Budget Tour Packages Curated For You"
        data={tradingData}
        // smallCart={true}
      />

      <Sliders
        slide1={4}
        slide2={4}
        heading="Plan Your Next Trip Using Tripoto's Complete Destination Guides"
        data={place}
      />
      <hr style={{ marginTop: "5%" }} />
      <Footer />
      <hr />
    </div>
  );
}
