import React, { useEffect } from 'react'
import logo from "../images/logo.png"
import { Heading } from '@chakra-ui/react'
import Home from '../components/AllRoutes'
import MainNavbar from '../components/MainNavbar'
import Navbar from '../components/Navbar'
import axios from 'axios'

export default function Packages() {



  const style = {

    imageStyle: {
      width: "100px",
      borderRadius: "54%",
      padding: "36px",
      mixBlendMode: "unset",
      // marginTop: "-18px"
    },
    sigh: {
      margin: "0px -23px"
    },
    heading: {
      margin: "0px 28px",
      color: "#4a4ac6"
    }

  }


const getData=()=>{
  return axios.get("http://localhost:3000/packages")
}

useEffect(()=>{
  getData().then(res=>console.log(res))
},[])


  return (


    <div>
      <Navbar url="https://cdn1.tripoto.com/media/filter/nxxl/img/311219/Image/1573737581_screen_shot_2019_11_14_at_6_46_59_pm.jpg" />
      
      <div style={{
        display: "flex",
        alignItems: "center"
      }}>

        <img src={logo} alt="" style={style.imageStyle} />


        <span style={style.sigh}>{">"} </span> <span style={style.heading}>Exclusive Tours & Holiday Packages</span>
      </div>

      <Heading>  </Heading>





    </div>
  )
}
