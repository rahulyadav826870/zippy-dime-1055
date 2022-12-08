import { Slider } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Sliders from "../pages/Sliders";
import { useEffect, useState } from "react";
import axios from "axios";
import SetSlider from "../pages/SetSlider";

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

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "30px 0px 0px 0px",
        }}
      >
        <img
          style={{ width: "300px", borderRadius: "20px" }}
          src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png"
          alt="img"
        />

        <img
          style={{ width: "300px" }}
          src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png"
          alt="img"
        />

        <img
          style={{ width: "300px", borderRadius: "20px" }}
          src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192273_bb.png"
          alt="Dan Abramov"
        />

        <img
          style={{ width: "300px", borderRadius: "20px" }}
          src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192344_dd.png"
          alt="al"
        />
      </div>

      <Sliders
        slide1={4}
        slide2={4}
        heading="In the Spotlight: Partnerships"
        data={data}
      />

      <SetSlider />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gridTemplateRows: "2",
          textAlign: "center",
          gap: "10px",
          margin: "auto 20px",
          padding: "10px",
        }}
      >
        {gridData.map((el) => (
          <div key={el.id} style={{ marginBottom: "50px" }}>
            <img
              style={{ width: "90%", height: "80%", borderRadius: "20px" }}
              src={el.image}
              alt="travel img"
            />
            <h2 style={{ fontSize: "17px", textAlign: "left" }}>{el.des}</h2>
            <p style={{ fontSize: "17px", textAlign: "left", color: "blue" }}>
              By {el.name}
            </p>
          </div>
        ))}
      </div>

      <img
        style={{ margin: "5%", width: "90%", borderRadius: "20px" }}
        src="https://cdn1.tripoto.com/media/filter/nxxl/img/2215463/Image/1666956480_rajasthan_1.jpg"
        alt=""
      />

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
      />

      <Sliders
        slide1={4}
        slide2={4}
        heading="Plan Your Next Trip Using Tripoto's Complete Destination Guides"
        data={place}
      />
    </div>
  );
}
