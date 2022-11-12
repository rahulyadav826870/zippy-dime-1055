import React, { useEffect, useReducer, useState } from 'react'
import logo from "../images/logo.png"
import Home from '../components/AllRoutes'
import MainNavbar from '../components/MainNavbar'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { style } from "./packageStyle"
// import PackagesFun from './PackagesFun'
// import Slider from 'react-slick'
import Sliders from './Sliders'
import { Heading } from '@chakra-ui/react'


// const initial={
//   type:"packages"
// }

// const reducer(state,action){
//   switch(action.type){
//     case "packages":
//       return{
//         ...data,
//         data:
//       }
//   }
// }

export default function Packages() {

  const [data, setData] = useState([])
  const[tradingData,setTradingData] =useState([])
// const [state,dispatch] =useReducer(reducer,initial)
// const []

  const getData = ({ sort, order }) => {
    return axios.get(`http://localhost:3004/data`, {
      params: {
        _sort: sort,
        _order: order
      }
    })
  }

  useEffect(() => {
    getData({ sort: "price", order: "asc" }).then(res => {
      setData(res.data.packages)
      setTradingData(res.data.treading)
      console.log(res.data)
    })
  }, [])


  return (
    <div>
      <Navbar url="https://cdn1.tripoto.com/media/filter/nxxl/img/311219/Image/1573737581_screen_shot_2019_11_14_at_6_46_59_pm.jpg" />

      <div style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "-156px"
      }}>

        <img src={logo} alt="" style={style.imageStyle} />


        <span style={style.sigh}>{">"} </span> <span style={style.heading}>Exclusive Tours & Holiday Packages</span>
      </div>


<Sliders text="PACKAGE" personText=" / person" setData={setData} heading="Tripoto's Mindful Retreats" data={data} />
<Sliders text="PACKAGE"  personText=" onward" heading="Trending Domestic Packages" data={tradingData} />


<Heading >Customizable Tour Packages</Heading>
<p style={{margin:"16px"}}>Need help in getting a perfect travel experience according to your need? Tripoto has curated several travel packages covering some of the most popular holiday destinations for you!</p>
<div style={{display:"flex", justifyContent:"space-around"}}>
  <img style={{width:"25%",borderRadius: "20px"}} src="https://cdn1.tripoto.com/media/filter/tst/img/1789711/Image/1597313001_coup.jpg" alt="" />
  <img style={{width:"25%",borderRadius: "20px"}} src="https://cdn1.tripoto.com/media/filter/tst/img/1789711/Image/1597742263_f.jpg" alt="" />
  <img style={{width:"25%",borderRadius: "20px"}} src="https://cdn1.tripoto.com/media/filter/tst/img/1789711/Image/1597312306_budget.jpg" alt="" />
</div>

<Heading  style={{  marginTop: "40px",
    textAlign: "left"}}>Domestic Getaways
</Heading>
<h3 style={{textAlign: "left"}}>There's a striking difference between travelling on your own terms and being bound by an itinerary designed by somebody else. That's why, Tripoto allows you to customise your packages to the best possible extent. Choose from Tripoto's select range of sanitised properties available at unbelievable prices for a safe & memorable getaway!</h3>


<Heading style={{  marginTop: "40px",
    textAlign: "left"}}>Pick from hundreds of holiday packages</Heading>
<h3 style={{textAlign: "left"}}>There is something for everyone who visits on Tripoto platform. Whether you wish to get a taste of India's rich heritage in Rajasthan, or pay a visit to the Himalayas to heal your senses; it's all included. Also, on offer are international holiday packages, specially curated for Indian travellers. Witness the breathtaking beaches of Thailand or stroll through the bustling cities in Australia. Newlyweds can chose from some of the most sought after honeymoon destinations like Maldives or Iceland, or go off the beaten path in destinations like China or Egypt. If you are looking for a quick break, plan a weekend getaway to some of the top hideouts near your city. Business travellers and group tours are in the mix as well - popular packages include trips to places like Dubai and Malaysia. If you are seeking some serious adventure, select from trekking packages through some of the most scenic mountainous ranges in the world and capture moments for a lifetime. Skydiving, scuba diving, adventure biking, and much more on Tripoto - it's a one of the most dynamic selection of trips and activities for Indian travellers.</h3>


<Heading style={{  marginTop: "40px",
    textAlign: "left"}}>How to book holidays with Tripoto?</Heading>
<h3 style={{textAlign: "left"}}>Booking holidays on Tripoto is as easy as it gets. Pick from hundreds of packages. We will then connect you with your choices of travel providers via email and/or phone. Tripoto partners with leading travel companies in India, like MakeMyTrip, Thomas Cook, SOTC, Yatra, to name a few, to help you plan the perfect vacation. Here is the step-by-step guide to booking domestic or international packages on Tripoto.

Step 1: Click on the 'Book Holidays' button on the top right corner of any page on Tripoto.

Step 2: You will be taken to a page with different categories of packages.

Step 3: Click on any package to submit your requirements. We will attend to your query and put you in touch with a representative from our travel partners within 48 hours.</h3>
    </div>
  )
}
// ₹


