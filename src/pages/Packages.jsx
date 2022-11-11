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
    return axios.get(`http://localhost:3000/data`, {
      params: {
        _sort: sort,
        _order: order
      }
    })
  }

  useEffect(() => {
    getData({ sort: "price", order: "asc" }).then(res => {
      setData(res.data.packages)
      setTradingData()
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


<Sliders setData={setData} heading="Tripoto's Mindful Retreats" data={data} />
<Sliders heading="Tripoto's Mindful Retreats" data={data} />

    </div>
  )
}
// ₹


